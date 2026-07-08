"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Upload } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  projectTypeOptions,
  propertyTypeOptions,
  timelineOptions,
} from "@/content/landing-page";
import { trackEvent } from "@/lib/analytics";
import { quoteSchema, type QuoteFormValues } from "@/lib/quote-schema";

type SubmissionState =
  | { status: "idle" }
  | { status: "success"; photosReceived: boolean }
  | { status: "error"; message: string };

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [submission, setSubmission] = useState<SubmissionState>({
    status: "idle",
  });
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    setValue,
    watch,
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      sms_consent: false,
    },
  });

  const selectedProject = watch("project_type");
  const photoList = watch("photos") as unknown[] | undefined;

  async function onSubmit(values: QuoteFormValues) {
    setSubmission({ status: "idle" });
    const data = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (key === "photos" || value === undefined) {
        return;
      }
      data.set(key, String(value));
    });

    const files = values.photos as FileList | undefined;
    if (files?.length) {
      Array.from(files).forEach((file) => data.append("photos", file));
    }

    const response = await fetch("/api/quote", {
      method: "POST",
      body: data,
    });
    const result = (await response.json()) as {
      success: boolean;
      photosReceived?: boolean;
    };

    if (!response.ok || !result.success) {
      setSubmission({
        status: "error",
        message: "Please check the highlighted fields and try again.",
      });
      return;
    }

    trackEvent("quote_form_submit", {
      photos_uploaded: Boolean(files?.length),
      project_type: values.project_type,
      zip_code: values.zip_code,
    });
    setSubmission({
      status: "success",
      photosReceived: Boolean(result.photosReceived),
    });
  }

  if (submission.status === "success") {
    return (
      <div className="bg-ivory p-8 text-ink shadow-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bronze">
          Request received
        </p>
        <h3 className="mt-4 font-display text-4xl leading-tight">
          Thanks. Lustre will review your request next.
        </h3>
        <p className="mt-5 text-base leading-7 text-muted-gray">
          {submission.photosReceived
            ? "Your photos were received. Lustre will review the surface, scope, and location, then follow up with a preliminary quote range or next question."
            : "Your request was received. For the fastest estimate, please reply with 3 photos: a wide shot, a close-up, and a photo of any edges, seams, or damage."}
        </p>
        <a
          className="mt-8 inline-flex bg-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-ivory"
          href="#top"
        >
          Back to top
        </a>
      </div>
    );
  }

  return (
    <form
      className="bg-ivory p-5 text-ink shadow-2xl md:p-8"
      onFocus={() => trackEvent("quote_form_start")}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6 flex items-center justify-between gap-4 border-b border-stone pb-5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-bronze">
            Step {step} of 3
          </p>
          <h3 className="mt-2 font-display text-3xl">Request a photo quote</h3>
        </div>
        <p className="max-w-40 text-right text-xs leading-5 text-muted-gray">
          Photos are optional, but strongly encouraged.
        </p>
      </div>

      {step === 1 ? (
        <div className="space-y-6">
          <FieldError message={errors.project_type?.message} />
          <RadioGrid
            label="What surface needs attention?"
            name="project_type"
            options={projectTypeOptions}
            selected={selectedProject}
            setValue={(value) =>
              setValue("project_type", value, { shouldValidate: true })
            }
          />
          <RadioGrid
            label="What type of property is it?"
            name="property_type"
            options={propertyTypeOptions}
            selected={watch("property_type")}
            setValue={(value) =>
              setValue("property_type", value, { shouldValidate: true })
            }
          />
          <button
            className="focus-ring w-full bg-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-ivory"
            onClick={() => setStep(2)}
            type="button"
          >
            Continue to ZIP and photos
          </button>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="space-y-5">
          <label className="block">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-bronze">
              ZIP code
            </span>
            <input
              className="focus-ring mt-2 w-full border border-stone bg-white px-4 py-4 text-base"
              inputMode="numeric"
              placeholder="33139"
              {...register("zip_code")}
            />
            <FieldError message={errors.zip_code?.message} />
          </label>
          <label className="block border border-dashed border-bronze bg-white p-5">
            <span className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-bronze">
              <Upload aria-hidden className="h-5 w-5" />
              Upload photos
            </span>
            <span className="mt-3 block text-sm leading-6 text-muted-gray">
              Add up to 8 images: wide room view, close-up, edges or seams, and
              any inspiration finish.
            </span>
            <input
              accept=".jpg,.jpeg,.png,.heic,.webp,image/jpeg,image/png,image/webp"
              className="mt-4 w-full text-sm"
              multiple
              type="file"
              {...register("photos", {
                onChange: () => trackEvent("photo_upload"),
              })}
            />
            {photoList?.length ? (
              <span className="mt-2 block text-sm text-success">
                {photoList.length} file(s) selected.
              </span>
            ) : null}
          </label>
          <div className="grid gap-3 sm:grid-cols-2">
            <button
              className="focus-ring border border-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em]"
              onClick={() => setStep(1)}
              type="button"
            >
              Back
            </button>
            <button
              className="focus-ring bg-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-ivory"
              onClick={() => setStep(3)}
              type="button"
            >
              Continue to contact
            </button>
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="space-y-5">
          <label className="block">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-bronze">
              Timeline
            </span>
            <select
              className="focus-ring mt-2 w-full border border-stone bg-white px-4 py-4"
              {...register("timeline")}
            >
              <option value="">Choose timeline</option>
              {timelineOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <FieldError message={errors.timeline?.message} />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField
              error={errors.full_name?.message}
              label="Full name"
              registration={register("full_name")}
            />
            <TextField
              error={errors.phone?.message}
              label="Phone"
              registration={register("phone")}
              type="tel"
            />
          </div>
          <TextField
            error={errors.email?.message}
            label="Email"
            registration={register("email")}
            type="email"
          />
          <label className="block">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-bronze">
              Notes
            </span>
            <textarea
              className="focus-ring mt-2 min-h-28 w-full border border-stone bg-white px-4 py-4"
              placeholder="Surface condition, measurements, inspiration finish, access notes..."
              {...register("notes")}
            />
          </label>
          <label className="flex gap-3 text-sm leading-6 text-muted-gray">
            <input
              className="mt-1 h-5 w-5 accent-bronze"
              type="checkbox"
              {...register("sms_consent")}
            />
            <span>
              I agree to receive text messages from Lustre Surface Restoration
              about my quote request. Message and data rates may apply. I can
              opt out at any time.
            </span>
          </label>
          <FieldError message={errors.sms_consent?.message} />
          {submission.status === "error" ? (
            <p className="text-sm font-semibold text-error">
              {submission.message}
            </p>
          ) : null}
          <div className="grid gap-3 sm:grid-cols-2">
            <button
              className="focus-ring border border-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em]"
              onClick={() => setStep(2)}
              type="button"
            >
              Back
            </button>
            <button
              className="focus-ring bg-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-ivory disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Submitting..." : "Submit quote request"}
            </button>
          </div>
        </div>
      ) : null}
    </form>
  );
}

function RadioGrid<T extends string>({
  label,
  options,
  selected,
  setValue,
}: {
  label: string;
  name: string;
  options: readonly T[];
  selected?: T;
  setValue: (value: T) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-bronze">
        {label}
      </legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <button
            className={`focus-ring border px-4 py-3 text-left text-sm leading-5 transition ${
              selected === option
                ? "border-ink bg-ink text-ivory"
                : "border-stone bg-white text-ink hover:border-bronze"
            }`}
            key={option}
            onClick={() => setValue(option)}
            type="button"
          >
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function TextField({
  error,
  label,
  registration,
  type = "text",
}: {
  error?: string;
  label: string;
  registration: ReturnType<typeof useForm<QuoteFormValues>>["register"] extends (
    name: infer _Name,
  ) => infer Return
    ? Return
    : never;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold uppercase tracking-[0.14em] text-bronze">
        {label}
      </span>
      <input
        className="focus-ring mt-2 w-full border border-stone bg-white px-4 py-4"
        type={type}
        {...registration}
      />
      <FieldError message={error} />
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="mt-2 text-sm font-semibold text-error">{message}</p>;
}
