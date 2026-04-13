import { MessageCircle, ArrowRight } from "lucide-react";
import draKenia from "@/assets/dra-kenia-enhanced.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Dark overlay background */}
      <div className="absolute inset-0 bg-brown-dark" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8">
        {/* Left - Text Content */}
        <div className="px-6 md:px-12 lg:px-16 py-12">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight mb-6">
            Justiça com{" "}
            <em className="italic text-gold-gradient not-italic">fé</em>,
            <br />
            <span className="text-gold-gradient">acolhimento</span> e{" "}
            <span className="text-gold-gradient underline decoration-1 underline-offset-8">propósito</span>.
          </h1>
          <p className="text-cream-muted text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
            +13 anos de experiência em Família e Sucessões, Previdenciário e Bancário.
            Atendimento humanizado em todo o Brasil.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="https://wa.me/5564999881043?text=Olá, gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-gold-light transition-colors duration-300 tracking-wide text-sm"
            >
              <MessageCircle size={18} />
              FALE COM UM ESPECIALISTA
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Right - Photo */}
        <div className="relative h-full flex items-end justify-center md:justify-end">
          <div className="relative">
            {/* Gold accent line */}
            <div className="absolute -left-4 top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent hidden md:block" />
            <img
              src={draKenia}
              alt="Dra. Kênia Garcia - Advogada"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-cover object-top rounded-sm"
              style={{ maxHeight: '85vh' }}
              loading="eager"
            />
            {/* Gold glow behind photo */}
            <div className="absolute -inset-4 bg-primary/5 rounded-sm -z-10 blur-2xl" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
