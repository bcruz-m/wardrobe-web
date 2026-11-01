// Usage: swift remove-dev-button.swift <input> <output.png> [cropTop]
// Paints out the blue Expo Go dev-menu button in the top-right corner of a
// screenshot. Rows above any content frame are filled with the page
// background beside the button; rows inside a frame are filled from the pixel
// directly below the button, which preserves vertical frame edges.
import AppKit
import CoreGraphics

let args = CommandLine.arguments
guard args.count == 3 || args.count == 4,
      let src = NSImage(contentsOfFile: args[1]),
      let cg = src.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
    fatalError("cannot load input")
}
let w = cg.width, h = cg.height
var px = [UInt8](repeating: 0, count: w * h * 4)
let ctx = CGContext(data: &px, width: w, height: h, bitsPerComponent: 8, bytesPerRow: w * 4,
                    space: CGColorSpaceCreateDeviceRGB(),
                    bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue)!
ctx.draw(cg, in: CGRect(x: 0, y: 0, width: w, height: h))

// Bitmap rows run top-down in memory for this context.
func idx(_ x: Int, _ y: Int) -> Int { (y * w + x) * 4 }
func rgb(_ x: Int, _ y: Int) -> (Int, Int, Int) {
    let i = idx(x, y); return (Int(px[i]), Int(px[i + 1]), Int(px[i + 2]))
}

// 1. Bounding box of strongly blue pixels in the top-right region.
var minX = w, minY = h, maxX = -1, maxY = -1
for y in 0..<(h / 6) {
    for x in (w * 6 / 10)..<w {
        let (r, g, b) = rgb(x, y)
        if b > 150 && b - r > 90 && b - g > 30 {
            minX = min(minX, x); maxX = max(maxX, x); minY = min(minY, y); maxY = max(maxY, y)
        }
    }
}
guard maxX >= 0 else { fatalError("no blue button found") }
// Grow to cover the soft drop shadow.
let m = Int(Double(w) * 0.05)
let x0 = max(0, minX - m), x1 = min(w - 1, maxX + m)
let y0 = max(0, minY - m), y1 = min(h - 1, maxY + m)

// 2. Where does a content frame start? Scan down the column just left of the
//    box; the first row that differs from the header background is the frame top.
let probeX = x0 - 4
let bg = rgb(probeX, y0)
var frameTop = y1 + 1
for y in y0...y1 {
    let (r, g, b) = rgb(probeX, y)
    if abs(r - bg.0) + abs(g - bg.1) + abs(b - bg.2) > 12 { frameTop = y; break }
}

// Header rows are filled with the background just left of the box on the same
// row (outside the button's shadow), so the fill matches the screen exactly.
let sampleX = max(0, x0 - 8)

// 3. Fill.
for y in y0...y1 {
    for x in x0...x1 {
        let s = y < frameTop ? idx(sampleX, y) : idx(x, y1 + 2), d = idx(x, y)
        px[d] = px[s]; px[d + 1] = px[s + 1]; px[d + 2] = px[s + 2]; px[d + 3] = px[s + 3]
    }
}

// 4. Optionally drop the top `cropTop` rows (the iOS status bar), nothing else.
//    186 px = the 62 pt top safe area on a 3x iPhone screenshot.
let cropTop = args.count == 4 ? Int(args[3])! : 0
let full = ctx.makeImage()!
let out = full.cropping(to: CGRect(x: 0, y: cropTop, width: w, height: h - cropTop))!
let rep = NSBitmapImageRep(cgImage: out)
try! rep.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: args[2]))
print("\(args[1]): \(w)x\(h - cropTop) (cropped \(cropTop) px), button box x\(x0)-\(x1) y\(y0)-\(y1), frameTop \(frameTop == y1 + 1 ? "none" : String(frameTop))")
