

import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";
import Bento2Demo from "@/components/bento-2-demo";
import FAQDemo from "@/components/faq-2-demo";
import Footer from "@/components/Footer";
import HeroParallaxDemo from "@/components/hero-parallax-demo";
import Stats3Demo from "@/components/stats-3-demo";
import ContactSolutionForm from "@/components/ui/contact-solution-form";
import CustomCursor from "@/components/ui/following-pointer";

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />

      <section>
        <HeroParallaxDemo />
      </section>

      <section>
        {/* Build / Ship / Maintain */}
        <Stats3Demo/>
      </section>

      <section>
        {/* Services */}
        <Bento2Demo/>
      </section>
      <section>
        {/* Why DASS DEV */}
        
      </section>

      <section>
        {/* Projects */}
      </section>


      <section>
        <AppleCardsCarouselDemo />
      </section>

      <section id="faq">
        <FAQDemo />
      </section>

      <section>
        <ContactSolutionForm />
      </section>

      <Footer />
    </main>
  );
}