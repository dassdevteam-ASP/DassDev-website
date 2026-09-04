"use client";

import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Card, CardContent } from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

import { Field, FieldLabel, FieldContent } from "@/components/ui/field";

import {
  FaArrowRight,
  FaEnvelope,
  FaRocket,
  FaWhatsapp,
} from "react-icons/fa6";

import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const LEAD_FORM_URL = process.env.NEXT_PUBLIC_LEAD_FORM_URL;

const defaultProps = {
  badge: "Start a Project",

  headline: "Have an idea?",
  headlineAccent: "Let's build it.",

  subheadline:
    "Tell us what you're trying to build. We'll help you turn the idea into a fast, polished website that is ready to ship.",

  contactInfo: {
    email: "dassdev.team@gmail.com",
    phone: "+91 99669 83223",
    whatsapp: "+91 99669 83223",
  },

  serviceOptions: [
    {
      value: "business-website",
      label: "Business Website",
    },
    {
      value: "landing-page",
      label: "Landing Page",
    },
    {
      value: "website-redesign",
      label: "Website Redesign",
    },
    {
      value: "ecommerce",
      label: "E-commerce Website",
    },
    {
      value: "web-application",
      label: "Web Application",
    },
    {
      value: "maintenance",
      label: "Maintenance & Support",
    },
    {
      value: "not-sure",
      label: "Not sure yet",
    },
  ],

  ctaLabel: "Start the Conversation",
};

export default function ContactSolutionForm(props = {}) {
  const {
    badge,
    headline,
    headlineAccent,
    subheadline,
    contactInfo,
    serviceOptions,
    ctaLabel,
    onSubmit,
  } = {
    ...defaultProps,
    ...props,
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    control,
    handleSubmit: handleFormSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      company: "",
      service: "",
      message: "",
      website: "",
    },
  });

  const onSubmitForm = async (data) => {
    if (isSubmitting) {
      return;
    }
    if (data.website) {
      console.warn("Honeypot triggered.");

      toast.error("Unable to submit the enquiry.");

      return;
    }

    if (!LEAD_FORM_URL) {
      toast.error("Contact form is not configured.");

      console.error("NEXT_PUBLIC_LEAD_FORM_URL is missing.");

      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: data.fullName.trim(),
      phoneNumber: data.phoneNumber.trim(),
      email: data.email.trim(),
      company: data.company.trim(),
      service: data.service,
      projectDetails: data.message.trim(),
      website: data.website.trim(),
    };

    try {
      const response = await fetch(LEAD_FORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();

      console.log("Google Apps Script response:", responseText);

      let result;

      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        console.error(
          "Invalid response from Google Apps Script:",
          responseText,
        );

        throw new Error("Invalid response received from the server.");
      }

      if (!response.ok || result.success === false) {
        throw new Error(
          result.message || `Request failed with status ${response.status}`,
        );
      }
      toast.success("Project enquiry sent successfully.", {
        description: "We'll review your project and get back to you soon.",
        position: "top-right",
      });

      reset();

      onSubmit?.(data);
    } catch (error) {
      console.error("Project enquiry submission failed:", error);

      toast.error("We couldn't send your enquiry.", {
        description: error.message || "Please try again in a moment.",
        position: "top-right",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center bg-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="flex flex-col gap-6">
          {badge && (
            <Badge className="w-fit rounded-full px-3 py-1.5">
              <FaRocket className="mr-1.5" />
              {badge}
            </Badge>
          )}

          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
            {headline}

            <span className="block text-primary">{headlineAccent}</span>
          </h1>

          <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
            {subheadline}
          </p>

          <Separator className="my-2 w-16 border-primary/40" />

          <div className="flex flex-col gap-3">
            <Link
              href={`mailto:${contactInfo.email}`}
              className="group flex items-center gap-3 rounded-2xl bg-muted p-1 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-card">
                <FaEnvelope className="text-sm text-primary" />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Email
                </p>

                <p className="text-sm font-semibold text-foreground">
                  {contactInfo.email}
                </p>
              </div>
            </Link>

            <Link
              href={`tel:${contactInfo.phone}`}
              className="group flex items-center gap-3 rounded-2xl bg-muted p-1 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-card">
                <FaPhoneAlt className="text-sm text-primary" />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Phone
                </p>

                <p className="text-sm font-semibold text-foreground">
                  {contactInfo.phone}
                </p>
              </div>
            </Link>
            <Link
              href={`https://wa.me/${contactInfo.whatsapp}`}
              className="group flex items-center gap-3 rounded-2xl bg-muted p-1 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-card">
                <FaWhatsapp className="text-sm text-primary" />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  WhatsApp
                </p>

                <p className="text-sm font-semibold text-foreground">
                  {contactInfo.whatsapp}
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-primary" />
            Usually respond within 24 hours.
          </div>
        </div>

        <Card className="rounded-[2rem] bg-muted shadow-sm ring-0">
          <CardContent className="p-6 sm:p-8">
            <form
              onSubmit={handleFormSubmit(onSubmitForm)}
              className="flex flex-col gap-5"
            >
              <div
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
              >
                <label htmlFor="website">Website</label>

                <input
                  id="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("website")}
                />
              </div>
              <Field>
                <FieldLabel htmlFor="fullName">Your Name</FieldLabel>

                <FieldContent>
                  <Input
                    id="fullName"
                    placeholder="Alex Rivera"
                    {...register("fullName", {
                      required: "Please enter your name.",
                    })}
                    className="rounded-xl border-0 bg-input text-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,1)] focus-visible:ring-1 focus-visible:ring-primary"
                  />

                  {errors.fullName && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.fullName.message}
                    </p>
                  )}
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel htmlFor="phoneNumber">Phone Number</FieldLabel>

                <FieldContent>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    {...register("phoneNumber", {
                      required: "Please enter your phone number.",
                      pattern: {
                        value: /^\+?[1-9]\d{1,14}$/,
                        message: "Please enter a valid phone number.",
                      },
                    })}
                    className="rounded-xl border-0 bg-input text-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,1)] focus-visible:ring-1 focus-visible:ring-primary"
                  />

                  {errors.phoneNumber && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Work Email</FieldLabel>

                <FieldContent>
                  <Input
                    id="email"
                    type="email"
                    placeholder="alex@company.com"
                    {...register("email", {
                      required: "Please enter your email.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email.",
                      },
                    })}
                    className="rounded-xl border-0 bg-input text-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,1)] focus-visible:ring-1 focus-visible:ring-primary"
                  />

                  {errors.email && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel htmlFor="company">
                  Company / Project Name
                </FieldLabel>

                <FieldContent>
                  <Input
                    id="company"
                    placeholder="Acme Technologies"
                    {...register("company")}
                    className="rounded-xl border-0 bg-input text-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,1)] focus-visible:ring-1 focus-visible:ring-primary"
                  />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel htmlFor="service">
                  What do you need built?
                </FieldLabel>

                <FieldContent className="w-full">
                  <Controller
                    name="service"
                    control={control}
                    rules={{
                      required: "Please select what you need.",
                    }}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger
                          id="service"
                          className="rounded-xl border-0 bg-input text-sm text-muted-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,1)] focus:ring-1 focus:ring-primary"
                        >
                          <SelectValue placeholder="Choose what you need..." />
                        </SelectTrigger>

                        <SelectContent className="rounded-xl">
                          {serviceOptions.map((option) => (
                            <SelectItem
                              key={option.value}
                              value={option.value}
                              className="text-sm"
                            >
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />

                  {errors.service && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.service.message}
                    </p>
                  )}
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel htmlFor="message">
                  Tell us about your project
                </FieldLabel>

                <FieldContent>
                  <Textarea
                    id="message"
                    placeholder="What are you building? What should the website do? Share anything that will help us understand the project..."
                    rows={5}
                    {...register("message", {
                      required: "Tell us a little about your project.",
                    })}
                    className="resize-none rounded-xl border-0 bg-input text-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,1)] focus-visible:ring-1 focus-visible:ring-primary"
                  />

                  {errors.message && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </FieldContent>
              </Field>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="group mt-1 w-full rounded-xl bg-primary py-5 text-sm font-semibold text-primary-foreground shadow-[inset_0_2px_0_0_rgba(255,255,255,0.5),inset_0_-2px_0_0_rgba(0,0,0,0.2)] transition-all hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : ctaLabel}

                {!isSubmitting && (
                  <FaArrowRight className="ml-2 text-xs transition-transform group-hover:translate-x-1" />
                )}
              </Button>

              <p className="text-center text-[11px] leading-5 text-muted-foreground">
                No commitment required. We'll review your project and get back
                to you with the next steps.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
