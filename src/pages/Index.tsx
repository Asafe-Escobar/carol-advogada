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
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-black/95 via-black/80 to-black/20 lg:via-black/75 lg:to-black/15" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-transparent lg:bg-[radial-gradient(1200px_520px_at_18%_22%,rgba(255,255,255,0.03),transparent_60%)]" />

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
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
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
