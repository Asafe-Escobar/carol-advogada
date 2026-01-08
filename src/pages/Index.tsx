import heroBackground from "@/assets/hero-background.jpg";
import mobileBackground from "@/assets/mobile 1223.jpeg";
import logo from "@/assets/logo.png";
import { Calendar, Clock, Users, Lock, Shield, MapPin, MessageCircle, ShieldCheck, Scale, BookOpen, FileText, ScrollText } from "lucide-react";

const InfoChip = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-[#E6B324]/70 bg-gradient-to-br from-black/75 via-black/60 to-black/50 backdrop-blur-xl px-3 py-2 shadow-[0_6px_20px_rgba(0,0,0,0.6),0_0_0_1px_rgba(230,179,36,0.2)_inset] transition-all duration-300 hover:border-[#E6B324] hover:bg-gradient-to-br hover:from-black/85 hover:to-black/65 hover:shadow-[0_8px_30px_rgba(230,179,36,0.4),0_0_20px_rgba(230,179,36,0.3)] hover:scale-105 hover:-translate-y-0.5 cursor-default group md:px-5 md:py-3.5 md:gap-2.5">
    <span className="text-[10px] text-white font-bold tracking-wide uppercase md:text-[15px] whitespace-nowrap" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 10px rgba(255,255,255,0.2)' }}>{text}</span>
  </div>
);

const whatsappLink = "https://wa.me/5586999060648";

const Index = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ 
          backgroundImage: `url(${mobileBackground})`,
          imageRendering: '-webkit-optimize-contrast',
          filter: 'contrast(1.25) brightness(1.08) saturate(1.2) sharpen(2)',
        }}
      />
      
      {/* Desktop Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-[75%] md:bg-center bg-no-repeat hidden md:block"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          imageRendering: '-webkit-optimize-contrast',
          filter: 'contrast(1.25) brightness(1.08) saturate(1.2) sharpen(2)',
          transform: 'scale(1.01)'
        }}
      />
      
      {/* Overlay for better text readability - minimal to show photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/15 via-45% to-black/55 md:bg-gradient-to-r md:from-black/90 md:via-black/40 md:via-40% md:to-black/60" />
      
      {/* Very subtle background effects - top area only */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft golden ambient lights - minimal */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] h-[280px] rounded-full blur-3xl opacity-6" style={{
          background: 'radial-gradient(circle, rgba(230,179,36,0.12) 0%, rgba(230,179,36,0.04) 40%, transparent 70%)'
        }}></div>
        
        <div className="absolute top-10 -left-20 w-36 h-36 bg-[#E6B324] rounded-full blur-[110px] opacity-5 animate-pulse" style={{ animationDelay: "0s" }}></div>
        <div className="absolute top-16 -right-20 w-40 h-40 bg-[#E6B324] rounded-full blur-[120px] opacity-4 animate-pulse" style={{ animationDelay: "2s" }}></div>
        
        {/* Law-themed decorative icons - subtle and professional */}
        <div className="absolute top-[22%] left-8 opacity-[0.06] z-10 blur-[0.5px]">
          <Scale className="w-16 h-16 text-[#E6B324]" strokeWidth={0.8} />
        </div>
        <div className="absolute top-[38%] right-8 opacity-[0.05] z-10 blur-[0.5px]">
          <BookOpen className="w-14 h-14 text-[#E6B324] rotate-12" strokeWidth={0.8} />
        </div>
        <div className="absolute bottom-[28%] left-10 opacity-[0.05] z-10 blur-[0.5px]">
          <FileText className="w-14 h-14 text-[#E6B324] -rotate-12" strokeWidth={0.8} />
        </div>
        <div className="absolute top-[50%] right-12 opacity-[0.04] z-10 blur-[0.5px]">
          <ScrollText className="w-12 h-12 text-[#E6B324] rotate-6" strokeWidth={0.8} />
        </div>
        
        {/* Gentle vignette for depth - very light */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent via-85% to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent via-35% to-transparent"></div>
        
        {/* Subtle decorative lines */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E6B324]/15 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E6B324]/15 to-transparent"></div>
        
        {/* Light film grain */}
        <div className="absolute inset-0 opacity-[0.01] mix-blend-soft-light" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <header className="px-5 pt-6 md:px-24 md:pt-20 flex justify-center">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-block">
              <img 
                src={logo} 
                alt="Dr. Carolina - Advogada" 
                className="h-24 w-auto drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)] filter brightness-105 md:h-40"
              />
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <div className="flex flex-1 items-start px-5 pt-0 pb-1 md:px-24 md:pt-16 md:pb-6 md:items-center">
          <div className="w-full max-w-md md:max-w-4xl">
            {/* Content */}
            <div className="space-y-2 md:space-y-8">
              {/* Decorative top line */}
              <div 
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="h-[2px] w-20 bg-gradient-to-r from-[#E6B324] via-[#E6B324]/60 to-transparent rounded-full shadow-[0_0_10px_rgba(230,179,36,0.5)] md:h-[5px] md:w-44"></div>
              </div>

              <h1 
                className="text-[31px] leading-[1.05] font-bold text-white opacity-0 animate-fade-in md:text-[68px] md:leading-[1.15]"
                style={{ 
                  animationDelay: "0.3s",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  textShadow: '0 6px 24px rgba(0, 0, 0, 0.9), 0 2px 12px rgba(230, 179, 36, 0.4)'
                }}
              >
                Para quem vive o <span className="text-[#E6B324] drop-shadow-[0_0_20px_rgba(230,179,36,0.8)]">TDAH</span> ou o{" "}
                <span className="text-[#E6B324] drop-shadow-[0_0_20px_rgba(230,179,36,0.8)]">autismo</span> dentro de casa
              </h1>

              <p 
                className="text-[13px] leading-[1.4] text-white/95 opacity-0 animate-fade-in md:text-[20px] md:leading-[1.65]"
                style={{ 
                  animationDelay: "0.5s",
                  fontFamily: "'Inter', sans-serif",
                  textShadow: '0 3px 15px rgba(0, 0, 0, 0.8)'
                }}
              >
                Quem convive sabe: não é preguiça, não é falta de limite. É cansaço diário, preocupação constante e medo do amanhã. Muitas famílias cuidam sozinhas, sem saber que existe um direito que pode ajudar.{" "}
                <span className="text-[#E6B324] font-bold drop-shadow-[0_2px_10px_rgba(230,179,36,0.6)]">Vou explicar de forma clara e prática como o BPC/LOAS funciona e quando ele pode apoiar a sua família.</span>
              </p>

              {/* Decorative divider */}
              <div 
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#E6B324]/40 to-transparent md:h-[2px]"></div>
              </div>

              <div 
                className="flex items-center justify-between gap-1.5 opacity-0 animate-fade-in md:gap-5 md:flex-wrap md:justify-start"
                style={{ animationDelay: "0.7s" }}
              >
                <InfoChip
                  icon={<Calendar className="h-3.5 w-3.5" aria-hidden="true" />}
                  text="14 JAN 2026"
                />
                <InfoChip
                  icon={<Clock className="h-3.5 w-3.5" aria-hidden="true" />}
                  text="19H"
                />
                <InfoChip
                  icon={<Users className="h-3.5 w-3.5" aria-hidden="true" />}
                  text="GRATUITA"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button - Positioned above footer */}
        <div className="px-5 pb-4 md:px-24 md:pb-10">
          <div 
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.9s" }}
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-gradient-to-b from-[#25D366] to-[#22C55E] px-4 py-3.5 text-[14px] font-extrabold uppercase tracking-wide text-white shadow-[0_10px_30px_rgba(37,211,102,0.5),inset_0_1px_0_rgba(255,255,255,0.25)] transition-all hover:from-[#22C55E] hover:to-[#20B559] hover:shadow-[0_14px_40px_rgba(37,211,102,0.6)] hover:scale-[1.03] active:scale-[0.98] duration-300 md:text-[18px] md:py-4.5 md:px-7 md:max-w-xl"
              aria-label="Entrar no grupo do WhatsApp"
            >
              <svg className="h-6 w-6 group-hover:scale-110 transition-transform duration-300 md:h-7 md:w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Entrar no grupo</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-5 pb-5 md:px-24 md:pb-14">
          <div 
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            {/* Elegant divider above footer */}
            <div className="mb-3.5 flex items-center gap-2 md:mb-7">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#E6B324]/40 md:h-[2px]"></div>
              <div className="w-1 h-1 rounded-full bg-[#E6B324]/60 md:w-2 md:h-2"></div>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#E6B324]/40 md:h-[2px]"></div>
            </div>
            
            <p className="text-[13px] text-[#E6B324] font-bold leading-[1.4] md:text-[18px]" style={{ textShadow: '0 3px 15px rgba(0, 0, 0, 0.9), 0 0 25px rgba(230, 179, 36, 0.4)' }}>
              Dr. Carolina - Advogada • 10 anos de experiência
            </p>
            <p className="mt-2 text-[11px] text-white/95 font-medium leading-[1.4] md:text-[16px] md:mt-3" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}>
              Professora, Palestrante e Conselheira Estadual da OAB/PI
            </p>
            <p className="mt-1.5 text-[11px] text-white/90 leading-[1.4] md:text-[16px] md:mt-2" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}>
              Teresina, Acauã e Betânia do Piauí • <span className="font-bold text-[#E6B324] drop-shadow-[0_0_15px_rgba(230,179,36,0.6)]">(86) 99806-0648</span>
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Index;
