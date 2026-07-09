import { Camera, Clock, FileCheck } from "lucide-react";

const items = [
  {
    icon: Camera,
    label: "Photo-first scope",
    copy: "Upload surface photos before the contact ask.",
  },
  {
    icon: Clock,
    label: "Fast review path",
    copy: "Preliminary ranges are based on photos, ZIP, and scope.",
  },
  {
    icon: FileCheck,
    label: "Clear expectations",
    copy: "Surface suitability and warranty boundaries are confirmed before work.",
  },
];

export function TrustStrip() {
  return (
    <div className="grid gap-3 border border-stone bg-white/70 p-4 shadow-sm md:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="flex gap-3">
          <item.icon aria-hidden className="mt-1 h-5 w-5 shrink-0 text-bronze" />
          <div>
            <p className="text-sm font-semibold text-ink">{item.label}</p>
            <p className="text-sm leading-6 text-muted-gray">{item.copy}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
