import carolinaBg from "@/assets/carolina-bg.jpg";

const Index = () => {
  const whatsappLink = "https://wa.me/5586998060648";

  return (
    <section
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${carolinaBg})` }}
    >
      <div className="w-full max-w-3xl px-6 md:px-12 lg:px-20 py-12">
        {/* Badge */}
        <span className="inline-block bg-white/10 backdrop-blur-sm text-white text-xs md:text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/20">
          PALESTRA GRATUITA • 14 DE JANEIRO DE 2026 • 19H
        </span>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Seu filho tem TDAH ou Autismo?
          <br />
          <span className="text-white/90">Ele pode ter direito ao BPC/LOAS.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-white/80 text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-xl">
          Você não precisa cuidar sozinha. E não precisa pagar nada para descobrir se seu filho tem direito.
          <br /><br />
          No dia <strong className="text-white">14 de janeiro</strong>, vou abrir as portas do meu escritório e explicar, de forma clara e sem juridiquês, como funciona o BPC/LOAS e quando ele pode ajudar a sua família.
        </p>

        {/* Trust Elements */}
        <div className="flex flex-wrap gap-4 mb-8 text-white/70 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            10 anos de advocacia
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Especialista em BPC/LOAS
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Conselheira OAB/PI
          </span>
        </div>

        {/* CTA Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-base md:text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          QUERO PARTICIPAR DA PALESTRA GRATUITA
        </a>

        {/* Author */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-white font-semibold text-lg">Carolina Bezerra</p>
          <p className="text-white/60 text-sm">
            Advogada Previdenciária • Professora • Palestrante
          </p>
          <p className="text-white/50 text-xs mt-1">
            Carolina Bezerra Advocacia — Teresina, Acauã e Betânia do Piauí
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
