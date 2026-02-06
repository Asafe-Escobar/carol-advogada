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
import oab from "@/assets/oab.png";

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
  const whatsappLink = "https://chat.whatsapp.com/IjHaE5Sedsc5HXGesLZWti";

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
        
        <div className="pointer-events-none absolute inset-0 z-20 flex min-h-screen w-full items-center justify-end lg:hidden">
          <img
            src={carolinaPhoto}
            alt="Foto da advogada Carolina Bezerra"
            className="h-[150vh] w-auto object-contain object-center opacity-90 drop-shadow-[0_30px_80px_hsl(var(--foreground)/0.4)] translate-x-[50px] scale-125 translate-y-[55px]"
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
                Advocacia previdenciária especializada
              </p>
            </header>

            <h1 className="font-display text-3xl font-bold leading-[1.15] text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Seu benefício <span className="text-[#E6B324]">negado</span> não é o{" "}
              <span className="text-[#E6B324]">fim da história</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/90 sm:text-base md:text-lg lg:text-xl sm:mt-5">
              Você trabalhou a vida inteira, pagou contribuições e agora precisa do INSS. Mas
              recebeu uma negativa injusta e não sabe o que fazer.{" "}
              <span className="text-[#E6B324] font-bold">Eu luto pelo seu direito até conseguir sua aposentadoria.</span>
            </p>

            <div className="mt-4 flex flex-wrap gap-2 sm:gap-2.5 sm:mt-5">
              <InfoChip
                icon={<Calendar className="h-5 w-5" aria-hidden="true" />}
                text="10 anos de experiência"
              />
              <InfoChip
                icon={<Clock className="h-5 w-5" aria-hidden="true" />}
                text="Resposta rápida"
              />
              <InfoChip
                icon={<Users className="h-5 w-5" aria-hidden="true" />}
                text="Atendimento humanizado"
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
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
                {/* Coluna esquerda - Botão */}
                <div className="flex-shrink-0">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#25D366] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_20px_60px_rgba(37,211,102,0.3)] transition hover:bg-[#20BD5A] sm:gap-3 sm:px-6 sm:py-4 sm:text-sm md:w-auto"
                    aria-label="Conversar no WhatsApp para agendar sua consulta jurídica"
                  >
                    <MessageCircle className="h-6 w-6" aria-hidden="true" />
                    Quero garantir meu direito
                  </a>
                  <p className="mt-3 max-w-md text-xs text-muted-foreground sm:text-sm">
                    Clique e fale comigo agora mesmo. Vou analisar seu caso sem compromisso e sem burocracia.
                  </p>
                </div>

                {/* Coluna direita - Credibilidade */}
                <div className="hidden flex-col items-start gap-4 sm:flex sm:flex-row sm:items-center sm:gap-6 lg:flex">
                  {/* Imagem OAB */}
                  <div className="flex items-center justify-center">
                    <img
                      src={oab}
                      alt="OAB - Ordem dos Advogados do Brasil"
                      className="h-16 w-auto object-contain opacity-90 sm:h-20"
                    />
                  </div>

                  {/* Benefícios Garantidos */}
                  <div className="flex items-center gap-2 rounded-lg px-5 py-3 backdrop-blur-sm">
                    <span className="text-2xl sm:text-5xl" aria-hidden="true">🏆</span>
                    <div className="flex flex-col justify-center">
                      <p className="text-2xl font-bold leading-tight text-[#E6B324] sm:text-3xl">
                        +1.000
                      </p>
                      <p className="whitespace-nowrap text-[10px] font-medium uppercase leading-tight text-foreground/90 sm:text-xs">
                        Benefícios Garantidos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer className="mt-5 border-t border-border/50 pt-4 sm:mt-6 sm:pt-5">
              <p className="text-xs text-foreground/90 sm:text-sm">
                <span className="font-semibold">Carolina de Carvalho Bezerra</span> • Especialista em
                Previdenciário • Professora, Palestrante e Conselheira Estadual da OAB/PI
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
