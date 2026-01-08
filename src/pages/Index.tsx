import { Calendar, Clock, Users, MessageCircle } from "lucide-react";
import carolinaBg from "@/assets/carolina-bg.jpg";

const Index = () => {
  const whatsappLink = "https://wa.me/5586998060648";

  return (
    <section
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${carolinaBg})` }}
    >
      <div className="w-full max-w-2xl px-6 md:px-12 lg:px-20 py-12">
        {/* Badge */}
        <span className="inline-block text-amber-400 text-xs md:text-sm font-semibold tracking-[0.2em] mb-8">
          PALESTRA ONLINE E GRATUITA
        </span>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-serif italic">
          Para quem vive o{" "}
          <span className="text-amber-400">TDAH</span> ou
          <br />
          o <span className="text-amber-400">autismo</span> dentro de casa
        </h1>

        {/* Subheadline */}
        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
          Quem convive sabe: não é preguiça, não é falta de limite. É cansaço diário, 
          preocupação constante e medo do amanhã.{" "}
          <span className="text-amber-400 font-medium">
            Descubra como o BPC/LOAS pode ajudar a sua família.
          </span>
        </p>

        {/* Info Badges */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-3">
            <Calendar className="w-5 h-5 text-amber-400" />
            <span className="text-white text-sm font-medium">14 de Janeiro de 2026</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-3">
            <Clock className="w-5 h-5 text-amber-400" />
            <span className="text-white text-sm font-medium">19h</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-3">
            <Users className="w-5 h-5 text-amber-400" />
            <span className="text-white text-sm font-medium">100% Gratuita</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-sm md:text-base uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full md:w-auto"
        >
          <MessageCircle className="w-5 h-5" />
          QUERO PARTICIPAR DA PALESTRA
        </a>

        {/* Helper Text */}
        <p className="text-white/60 text-sm mt-4 max-w-md">
          Clique e entre no grupo exclusivo. É lá que você receberá o link de acesso à palestra.
        </p>

        {/* Quote */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-white/70 text-sm italic leading-relaxed max-w-lg">
            "Vou abrir as portas do meu escritório e compartilhar conhecimento de forma simples, 
            humana e responsável, para te ajudar a entender o caminho correto para buscar esse 
            direito para o seu filho."
          </p>
          <div className="mt-4">
            <p className="text-white font-semibold">Carolina Bezerra</p>
            <p className="text-white/50 text-sm">
              Advogada Previdenciária • 10 anos de experiência • Conselheira OAB/PI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
