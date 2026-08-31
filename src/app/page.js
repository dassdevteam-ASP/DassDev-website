import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";
import ArcProjectCarousel from "@/components/ArcProjectCarousel";
import Bento2Demo from "@/components/bento-2-demo";
import FAQDemo from "@/components/faq-2-demo";
import Footer from "@/components/Footer";
import HeroParallaxDemo from "@/components/hero-parallax-demo";
import Stats3Demo from "@/components/stats-3-demo";
import ContactSolutionForm from "@/components/ui/contact-solution-form";
import CustomCursor from "@/components/ui/following-pointer";
import WhyDassDev from "@/components/why-dass-dev";

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />

      {/* HERO */}
      <section id="home" className="scroll-mt-20">
        <HeroParallaxDemo />
      </section>

      {/* BUILD / SHIP / MAINTAIN */}
      <section id="process" className="scroll-mt-20">
        <Stats3Demo />
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-20">
        <Bento2Demo />
      </section>

      {/* WHY DASS DEV */}
      <section id="why-us" className="scroll-mt-20">
          <WhyDassDev/>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-20">
        <ArcProjectCarousel />
      </section>

      {/* CLIENT STORIES */}
      <section id="testimonials" className="scroll-mt-20">
        <AppleCardsCarouselDemo />
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20">
        <FAQDemo />
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-20">
        <ContactSolutionForm />
      </section>

      <Footer />
    </main>
  );
}
