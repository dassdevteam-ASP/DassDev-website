"use client";

import { useRef } from "react";

import { motion, useInView } from "motion/react";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function TestimonialVideoCarousel() {
  const sectionRef = useRef(null);

  const isSectionInView = useInView(sectionRef, {
    amount: 0.12,
  });

  const cards = testimonials.map((testimonial, index) => (
    <Card
      key={testimonial.id}
      card={testimonial}
      index={index}
      isSectionInView={isSectionInView}
      layout
    />
  ));

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="w-full overflow-hidden bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Client Stories
          </p>

          <h2 className="max-w-4xl text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Don't just take
            <br />
            <span className="text-muted-foreground">our word for it.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Hear from the people we've worked with and see what it is like to
            build, launch, and grow with DASS DEV.
          </p>
        </motion.div>
      </div>

      <Carousel items={cards} />
    </section>
  );
}

export const testimonials = [
  {
    id: "testimonial-1",
    category: "Website Development",
    title: "A website that finally feels like our brand.",
    name: "Alex Rivera",
    role: "Founder",
    company: "Placeholder Studio",
    quote:
      "Placeholder testimonial. Replace this with a real client testimonial once you have permission to publish it.",
    thumbnail:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    id: "testimonial-2",
    category: "Website Redesign",
    title: "The new experience is dramatically easier to use.",
    name: "Jordan Lee",
    role: "Co-Founder",
    company: "Placeholder Labs",
    quote:
      "Placeholder testimonial. Replace this with a real client testimonial once you have permission to publish it.",
    thumbnail:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "testimonial-3",
    category: "Landing Page",
    title: "We went from an idea to something we could ship.",
    name: "Sam Wilson",
    role: "Founder",
    company: "Placeholder Startup",
    quote:
      "Placeholder testimonial. Replace this with a real client testimonial once you have permission to publish it.",
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    video: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
  },
  {
    id: "testimonial-4",
    category: "E-commerce",
    title: "The whole buying experience became much clearer.",
    name: "Taylor Morgan",
    role: "Founder",
    company: "Placeholder Commerce",
    quote:
      "Placeholder testimonial. Replace this with a real client testimonial once you have permission to publish it.",
    thumbnail:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    id: "testimonial-5",
    category: "Web Application",
    title: "They understood the product, not just the UI.",
    name: "Chris Parker",
    role: "Product Lead",
    company: "Placeholder Technologies",
    quote:
      "Placeholder testimonial. Replace this with a real client testimonial once you have permission to publish it.",
    thumbnail:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1600&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "testimonial-6",
    category: "Ongoing Support",
    title: "Having someone maintain the site changed everything.",
    name: "Morgan Davis",
    role: "Business Owner",
    company: "Placeholder Business",
    quote:
      "Placeholder testimonial. Replace this with a real client testimonial once you have permission to publish it.",
    thumbnail:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop",
    video: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
  },
];
