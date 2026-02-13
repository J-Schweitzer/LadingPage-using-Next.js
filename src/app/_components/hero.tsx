export function Hero() {
  return (
    <section className="relative bg-[#101c35] text-white overflow-hidden py-16 md:py-24 lg:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-5 max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              Licitações com a IA Econect <span className="text-[#059ad9]">mais agilidade, precisão e transparência</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl">
              Nossa inteligência artificial automatiza e gera documentos para 
              processos licitatórios, organizando fluxos e simplificando cada etapa. 
              Desburocratize a gestão pública e elimine a morosidade com eficiência e inovação.
            </p>

            <div className="pt-4">
              <a 
                href="#contato" 
                className="inline-block bg-[#059ad9] hover:bg-[#047db8] text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-[#059ad9]/20 transition-all transform hover:-translate-y-1"
                >
                QUERO SABER MAIS
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative">
             <div className="absolute -inset-4 bg-[#059ad9]/10 blur-3xl rounded-full"></div>
          </div>

          

        </article>


      </div>
    </section>
  );
}