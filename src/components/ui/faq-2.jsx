"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const defaultCategories = [
  {
    id: "getting-started",
    label: "Getting Started",
    icon: "✦",
    items: [
      {
        question: "What does DASS DEV actually build?",
        answer:
          "We build modern websites and lightweight web applications for businesses, startups, founders, and teams. That includes business websites, landing pages, portfolio sites, e-commerce experiences, redesigns, and custom web solutions.",
      },
      {
        question: "I only have an idea. Can you help with that?",
        answer:
          "Yes. You don't need to have everything figured out before contacting us. Tell us what you're trying to achieve, and we'll help turn the idea into a clear website scope, structure, and implementation plan.",
      },
      {
        question: "Do I need to provide the design?",
        answer:
          "No. We can work from an existing design, rough idea, reference websites, or a simple description of what you want. We can handle the UI direction and development when needed.",
      },
      {
        question: "How do I start a project?",
        answer:
          "Start by filling out the project form. Tell us what you're building, your requirements, approximate budget, and timeline. We'll review it and get back to you with the next steps.",
      },
    ],
  },

  {
    id: "services",
    label: "Services",
    icon: "◈",
    items: [
      {
        question: "What types of websites do you build?",
        answer:
          "We build business websites, startup websites, landing pages, portfolio websites, product websites, e-commerce websites, and custom web experiences.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Yes. We can redesign an existing website's UI, improve its responsiveness and performance, restructure the user experience, and rebuild it using a modern technology stack.",
      },
      {
        question: "Can you build both the frontend and backend?",
        answer:
          "Yes. Depending on the project, we can handle the complete stack including frontend development, APIs, authentication, databases, integrations, and deployment.",
      },
      {
        question: "Can you integrate APIs and third-party services?",
        answer:
          "Yes. We can integrate services such as payment gateways, email platforms, analytics, forms, authentication providers, CMS platforms, and other APIs required by your project.",
      },
    ],
  },

  {
    id: "process",
    label: "Process",
    icon: "→",
    items: [
      {
        question: "How does a typical project work?",
        answer:
          "Our workflow is simple: understand the requirement, define the scope, design the experience, build the product, test it, deploy it, and then maintain it when required.",
      },
      {
        question: "How long does a website usually take?",
        answer:
          "It depends on the scope. A focused landing page may take a few days, while a complete business website or custom web application can take several weeks. We provide a realistic timeline after understanding the requirements.",
      },
      {
        question: "Will I be able to see the progress?",
        answer:
          "Yes. We keep the development process transparent and share progress throughout the project so you can review important decisions before the final launch.",
      },
      {
        question: "Can I request changes during development?",
        answer:
          "Yes. Changes are expected during a project, but they are handled within the agreed project scope. Larger changes that affect the original requirements may require a revised timeline or estimate.",
      },
    ],
  },

  {
    id: "pricing",
    label: "Pricing",
    icon: "₹",
    items: [
      {
        question: "How much does a website cost?",
        answer:
          "There isn't one fixed price because every project has different requirements. Pricing depends on the number of pages, design complexity, functionality, integrations, and development effort.",
      },
      {
        question: "Do you offer fixed project pricing?",
        answer:
          "Yes. Once we understand the scope, we can provide a clear project estimate so you know what you're paying for before development begins.",
      },
      {
        question: "Do you require an upfront payment?",
        answer:
          "Project payment terms are agreed before development begins. For larger projects, payments can be structured around project milestones.",
      },
      {
        question: "What is included in the project price?",
        answer:
          "The exact scope is defined before development. Depending on the project, this can include UI implementation, responsive development, integrations, testing, deployment, and the agreed post-launch support.",
      },
    ],
  },

  {
    id: "after-launch",
    label: "After Launch",
    icon: "↗",
    items: [
      {
        question: "Do you maintain websites after launch?",
        answer:
          "Yes. DASS DEV can continue maintaining your website after launch, including bug fixes, content-related updates, technical improvements, dependency updates, and ongoing development.",
      },
      {
        question: "Can you host and deploy the website?",
        answer:
          "Yes. We can handle the deployment process and help configure the production environment, domain, hosting, SSL, and other required infrastructure.",
      },
      {
        question: "What happens if something breaks after launch?",
        answer:
          "If the issue is covered by the agreed support period, we'll fix it as part of the project. For ongoing support, we can provide a maintenance arrangement for continued technical assistance.",
      },
      {
        question: "Can I update the website myself?",
        answer:
          "That depends on the project. If your website requires frequent content changes, we can integrate a CMS or build an appropriate content management workflow so your team can manage content without touching the code.",
      },
    ],
  },
];

function CategoryTab({ category, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
        isActive
          ? "bg-primary text-primary-foreground shadow-sm"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      }`}
    >
      <span
        className={`text-xs ${
          isActive ? "text-primary-foreground" : "text-muted-foreground"
        }`}
      >
        {category.icon}
      </span>

      {category.label}
    </button>
  );
}

export default function FAQ2({
  badge = "Got questions?",
  title = "Everything you need to know.",
  subtitle = "A few answers about working with DASS DEV, from the first conversation to launch and beyond.",
  categories = defaultCategories,
}) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? "");

  const currentItems =
    categories.find((category) => category.id === activeCategory)?.items ?? [];

  const handleCategoryChange = (id) => {
    setActiveCategory(id);
  };

  return (
    <section
      id="faq"
      className="
        bg-background
        flex
        w-full
        flex-col
        items-center
        px-4
        py-20
        sm:py-24
      "
    >
      {/* Header */}
      <div className="mx-auto mb-10 max-w-xl text-center md:mb-12">
        <p
          className="
            text-muted-foreground
            mb-4
            inline-flex
            items-center
            gap-1.5
            text-xs
            font-medium
            tracking-widest
            uppercase
          "
        >
          <span className="bg-muted-foreground inline-block h-1 w-1 rounded-full" />

          {badge}
        </p>

        <h2
          className="
            text-foreground
            mb-4
            text-3xl
            leading-tight
            font-bold
            tracking-tight
            sm:text-4xl
            md:text-5xl
          "
        >
          {title}
        </h2>

        <p
          className="
            text-muted-foreground
            mx-auto
            max-w-md
            text-sm
            leading-relaxed
            md:text-base
          "
        >
          {subtitle}
        </p>
      </div>

      {/* Categories */}
      <div className="mx-auto mb-8 w-full max-w-3xl">
        <div
          className="
            scrollbar-hide
            bg-muted
            mx-auto
            flex
            w-fit
            max-w-full
            items-center
            gap-1.5
            overflow-x-auto
            rounded-full
            px-1
            py-1.5
          "
        >
          {categories.map((category) => (
            <CategoryTab
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onClick={() => handleCategoryChange(category.id)}
            />
          ))}
        </div>
      </div>

      {/* Questions */}
      <div className="mx-auto w-full max-w-3xl">
        {currentItems.length > 0 ? (
          <Accordion
            type="single"
            collapsible="true"
            className="flex w-full flex-col gap-2.5"
          >
            {currentItems.map((item, index) => (
              <AccordionItem
                key={`${activeCategory}-${index}`}
                value={`${activeCategory}-${index}`}
                className="
                  border-border
                  hover:bg-accent
                  hover:border-border/80
                  data-[state=open]:bg-background
                  overflow-hidden
                  rounded-xl
                  border
                  transition-all
                  duration-300
                  ease-in-out
                  data-[state=open]:shadow-sm
                "
              >
                <AccordionTrigger
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    px-5
                    py-4
                    text-left
                    hover:no-underline
                    data-[state=open]:bg-black
                  "
                >
                  <span
                    className="
                      text-muted-foreground
                      group-hover:text-foreground
                      text-sm
                      leading-snug
                      font-medium
                      transition-colors
                      duration-200
                      md:text-base
                    "
                  >
                    {item.question}
                  </span>
                </AccordionTrigger>

                <AccordionContent className="bg-muted rounded-xl p-5 pt-1">
                  <p
                    className="
                      text-muted-foreground
                      text-sm
                      leading-relaxed
                    "
                  >
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <p
            className="
              text-muted-foreground
              py-10
              text-center
              text-sm
            "
          >
            No questions in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
