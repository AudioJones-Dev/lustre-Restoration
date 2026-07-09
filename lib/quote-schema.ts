import { z } from "zod";
import {
  projectTypeOptions,
  propertyTypeOptions,
  timelineOptions,
} from "@/content/landing-page";

export const quoteSchema = z.object({
  full_name: z.string().trim().min(2, "Full name is required."),
  phone: z.string().trim().min(7, "Phone number is required."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .optional()
    .or(z.literal("")),
  zip_code: z
    .string()
    .trim()
    .regex(/^\d{5}$/, "Enter a 5-digit ZIP code."),
  project_type: z.enum(projectTypeOptions, {
    error: "Choose a project type.",
  }),
  property_type: z.enum(propertyTypeOptions, {
    error: "Choose a property type.",
  }),
  timeline: z.enum(timelineOptions, {
    error: "Choose a timeline.",
  }),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
  sms_consent: z.boolean().refine((value) => value, {
    message: "SMS consent is required for text follow-up.",
  }),
  photos: z.unknown().optional(),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;
