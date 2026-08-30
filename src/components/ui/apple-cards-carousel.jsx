"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";

import { AnimatePresence, motion } from "motion/react";

import { useOutsideClick } from "@/hooks/use-outside-click";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }) => {
  const carouselRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const checkScrollability = () => {
    const element = carouselRef.current;

    if (!element) return;

    const maxScrollLeft = element.scrollWidth - element.clientWidth;

    setCanScrollLeft(element.scrollLeft > 1);
    setCanScrollRight(element.scrollLeft < maxScrollLeft - 1);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const element = carouselRef.current;

    if (!element) return;

    element.scrollLeft = initialScroll;

    checkScrollability();

    const resizeObserver = new ResizeObserver(() => {
      checkScrollability();
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [initialScroll, mounted]);

  const scroll = (direction) => {
    const element = carouselRef.current;

    if (!element) return;

    element.scrollBy({
      left: direction * 320,
      behavior: "smooth",
    });
  };

  const handleCardClose = (index) => {
    const element = carouselRef.current;

    if (!element) return;

    const cardWidth = window.innerWidth < 768 ? 256 : 384;
    const gap = 16;

    element.scrollTo({
      left: (cardWidth + gap) * index,
      behavior: "smooth",
    });

    setCurrentIndex(index);
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          ref={carouselRef}
          onScroll={checkScrollability}
          className="flex w-full overflow-x-auto overscroll-x-contain scroll-smooth py-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:py-20"
        >
          <div className="mx-auto flex max-w-7xl gap-4 px-4">
            {items.map((item, index) => (
              <motion.div
                key={`card-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                className="shrink-0"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl justify-end gap-2 px-4">
          <CarouselButton
            direction="left"
            disabled={!mounted || !canScrollLeft}
            onClick={() => scroll(-1)}
          />

          <CarouselButton
            direction="right"
            disabled={!mounted || !canScrollRight}
            onClick={() => scroll(1)}
          />
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

function CarouselButton({ direction, disabled, onClick }) {
  const Icon =
    direction === "left" ? IconArrowNarrowLeft : IconArrowNarrowRight;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={Boolean(disabled)}
      aria-label={
        direction === "left" ? "Previous testimonials" : "Next testimonials"
      }
      className="flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-30"
    >
      <Icon className="size-5" />
    </button>
  );
}

export const Card = ({
  card,
  index,
  layout = false,
  isSectionInView = false,
}) => {
  const [open, setOpen] = useState(false);

  const cardVideoRef = useRef(null);

  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    const video = cardVideoRef.current;

    if (!video) return;

    if (!isSectionInView || open) {
      video.pause();
      video.currentTime = 0;
      return;
    }

    const timer = window.setTimeout(() => {
      video.play().catch(() => {});
    }, 1200);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isSectionInView, open]);

  const handleOpen = () => {
    cardVideoRef.current?.pause();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <TestimonialModal
        card={card}
        open={open}
        onClose={handleClose}
        layout={layout}
      />

      <motion.button
        type="button"
        layoutId={layout ? `card-${card.id}` : undefined}
        onClick={handleOpen}
        className="group relative z-10 flex h-80 w-64 shrink-0 flex-col items-start justify-start overflow-hidden rounded-3xl bg-neutral-900 text-left md:h-[38rem] md:w-96"
      >
        <video
          ref={cardVideoRef}
          src={card.video}
          poster={card.thumbnail}
          muted
          playsInline
          loop
          preload="metadata"
          aria-label={`${card.name} testimonial`}
          className="absolute inset-0 z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-black/60 via-black/10 to-black/90" />

        <div className="absolute right-6 top-6 z-40 flex size-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
          <span className="text-xs">▶</span>
        </div>

        <div className="relative z-40 p-7 md:p-8">
          <motion.p
            layoutId={layout ? `category-${card.id}` : undefined}
            className="text-left text-xs font-medium uppercase tracking-[0.18em] text-white/70"
          >
            {card.category}
          </motion.p>

          <motion.p
            layoutId={layout ? `title-${card.id}` : undefined}
            className="mt-3 max-w-xs text-left text-xl font-semibold leading-tight tracking-tight text-white md:text-3xl"
          >
            {card.title}
          </motion.p>
        </div>

        <div className="absolute bottom-7 left-7 right-7 z-40 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-white">{card.name}</p>

            <p className="mt-1 text-xs text-white/60">
              {card.role} · {card.company}
            </p>
          </div>

          <span className="text-xs uppercase tracking-widest text-white/50">
            Watch
          </span>
        </div>
      </motion.button>
    </>
  );
};

function TestimonialModal({ card, open, onClose, layout }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useOutsideClick(containerRef, () => {
    if (open) {
      onClose();
    }
  });

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    videoRef.current?.play().catch(() => {});

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      videoRef.current?.pause();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            layoutId={layout ? `card-${card.id}` : undefined}
            className="relative z-[60] mx-auto my-6 max-w-5xl overflow-hidden rounded-3xl bg-white p-4 font-sans md:my-10 md:p-8 dark:bg-neutral-950"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close testimonial"
              className="absolute right-5 top-5 z-50 flex size-9 items-center justify-center rounded-full bg-black text-white transition-transform duration-200 hover:scale-105 dark:bg-white dark:text-black"
            >
              <IconX className="size-5" />
            </button>

            <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
              <video
                ref={videoRef}
                src={card.video}
                poster={card.thumbnail}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-cover"
              />
            </div>

            <div className="px-2 pb-2 pt-7 md:px-4">
              <motion.p
                layoutId={layout ? `category-${card.id}` : undefined}
                className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500"
              >
                {card.category}
              </motion.p>

              <motion.h3
                layoutId={layout ? `title-${card.id}` : undefined}
                className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-neutral-900 md:text-4xl dark:text-white"
              >
                {card.title}
              </motion.h3>

              <div className="mt-7 grid gap-5 md:grid-cols-[auto_1fr] md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                    {card.name}
                  </p>

                  <p className="mt-1 text-sm text-neutral-500">
                    {card.role} · {card.company}
                  </p>
                </div>

                <blockquote className="max-w-xl text-sm leading-relaxed text-neutral-500">
                  "{card.quote}"
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
