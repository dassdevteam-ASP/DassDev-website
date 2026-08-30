"use client";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useSwipeTheme } from "@/components/ui/SwipeThemeProvider";

import {
  ArrowUpRight,
  Menu,
  Moon,
  Sun,
  Code2,
  Palette,
  LayoutDashboard,
  Rocket,
  ShoppingBag,
  Search,
  Sparkles,
  Layers3,
} from "lucide-react";
import Link from "next/link";

export default function Navigation2() {
  const { theme, triggerSwipe, isAnimating } = useSwipeTheme();

  const isLight = theme === "light";

  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-neutral-200/70
        bg-white/80
        backdrop-blur-xl
        dark:border-neutral-800/70
        dark:bg-neutral-950/80
      "
    >
      <div
        className="
          mx-auto
          flex
          h-[72px]
          max-w-7xl
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ====================================================== */}
        {/* LOGO */}
        {/* ====================================================== */}

        <Link
          href="/"
          className="
            group
            flex
            items-center
            gap-2.5
            outline-none
          "
          aria-label="DASS DEV home"
        >
          <div
            className="
              flex
              size-9
              items-center
              justify-center
              rounded-xl
              border
              border-neutral-200
              bg-neutral-100
              text-primary
              shadow-[inset_2px_2px_5px_rgba(0,0,0,0.06),inset_-2px_-2px_5px_rgba(255,255,255,0.8)]
              transition-all
              duration-300
              group-hover:scale-105
              dark:border-neutral-800
              dark:bg-neutral-900
              dark:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.35),inset_-2px_-2px_5px_rgba(255,255,255,0.03)]
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>

          <div className="flex items-center">
            <span
              className="
                text-lg
                font-bold
                tracking-[-0.04em]
                text-neutral-900
                dark:text-white
              "
            >
              DASS DEV
            </span>

            <span className="ml-0.5 text-lg font-bold text-primary">.</span>
          </div>
        </Link>

        {/* ====================================================== */}
        {/* DESKTOP NAVIGATION */}
        {/* ====================================================== */}

        <div className="hidden lg:block">
          <NavigationMenu
            className={cn(
              "static",

              "[&>.absolute]:inset-x-0",
              "[&>.absolute]:top-full",
              "[&>.absolute]:w-full",

              "**:data-[slot=navigation-menu-viewport]:mt-1",
              "**:data-[slot=navigation-menu-viewport]:w-full!",
              "**:data-[slot=navigation-menu-viewport]:rounded-none",
              "**:data-[slot=navigation-menu-viewport]:shadow-none",
              "**:data-[slot=navigation-menu-viewport]:ring-0",

              "**:data-[slot=navigation-menu-viewport]:border-0",
              "**:data-[slot=navigation-menu-viewport]:border-b",
              "**:data-[slot=navigation-menu-viewport]:border-neutral-200",
              "dark:**:data-[slot=navigation-menu-viewport]:border-neutral-800",

              "**:data-[slot=navigation-menu-viewport]:bg-white",
              "dark:**:data-[slot=navigation-menu-viewport]:bg-neutral-950",

              "**:data-[slot=navigation-menu-viewport]:transition-all",
              "**:data-[slot=navigation-menu-viewport]:duration-300",
              "**:data-[slot=navigation-menu-viewport]:ease-in-out",

              "**:data-[slot=navigation-menu-viewport]:data-open:fade-in-0",
              "**:data-[slot=navigation-menu-viewport]:data-closed:fade-out-0",

              "**:data-[slot=navigation-menu-viewport]:data-open:zoom-in-100",
              "**:data-[slot=navigation-menu-viewport]:data-closed:zoom-out-100",
            )}
          >
            <NavigationMenuList className="gap-1">
              {/* ================================================= */}
              {/* SERVICES */}
              {/* ================================================= */}

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="
                    h-auto
                    rounded-xl
                    bg-transparent
                    px-3
                    py-2
                    text-sm
                    font-medium
                    text-neutral-700
                    transition-all
                    hover:bg-neutral-100
                    hover:text-neutral-950
                    focus:bg-neutral-100
                    focus:text-neutral-950
                    data-[state=open]:bg-neutral-100
                    dark:text-neutral-300
                    dark:hover:bg-neutral-800/60
                    dark:hover:text-white
                    dark:focus:bg-neutral-800/60
                    dark:focus:text-white
                    dark:data-[state=open]:bg-neutral-800/60
                  "
                >
                  Services
                </NavigationMenuTrigger>

                <NavigationMenuContent className="!w-full">
                  <div
                    className="
                      mx-auto
                      grid
                      max-w-6xl
                      grid-cols-4
                      gap-0
                      divide-x
                      divide-neutral-200
                      px-6
                      py-8
                      dark:divide-neutral-800
                    "
                  >
                    {/* WEB DEVELOPMENT */}

                    <div className="flex flex-col px-6 first:pl-0">
                      <div
                        className="
                          mb-4
                          flex
                          size-11
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-neutral-200
                          bg-neutral-100
                          shadow-inner
                          dark:border-neutral-800
                          dark:bg-neutral-900
                        "
                      >
                        <Code2 className="size-5 text-primary" />
                      </div>

                      <h4 className="mb-1 text-sm font-semibold text-neutral-900 dark:text-white">
                        Web Development
                      </h4>

                      <p className="mb-4 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                        Fast, scalable and conversion-focused websites built
                        around your business.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="rounded-full">
                          React
                        </Badge>

                        <Badge variant="outline" className="rounded-full">
                          Next.js
                        </Badge>

                        <Badge variant="outline" className="rounded-full">
                          Node.js
                        </Badge>
                      </div>
                    </div>

                    {/* DESIGN */}

                    <div className="flex flex-col gap-3 px-6">
                      <h4 className="mb-2 text-xs uppercase tracking-wider text-neutral-400">
                        Design
                      </h4>

                      <Link
                        href="/services#web-design"
                        className="
                          group
                          flex
                          items-center
                          gap-2
                          text-sm
                          font-medium
                          text-neutral-600
                          transition-colors
                          hover:text-primary
                          dark:text-neutral-400
                        "
                      >
                        <Palette className="size-4" />
                        UI / UX Design
                      </Link>

                      <Link
                        href="/services#branding"
                        className="
                          group
                          flex
                          items-center
                          gap-2
                          text-sm
                          font-medium
                          text-neutral-600
                          transition-colors
                          hover:text-primary
                          dark:text-neutral-400
                        "
                      >
                        <Sparkles className="size-4" />
                        Brand Experience
                      </Link>

                      <Link
                        href="/services#redesign"
                        className="
                          group
                          flex
                          items-center
                          gap-2
                          text-sm
                          font-medium
                          text-neutral-600
                          transition-colors
                          hover:text-primary
                          dark:text-neutral-400
                        "
                      >
                        <Layers3 className="size-4" />
                        Website Redesign
                      </Link>
                    </div>

                    {/* SOLUTIONS */}

                    <div className="flex flex-col gap-3 px-6">
                      <h4 className="mb-2 text-xs uppercase tracking-wider text-neutral-400">
                        Solutions
                      </h4>

                      <Link
                        href="/services#landing-pages"
                        className="
                          text-sm
                          font-medium
                          text-neutral-600
                          transition-colors
                          hover:text-primary
                          dark:text-neutral-400
                        "
                      >
                        Landing Pages
                      </Link>

                      <Link
                        href="/services#ecommerce"
                        className="
                          flex
                          items-center
                          gap-2
                          text-sm
                          font-medium
                          text-neutral-600
                          transition-colors
                          hover:text-primary
                          dark:text-neutral-400
                        "
                      >
                        <ShoppingBag className="size-4" />
                        E-commerce
                      </Link>

                      <Link
                        href="/services#applications"
                        className="
                          flex
                          items-center
                          gap-2
                          text-sm
                          font-medium
                          text-neutral-600
                          transition-colors
                          hover:text-primary
                          dark:text-neutral-400
                        "
                      >
                        <LayoutDashboard className="size-4" />
                        Web Applications
                      </Link>

                      <Link
                        href="/services#seo"
                        className="
                          flex
                          items-center
                          gap-2
                          text-sm
                          font-medium
                          text-neutral-600
                          transition-colors
                          hover:text-primary
                          dark:text-neutral-400
                        "
                      >
                        <Search className="size-4" />
                        SEO & Performance
                      </Link>
                    </div>

                    {/* FEATURED CTA */}

                    <div className="px-6 pr-0">
                      <h4 className="mb-4 text-xs uppercase tracking-wider text-neutral-400">
                        Start something
                      </h4>

                      <Link
                        href="/contact"
                        className="
                          group
                          relative
                          flex
                          min-h-[190px]
                          flex-col
                          justify-between
                          overflow-hidden
                          rounded-2xl
                          border
                          border-primary/30
                          bg-neutral-100
                          p-6
                          shadow-[inset_2px_2px_8px_rgba(0,0,0,0.05),inset_-2px_-2px_8px_rgba(255,255,255,0.8)]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-primary/60
                          hover:shadow-lg
                          dark:bg-neutral-900
                          dark:shadow-[inset_2px_2px_8px_rgba(0,0,0,0.3)]
                        "
                      >
                        <div
                          className="
                            absolute
                            -right-12
                            -top-12
                            size-32
                            rounded-full
                            bg-primary/10
                            blur-2xl
                          "
                        />

                        <div className="relative">
                          <Badge
                            variant="outline"
                            className="
                              mb-4
                              border-primary/40
                              bg-white/60
                              text-primary
                              dark:bg-neutral-950/60
                            "
                          >
                            Let's build
                          </Badge>

                          <h4 className="text-base font-semibold text-neutral-900 dark:text-white">
                            Have an idea?
                          </h4>

                          <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                            Tell us what you're building and we'll figure out
                            the best way forward.
                          </p>
                        </div>

                        <div className="relative flex items-center text-sm font-semibold text-primary">
                          Start a project
                          <ArrowUpRight
                            className="
                              ml-1
                              size-4
                              transition-transform
                              duration-300
                              group-hover:translate-x-1
                              group-hover:-translate-y-1
                            "
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* ================================================= */}
              {/* WORK */}
              {/* ================================================= */}

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#projects"
                  className="
                    rounded-xl
                    bg-transparent
                    px-3
                    py-2
                    text-sm
                    font-medium
                    text-neutral-700
                    transition-colors
                    hover:bg-neutral-100
                    hover:text-neutral-950
                    dark:text-neutral-300
                    dark:hover:bg-neutral-800/60
                    dark:hover:text-white
                  "
                >
                  Work
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* ================================================= */}
              {/* PROCESS */}
              {/* ================================================= */}

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#process"
                  className="
                    rounded-xl
                    bg-transparent
                    px-3
                    py-2
                    text-sm
                    font-medium
                    text-neutral-700
                    transition-colors
                    hover:bg-neutral-100
                    hover:text-neutral-950
                    dark:text-neutral-300
                    dark:hover:bg-neutral-800/60
                    dark:hover:text-white
                  "
                >
                  Process
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* ================================================= */}
              {/* WHY DASS DEV */}
              {/* ================================================= */}

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#why-us"
                  className="
                    rounded-xl
                    bg-transparent
                    px-3
                    py-2
                    text-sm
                    font-medium
                    text-neutral-700
                    transition-colors
                    hover:bg-neutral-100
                    hover:text-neutral-950
                    dark:text-neutral-300
                    dark:hover:bg-neutral-800/60
                    dark:hover:text-white
                  "
                >
                  Why DASS DEV
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* ================================================= */}
              {/* ABOUT */}
              {/* ================================================= */}

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  className="
                    rounded-xl
                    bg-transparent
                    px-3
                    py-2
                    text-sm
                    font-medium
                    text-neutral-700
                    transition-colors
                    hover:bg-neutral-100
                    hover:text-neutral-950
                    dark:text-neutral-300
                    dark:hover:bg-neutral-800/60
                    dark:hover:text-white
                  "
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* ====================================================== */}
        {/* DESKTOP ACTIONS */}
        {/* ====================================================== */}

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            type="button"
            variant="ghost"
            size="icon-lg"
            onClick={() => triggerSwipe("top-left")}
            disabled={isAnimating}
            aria-label="Toggle theme"
            className="
              rounded-xl
              text-neutral-700
              transition-all
              hover:bg-neutral-100
              dark:text-neutral-300
              dark:hover:bg-neutral-800/60
            "
          >
            {isLight ? <Moon className="size-5" /> : <Sun className="size-5" />}
          </Button>

          {/* IMPORTANT:
              Normal <a>, not Button asChild.
          */}

          <Link
            href="/contact"
            className="
              group
              inline-flex
              h-10
              items-center
              justify-center
              rounded-xl
              bg-primary
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-[0_8px_25px_rgba(0,0,0,0.12)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-primary
              hover:shadow-lg
            "
          >
            Start a project
            <ArrowUpRight
              className="
                ml-2
                size-4
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>

        {/* ====================================================== */}
        {/* MOBILE ACTIONS */}
        {/* ====================================================== */}

        <div className="flex items-center gap-1 lg:hidden">
          <Button
            type="button"
            variant="ghost"
            size="icon-lg"
            onClick={() => triggerSwipe("top-left")}
            disabled={isAnimating}
            aria-label="Toggle theme"
            className="
              rounded-xl
              text-neutral-700
              hover:bg-neutral-100
              dark:text-neutral-300
              dark:hover:bg-neutral-900
            "
          >
            {isLight ? <Moon className="size-5" /> : <Sun className="size-5" />}
          </Button>

          {/* =================================================== */}
          {/* FIXED SHEET TRIGGER                                 */}
          {/* =================================================== */}

          <Sheet>
            <SheetTrigger
              type="button"
              aria-label="Open navigation"
              className="
                inline-flex
                size-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                border-0
                bg-transparent
                p-0
                text-neutral-700
                outline-none
                transition-colors
                hover:bg-neutral-100
                dark:text-neutral-300
                dark:hover:bg-neutral-900
              "
            >
              <Menu className="size-5" />

              <span className="sr-only">Open navigation</span>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="
                flex
                w-[320px]
                flex-col
                gap-6
                border-l
                border-neutral-200
                bg-white
                p-6
                text-neutral-900
                sm:w-[400px]
                dark:border-neutral-800
                dark:bg-neutral-950
                dark:text-white
              "
            >
              {/* MOBILE LOGO */}

              <div className="flex items-center gap-2.5">
                <div
                  className="
                    flex
                    size-9
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-neutral-200
                    bg-neutral-100
                    text-primary
                    dark:border-neutral-800
                    dark:bg-neutral-900
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="size-5"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>

                <div>
                  <span className="text-lg font-bold tracking-tight">
                    DASS DEV
                  </span>

                  <span className="text-lg font-bold text-primary">.</span>
                </div>
              </div>

              {/* MOBILE NAVIGATION */}

              <div className="flex flex-col gap-1">
                <Link
                  href="#projects"
                  className="
                    rounded-xl
                    px-3
                    py-3
                    text-base
                    font-medium
                    transition-colors
                    hover:bg-neutral-100
                    hover:text-primary
                    dark:hover:bg-neutral-900
                  "
                >
                  Work
                </Link>

                {/* MOBILE SERVICES */}

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="services" className="border-none">
                    <AccordionTrigger
                      className="
                        rounded-xl
                        px-3
                        py-3
                        text-base
                        font-medium
                        no-underline
                        hover:bg-neutral-100
                        hover:text-primary
                        hover:no-underline
                        dark:hover:bg-neutral-900
                      "
                    >
                      Services
                    </AccordionTrigger>

                    <AccordionContent
                      className="
                        ml-3
                        border-l
                        border-neutral-200
                        pl-4
                        dark:border-neutral-800
                      "
                    >
                      <div className="flex flex-col gap-1">
                        <Link
                          href="/services#websites"
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-lg
                            px-3
                            py-2.5
                            text-sm
                            text-neutral-600
                            hover:bg-neutral-100
                            hover:text-primary
                            dark:text-neutral-400
                            dark:hover:bg-neutral-900
                          "
                        >
                          <Code2 className="size-4" />
                          Websites
                        </Link>

                        <Link
                          href="/services#landing-pages"
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-lg
                            px-3
                            py-2.5
                            text-sm
                            text-neutral-600
                            hover:bg-neutral-100
                            hover:text-primary
                            dark:text-neutral-400
                            dark:hover:bg-neutral-900
                          "
                        >
                          <Rocket className="size-4" />
                          Landing Pages
                        </Link>

                        <Link
                          href="/services#redesign"
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-lg
                            px-3
                            py-2.5
                            text-sm
                            text-neutral-600
                            hover:bg-neutral-100
                            hover:text-primary
                            dark:text-neutral-400
                            dark:hover:bg-neutral-900
                          "
                        >
                          <Layers3 className="size-4" />
                          Website Redesign
                        </Link>

                        <Link
                          href="/services#ecommerce"
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-lg
                            px-3
                            py-2.5
                            text-sm
                            text-neutral-600
                            hover:bg-neutral-100
                            hover:text-primary
                            dark:text-neutral-400
                            dark:hover:bg-neutral-900
                          "
                        >
                          <ShoppingBag className="size-4" />
                          E-commerce
                        </Link>

                        <Link
                          href="/services#applications"
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-lg
                            px-3
                            py-2.5
                            text-sm
                            text-neutral-600
                            hover:bg-neutral-100
                            hover:text-primary
                            dark:text-neutral-400
                            dark:hover:bg-neutral-900
                          "
                        >
                          <LayoutDashboard className="size-4" />
                          Web Applications
                        </Link>

                        <Link
                          href="/services#seo"
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-lg
                            px-3
                            py-2.5
                            text-sm
                            text-neutral-600
                            hover:bg-neutral-100
                            hover:text-primary
                            dark:text-neutral-400
                            dark:hover:bg-neutral-900
                          "
                        >
                          <Search className="size-4" />
                          SEO & Performance
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link
                  href="#process"
                  className="
                    rounded-xl
                    px-3
                    py-3
                    text-base
                    font-medium
                    transition-colors
                    hover:bg-neutral-100
                    hover:text-primary
                    dark:hover:bg-neutral-900
                  "
                >
                  Process
                </Link>

                <Link
                  href="#why-us"
                  className="
                    rounded-xl
                    px-3
                    py-3
                    text-base
                    font-medium
                    transition-colors
                    hover:bg-neutral-100
                    hover:text-primary
                    dark:hover:bg-neutral-900
                  "
                >
                  Why DASS DEV
                </Link>

                <Link
                  href="#about"
                  className="
                    rounded-xl
                    px-3
                    py-3
                    text-base
                    font-medium
                    transition-colors
                    hover:bg-neutral-100
                    hover:text-primary
                    dark:hover:bg-neutral-900
                  "
                >
                  About
                </Link>
              </div>

              {/* MOBILE CTA */}

              <div
                className="
                  mt-auto
                  border-t
                  border-neutral-200
                  pt-6
                  dark:border-neutral-800
                "
              >
                <Link
                  href="/contact"
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-primary
                    hover:shadow-lg
                  "
                >
                  Start a project
                  <ArrowUpRight
                    className="
                      ml-2
                      size-4
                      transition-transform
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
