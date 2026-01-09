import type { ReactNode } from "react";
import {
  Calendar,
  Clock,
  Users,
  ShieldCheck,
  MapPin,
  MessageCircle,
  Lock,
} from "lucide-react";
import carolinaBg from "@/assets/carolina-bg.jpg";
import carolinaPhoto from "@/assets/carolina-photo.jpg";
import carolinaLogo from "@/assets/carolina-logo.png";

type InfoChipProps = {
  icon: ReactNode;
  text: string;
};

const InfoChip = ({ icon, text }: InfoChipProps) => {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[#E6B324]/30 bg-[#1a1311]/40 px-4 py-2.5 backdrop-blur-md">
      <span className="text-[#E6B324]">{icon}</span>
      <span className="text-sm font-medium text-foreground/95">{text}</span>
    </div>
  );
};

const Index = () => {
  const whatsappLink = "https://wa.me/5586998060648";

  return (
    <main>
      <section
        className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${carolinaBg})` }}
      >
        {/* Overlays para contraste e legibilidade (IHC) */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-background/96 via-background/85 to-background/30 lg:via-background/85 lg:to-background/30" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background/40 via-transparent to-transparent lg:bg-[radial-gradient(1200px_520px_at_18%_22%,hsl(var(--primary)/0.18),transparent_60%)]" />

        {/* Foto em PNG por cima do background (sem criar segunda dobra) */}
        <div className="pointer-events-none absolute inset-0 right-[-80px] z-20 hidden h-full w-[50%] items-end justify-end lg:flex">
          <img
            src={carolinaPhoto}
            alt="Foto da advogada Carolina Bezerra"
            className="h-full w-full max-w-none object-contain object-bottom drop-shadow-[0_30px_90px_hsl(var(--foreground)/0.45)]"
            loading="eager"
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 z-20 flex h-full w-full items-end justify-end lg:hidden">
          <img
            src={carolinaPhoto}
            alt="Foto da advogada Carolina Bezerra"
            className="h-[90vh] w-auto object-contain object-bottom opacity-80 drop-shadow-[0_30px_80px_hsl(var(--foreground)/0.4)]"
            loading="lazy"
          />
        </div>
        <div className="relative z-20 flex min-h-screen items-center px-6 py-8 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <div className="w-full max-w-[900px]">
            {/* Logo */}
            <div className="mb-5 md:mb-6">
              <img
                src={carolinaLogo}
                alt="Carolina Bezerra Advocacia"
                className="h-16 w-auto sm:h-20 md:h-24 lg:h-28"
              />
            </div>

            <header className="mb-4 sm:mb-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#E6B324] sm:text-xs">
                Palestra online e gratuita
              </p>
            </header>

            <h1 className="font-display text-3xl font-bold leading-[1.15] text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Para quem vive o <span className="text-[#E6B324]">TDAH</span> ou o{" "}
              <span className="text-[#E6B324]">autismo</span> dentro de casa
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/90 sm:text-base md:text-lg lg:text-xl sm:mt-5">
              Quem convive sabe: não é preguiça, não é falta de limite. É cansaço diário,
              preocupação constante e medo do amanhã.{" "}
              <span className="text-[#E6B324] font-bold">Descubra como o BPC/LOAS pode ajudar a sua família.</span>
            </p>

            <div className="mt-4 flex flex-wrap gap-2 sm:gap-2.5 sm:mt-5">
              <InfoChip
                icon={<Calendar className="h-5 w-5" aria-hidden="true" />}
                text="14 de janeiro de 2026"
              />
              <InfoChip
                icon={<Clock className="h-5 w-5" aria-hidden="true" />}
                text="19h"
              />
              <InfoChip
                icon={<Users className="h-5 w-5" aria-hidden="true" />}
                text="100% gratuita"
              />
              <InfoChip
                icon={<Lock className="h-5 w-5" aria-hidden="true" />}
                text="Grupo privado"
              />
              <InfoChip
                icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
                text="Advocacia ética"
              />
              <InfoChip
                icon={<MapPin className="h-5 w-5" aria-hidden="true" />}
                text="Atendimento Brasil"
              />
            </div>

            <div className="mt-5 sm:mt-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#25D366] px-5 py-3.5 text-xs font-bold uppercase tracking-wide text-white shadow-[0_20px_60px_rgba(37,211,102,0.3)] transition hover:bg-[#20BD5A] sm:gap-3 sm:px-6 sm:py-4 sm:text-sm md:w-auto"
                aria-label="Entrar no grupo do WhatsApp para receber o link da palestra"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Quero participar da palestra
              </a>
              <p className="mt-3 max-w-md text-xs text-muted-foreground sm:text-sm">
                Clique e entre no grupo exclusivo. É lá que você receberá o link de acesso à palestra.
              </p>
            </div>

            <footer className="mt-5 border-t border-border/50 pt-4 sm:mt-6 sm:pt-5">
              <p className="text-xs text-foreground/90 sm:text-sm">
                <span className="font-semibold">Carolina de Carvalho Bezerra</span> • 10 anos de
                advocacia • Professora, Palestrante e Conselheira Estadual da OAB/PI
              </p>
              <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                Escritórios físicos em Teresina, Acauã e Betânia do Piauí • WhatsApp:
                <span className="font-medium text-foreground/90"> (86) 99806-0648</span>
              </p>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
