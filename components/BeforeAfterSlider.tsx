"use client";

import { useState } from "react";

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(54);

  return (
    <div className="overflow-hidden border border-stone bg-ivory shadow-2xl shadow-ink/20">
      <div className="relative aspect-[1.12] min-h-[320px] md:aspect-[1.45]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#6c6254,#2f2a24)]">
          <SurfaceScene state="before" />
        </div>
        <div
          className="absolute inset-y-0 left-0 overflow-hidden bg-[linear-gradient(135deg,#f2eadc,#b89554)]"
          style={{ width: `${position}%` }}
        >
          <div className="h-full w-[min(100vw,720px)]">
            <SurfaceScene state="after" />
          </div>
        </div>
        <div
          className="absolute inset-y-0 w-px bg-white shadow-[0_0_0_1px_rgba(21,18,13,0.4)]"
          style={{ left: `${position}%` }}
        >
          <div className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white bg-ink text-xs font-bold text-ivory shadow-xl">
            DRAG
          </div>
        </div>
        <input
          aria-label="Compare before and after surface"
          className="absolute inset-x-0 bottom-6 z-10 mx-auto h-10 w-[80%] cursor-ew-resize opacity-0"
          max="82"
          min="18"
          onChange={(event) => setPosition(Number(event.target.value))}
          type="range"
          value={position}
        />
        <div className="absolute left-5 top-5 bg-ink px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ivory">
          After
        </div>
        <div className="absolute right-5 top-5 bg-ivory px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink">
          Before
        </div>
      </div>
      <div className="grid gap-3 border-t border-stone bg-ink p-5 text-sm text-ivory md:grid-cols-4">
        {["Counter surface", "Carrara finish", "South Florida", "Days, not weeks"].map(
          (item) => (
            <div key={item} className="border-l border-champagne pl-3">
              {item}
            </div>
          ),
        )}
      </div>
    </div>
  );
}

function SurfaceScene({ state }: { state: "before" | "after" }) {
  const isAfter = state === "after";

  return (
    <div className="relative h-full w-full overflow-hidden p-6">
      <div
        className={`absolute inset-x-0 bottom-0 h-[42%] ${
          isAfter ? "bg-[#efe4d1]" : "bg-[#4a4037]"
        }`}
      />
      <div
        className={`absolute left-[8%] top-[20%] h-[48%] w-[68%] skew-x-[-7deg] border ${
          isAfter
            ? "border-[#d8cbb8] bg-[#f8f4ea]"
            : "border-[#3b342e] bg-[#6f6256]"
        } shadow-2xl`}
      >
        <div
          className={`absolute inset-x-0 top-[36%] h-[18%] ${
            isAfter ? "bg-[#d9c9ad]" : "bg-[#5a5048]"
          }`}
        />
        <div
          className={`absolute bottom-4 left-7 right-7 h-4 ${
            isAfter ? "bg-[#b89554]" : "bg-[#332d28]"
          }`}
        />
      </div>
      <div
        className={`absolute right-[11%] top-[15%] h-[62%] w-[12%] ${
          isAfter ? "bg-[#d8cbb8]" : "bg-[#51483f]"
        }`}
      />
      {isAfter ? (
        <div className="absolute left-[14%] top-[26%] h-px w-[46%] rotate-[-8deg] bg-champagne/70" />
      ) : (
        <div className="absolute left-[18%] top-[33%] h-1 w-[35%] rotate-[-8deg] bg-[#2f2924]" />
      )}
    </div>
  );
}
