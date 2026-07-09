import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/quote-schema";

export async function POST(request: Request) {
  const formData = await request.formData();
  const photos = formData.getAll("photos").filter(Boolean);

  const payload = {
    full_name: formData.get("full_name"),
    phone: formData.get("phone"),
    email: formData.get("email") || undefined,
    zip_code: formData.get("zip_code"),
    project_type: formData.get("project_type"),
    property_type: formData.get("property_type"),
    timeline: formData.get("timeline"),
    notes: formData.get("notes") || undefined,
    sms_consent: formData.get("sms_consent") === "true",
    photos,
  };

  const parsed = quoteSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  // TODO: Wire GoHighLevel/Airtable/Google Sheets after validation sprint.
  return NextResponse.json({
    success: true,
    photosReceived: photos.length > 0,
  });
}
