"use client";

import { FloatingTechHero } from "@/components/ui/hero-section-7";

export default function FloatingTechHeroDemo() {
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      alt: "Code editor with syntax highlighting",
      className: "w-32 sm:w-40 md:w-48 lg:w-56 top-10 left-4 sm:left-10 md:top-20 md:left-20 animate-float",
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      alt: "Analytics dashboard",
      className: "w-28 sm:w-36 md:w-48 top-10 right-4 sm:right-10 md:top-16 md:right-16 animate-float",
    },
    {
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
      alt: "Laptop with code",
      className: "w-32 sm:w-40 md:w-56 bottom-8 right-5 sm:right-10 md:bottom-16 md:right-20 animate-float",
    },
    {
      src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=400&auto=format&fit=crop",
      alt: "Mobile device mockup",
      className: "w-8 sm:w-12 top-1/4 left-1/3 animate-float",
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
      alt: "Data visualization",
      className: "w-8 sm:w-10 top-1/2 right-1/4 animate-float",
    },
    {
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=400&auto=format&fit=crop",
      alt: "Technology interface",
      className: "w-8 sm:w-10 top-3/4 left-1/4 animate-float",
    },
  ];

  return (
    <div className="w-full">
      <FloatingTechHero
        title="We Build Digital Experiences That Drive Results"
        description="From powerful websites to scalable web applications, we help businesses grow with modern technology, clean design, and seamless user experiences."
        images={heroImages}
      />
    </div>
  );
}
