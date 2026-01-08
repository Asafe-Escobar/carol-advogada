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
    <div className="flex items-center gap-2 rounded-full border border-border/60 bg-card/25 px-4 py-2.5 backdrop-blur-md">
      <span className="text-primary">{icon}</span>
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
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-background/95 via-background/80 to-background/15" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(1200px_520px_at_18%_22%,hsl(var(--primary)/0.18),transparent_60%)]" />

        {/* Foto em PNG por cima do background (sem criar segunda dobra) */}
        <div className="pointer-events-none absolute bottom-0 right-0 z-20 hidden h-full w-1/2 items-end justify-end lg:flex">
          <img
            src={carolinaPhoto}
            alt="Foto da advogada Carolina Bezerra"
            className="h-auto max-h-[92vh] w-auto object-contain drop-shadow-[0_18px_60px_hsl(var(--foreground)/0.28)]"
            loading="eager"
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 right-[-40px] z-20 lg:hidden">
          <img
            src={carolinaPhoto}
            alt="Foto da advogada Carolina Bezerra"
            className="h-auto max-h-[46vh] w-auto object-contain opacity-40 drop-shadow-[0_18px_60px_hsl(var(--foreground)/0.22)]"
            loading="lazy"
          />
        </div>
        <div className="relative z-20 mx-auto flex min-h-screen max-w-6xl items-center px-6 py-14 md:px-12">
          <div className="w-full max-w-2xl">
            {/* Logo */}
            <div className="mb-8">
              <img
                src={carolinaLogo}
                alt="Carolina Bezerra Advocacia"
                className="h-20 w-auto max-w-[420px] md:h-24 lg:h-28"
              />
            </div>

            <header className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">
                Palestra online e gratuita
              </p>
            </header>

            <h1 className="font-display text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-6xl">
              Para quem vive o <span className="text-primary">TDAH</span> ou o{" "}
              <span className="text-primary">autismo</span> dentro de casa
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/85 md:text-lg">
              Quem convive sabe: não é preguiça, não é falta de limite. É cansaço diário,
              preocupação constante e medo do amanhã. Nesta palestra, você vai entender de forma
              simples quando o <span className="text-primary font-semibold">BPC/LOAS</span> pode
              ajudar sua família.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
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

            <div className="mt-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-accent px-6 py-4 text-sm font-semibold uppercase tracking-wide text-accent-foreground shadow-[0_18px_50px_hsl(var(--foreground)/0.22)] transition hover:brightness-110 md:w-auto"
                aria-label="Entrar no grupo do WhatsApp para receber o link da palestra"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Entrar no grupo e receber o link
              </a>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                Você não paga nada. O link de acesso à palestra será enviado no grupo.
              </p>
            </div>

            <footer className="mt-10 border-t border-border/50 pt-6">
              <p className="text-sm text-foreground/90">
                <span className="font-semibold">Carolina de Carvalho Bezerra</span> • 10 anos de
                advocacia • Professora, Palestrante e Conselheira Estadual da OAB/PI
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
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
