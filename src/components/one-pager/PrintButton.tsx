"use client";

import { buttonClasses } from "@/components/ui/Button";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={buttonClasses("primary", "px-5 py-2.5")}
    >
      Print / Save as PDF
    </button>
  );
}
