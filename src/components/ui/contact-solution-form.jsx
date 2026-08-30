"use client";

import { useForm, Controller } from "react-hook-form";
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
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const defaultProps = {
  badge: "Start a Project",

  headline: "Have an idea?",
  headlineAccent: "Let's build it.",

  subheadline:
    "Tell us what you're trying to build. We'll help you turn the idea into a fast, polished website that is ready to ship.",

  contactInfo: {
    email: "hello@dassdev.com",
    phone: "+91 98765 43210",
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

  budgetOptions: [
    {
      value: "under-25k",
      label: "Under ₹25,000",
    },
    {
      value: "25k-50k",
      label: "₹25,000 – ₹50,000",
    },
    {
      value: "50k-1l",
      label: "₹50,000 – ₹1,00,000",
    },
    {
      value: "1l-plus",
      label: "₹1,00,000+",
    },
    {
      value: "not-sure",
      label: "Not sure yet",
    },
  ],

  timelineOptions: [
    {
      value: "asap",
      label: "As soon as possible",
    },
    {
      value: "2-4-weeks",
      label: "2–4 weeks",
    },
    {
      value: "1-2-months",
      label: "1–2 months",
    },
    {
      value: "flexible",
      label: "I'm flexible",
    },
  ],

  ctaLabel: "Start the Conversation",

  onSubmit: (data) => {
    console.log("Project enquiry:", data);
  },
};

export default function ContactSolutionForm(props = {}) {
  const {
    badge,
    headline,
    headlineAccent,
    subheadline,
    contactInfo,
    serviceOptions,
    budgetOptions,
    timelineOptions,
    ctaLabel,
    onSubmit,
  } = {
    ...defaultProps,
    ...props,
  };

  const {
    register,
    control,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
    },
  });

  const onSubmitForm = (data) => {
    onSubmit?.(data);
  };

  return (
    <section
      id="contact"
      className="
        bg-background
        flex
        min-h-screen
        items-center
        justify-center
        px-4
        py-20
        sm:px-6
        lg:px-8
      "
    >
      <div
        className="
          grid
          w-full
          max-w-6xl
          grid-cols-1
          items-center
          gap-12
          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-20
        "
      >
        {/* ============================================================ */}
        {/* LEFT SIDE                                                     */}
        {/* ============================================================ */}

        <div className="flex flex-col gap-6">
          {badge && (
            <Badge className="w-fit rounded-full px-3 py-1.5">
              <FaRocket className="mr-1.5" />
              {badge}
            </Badge>
          )}

          <h1
            className="
              text-foreground
              text-4xl
              leading-[1.05]
              font-extrabold
              tracking-[-0.04em]
              sm:text-5xl
              lg:text-6xl
            "
          >
            {headline}

            <span className="text-primary block">{headlineAccent}</span>
          </h1>

          <p
            className="
              text-muted-foreground
              max-w-lg
              text-base
              leading-7
              sm:text-lg
            "
          >
            {subheadline}
          </p>

          <Separator className="border-primary/40 my-2 w-16" />

          {/* Contact information */}
          <div className="flex flex-col gap-3">
            {/* Email */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="
                bg-muted
                group
                flex
                items-center
                gap-3
                rounded-2xl
                p-1
                transition-transform
                duration-200
                hover:-translate-y-0.5
              "
            >
              <div
                className="
                  bg-card
                  flex
                  size-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                "
              >
                <FaEnvelope className="text-primary text-sm" />
              </div>

              <div>
                <p
                  className="
                    text-muted-foreground
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                  "
                >
                  Email
                </p>

                <p
                  className="
                    text-foreground
                    text-sm
                    font-semibold
                  "
                >
                  {contactInfo.email}
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${contactInfo.phone}`}
              className="
                bg-muted
                group
                flex
                items-center
                gap-3
                rounded-2xl
                p-1
                transition-transform
                duration-200
                hover:-translate-y-0.5
              "
            >
              <div
                className="
                  bg-card
                  flex
                  size-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                "
              >
                <FaPhoneAlt className="text-primary text-sm" />
              </div>

              <div>
                <p
                  className="
                    text-muted-foreground
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                  "
                >
                  Phone
                </p>

                <p
                  className="
                    text-foreground
                    text-sm
                    font-semibold
                  "
                >
                  {contactInfo.phone}
                </p>
              </div>
            </a>
          </div>

          <div
            className="
              mt-3
              flex
              items-center
              gap-2
              text-xs
              text-muted-foreground
            "
          >
            <span className="size-2 rounded-full bg-primary" />
            Usually respond within 24 hours.
          </div>
        </div>

        {/* ============================================================ */}
        {/* FORM                                                           */}
        {/* ============================================================ */}

        <Card
          className="
            bg-muted
            rounded-[2rem]
            shadow-sm
            ring-0
          "
        >
          <CardContent className="p-6 sm:p-8">
            <form
              onSubmit={handleFormSubmit(onSubmitForm)}
              className="flex flex-col gap-5"
            >
              {/* ------------------------------------------------------ */}
              {/* Name                                                     */}
              {/* ------------------------------------------------------ */}

              <Field>
                <FieldLabel htmlFor="fullName">Your Name</FieldLabel>

                <FieldContent>
                  <Input
                    id="fullName"
                    placeholder="Alex Rivera"
                    {...register("fullName", {
                      required: "Please enter your name.",
                    })}
                    className="
                      bg-input
                      focus-visible:ring-primary
                      rounded-xl
                      border-0
                      text-sm
                      shadow-[inset_0_1px_0_0_rgba(255,255,255,1)]
                      focus-visible:ring-1
                    "
                  />

                  {errors.fullName && (
                    <p className="text-destructive mt-1 text-xs">
                      {errors.fullName.message}
                    </p>
                  )}
                </FieldContent>
              </Field>

              {/* ------------------------------------------------------ */}
              {/* Email                                                    */}
              {/* ------------------------------------------------------ */}

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
                    className="
                      bg-input
                      focus-visible:ring-primary
                      rounded-xl
                      border-0
                      text-sm
                      shadow-[inset_0_1px_0_0_rgba(255,255,255,1)]
                      focus-visible:ring-1
                    "
                  />

                  {errors.email && (
                    <p className="text-destructive mt-1 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </FieldContent>
              </Field>

              {/* ------------------------------------------------------ */}
              {/* Company / Project                                       */}
              {/* ------------------------------------------------------ */}

              <Field>
                <FieldLabel htmlFor="company">
                  Company / Project Name
                </FieldLabel>

                <FieldContent>
                  <Input
                    id="company"
                    placeholder="Acme Technologies"
                    {...register("company")}
                    className="
                      bg-input
                      focus-visible:ring-primary
                      rounded-xl
                      border-0
                      text-sm
                      shadow-[inset_0_1px_0_0_rgba(255,255,255,1)]
                      focus-visible:ring-1
                    "
                  />
                </FieldContent>
              </Field>

              {/* ------------------------------------------------------ */}
              {/* Service                                                  */}
              {/* ------------------------------------------------------ */}

              <Field>
                <FieldLabel htmlFor="service">
                  What do you need built?
                </FieldLabel>

                <FieldContent className={"w-full"}>
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
                          className="
                            bg-input
                            focus:ring-primary
                            text-muted-foreground
                            rounded-xl
                            border-0
                            text-sm
                            shadow-[inset_0_1px_0_0_rgba(255,255,255,1)]
                            focus:ring-1
                          "
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
                    <p className="text-destructive mt-1 text-xs">
                      {errors.service.message}
                    </p>
                  )}
                </FieldContent>
              </Field>

              {/* ------------------------------------------------------ */}
              {/* Message                                                  */}
              {/* ------------------------------------------------------ */}

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
                    className="
                      bg-input
                      focus-visible:ring-primary
                      resize-none
                      rounded-xl
                      border-0
                      text-sm
                      shadow-[inset_0_1px_0_0_rgba(255,255,255,1)]
                      focus-visible:ring-1
                    "
                  />

                  {errors.message && (
                    <p className="text-destructive mt-1 text-xs">
                      {errors.message.message}
                    </p>
                  )}
                </FieldContent>
              </Field>

              {/* ------------------------------------------------------ */}
              {/* Submit                                                   */}
              {/* ------------------------------------------------------ */}

              <Button
                type="submit"
                className="
                  bg-primary
                  text-primary-foreground
                  hover:bg-primary/90
                  group
                  mt-1
                  w-full
                  rounded-xl
                  py-5
                  text-sm
                  font-semibold
                  shadow-[inset_0_2px_0_0_rgba(255,255,255,0.5),inset_0_-2px_0_0_rgba(0,0,0,0.2)]
                  transition-all
                "
              >
                {ctaLabel}

                <FaArrowRight
                  className="
                    ml-2
                    text-xs
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Button>

              <p
                className="
                  text-center
                  text-[11px]
                  leading-5
                  text-muted-foreground
                "
              >
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
