import { FileText, Scale, MessageSquare, Search, ChevronDown } from "lucide-react";

const SectionSeparator = () => (
  <div className="relative flex items-center justify-center mb-32">
    {/* Linha horizontal com opacidade baixa */}
    <div className="absolute w-full h-[6px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
    
    {/* Ponto central brilhante */}
    <div className="relative w-4 h-4 bg-[#059ad9] rounded-full shadow-[0_0_10px_#059ad9] z-10"></div>
  </div>
);

const services = [
  {
    title: "Geração Automatizada de Documentos",
    icon: <FileText className="w-6 h-6 text-[#059ad9]" />,
    items: ["DFD", "Estudo Técnico Preliminar", "Termo de Referência", "Projeto Básico", "Mapa de Risco", "Edital", "Documentos Personalizáveis"],
    footer: "Modelos alinhados à legislação vigente.",
    buttonText: "CRIAR DOCUMENTOS"
  },
  {
    title: "Elaboração e Parecer Jurídico",
    icon: <Scale className="w-6 h-6 text-[#059ad9]" />,
    description: "Elaboração inteligente e automatizada do PCA e Parecer Jurídico, com base em normativas atualizadas e alinhada ao perfil do órgão contratante.",
    items: ["Plano de Contratações Anual", "Parecer Jurídico"],
    buttonText: "COMEÇAR ANÁLISE"
  },
  {
    title: "Fluxo e Assistente Especializado",
    icon: <MessageSquare className="w-6 h-6 text-[#059ad9]" />,
    description: "Inicie o fluxo de compras com um clique, gerando documentos automaticamente e contando com um chat inteligente para suporte em tempo real.",
    items: ["Fluxo de Compras", "Chat Inteligente"],
    buttonText: "FALAR COM A IA"
  },
  {
    title: "Pesquisa de Preços Inteligente",
    icon: <Search className="w-6 h-6 text-[#059ad9]" />,
    description: "Pesquisa de preços inteligente com acesso ao PNCP e mais de 18 milhões de itens, impulsionada por IA para agilizar contratações públicas e gerar relatórios precisos.",
    items: ["Pesquisa de Preços", "Banco de Dados PNCP"],
    buttonText: "PESQUISAR PREÇOS"
  }
];

export function Hero() {
  return (
<main className="bg-[#101c35] text-white font-sans">
      {/* --- SEÇÃO HERO --- */}
      <section className="relative overflow-hidden pt-16 pb-8 md:pt-24 lg:pt-20">
        <div className="container mx-auto px-4 w-[95%] max-w-7xl">
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-2xl relative z-10">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Licitações com a IA Econect <br />
                <span className="text-[#059ad9]">mais agilidade, precisão e transparência</span>
              </h1>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Nossa inteligência artificial automatiza e gera documentos para processos licitatórios, 
                organizando fluxos e simplificando cada etapa. Com isso, desburocratiza a gestão pública, 
                elimina a morosidade e promove mais eficiência.
              </p>

              <div className="pt-4">
                <a href="#contato" className="inline-block bg-gradient-to-r from-[#059ad9] to-[#047db8] text-white font-bold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform">
                  CONTATO
                </a>
              </div>
            </div>

            {/* Card de IA da direita (estilo do print) */}
            <div className="hidden lg:flex justify-center relative">
              <div className="absolute -inset-10 bg-[#059ad9]/10 blur-3xl rounded-full"></div>
              <div className="relative bg-[#162442]/50 border border-white/10 p-12 rounded-3xl backdrop-blur-sm text-center space-y-4 max-w-sm">
                <div className="w-16 h-16 bg-[#059ad9]/20 rounded-full flex items-center justify-center mx-auto border border-[#059ad9]/50">
                  <div className="text-[#059ad9]">🧠</div> {/* Ícone de cérebro/IA */}
                </div>
                <h3 className="text-[#059ad9] font-bold text-xl uppercase tracking-widest">Inteligência Artificial</h3>
                <p className="text-gray-400 text-sm">
                  Revolucione suas licitações com a nossa tecnologia. Automatize e simplifique todas as etapas.
                </p>
              </div>
            </div>
          </article>

          {/* Indicador de "Conheça nossos serviços" */}
          <div className="flex flex-col items-center mt-16 text-gray-500 text-xs uppercase tracking-widest gap-2 animate-bounce">
            <span>Conheça nossos serviços</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </section>

      {/* SEPARADOR DINÂMICO */}
      <SectionSeparator />

      {/* --- SEÇÃO DE SERVIÇOS --- */}
      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-7xl w-[95%]">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#059ad9]">
              Nossos Serviços
            </h2>
            <p className="text-gray-400 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
              Nossa inteligência artificial se adapta ao seu modo de trabalho, aplicando jurisprudência atualizada 
              para gerar documentos personalizados e entregar respostas precisas em segundos, otimizando seu tempo 
              e elevando a eficiência nas tomadas de decisão.
            </p>
          </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-[#162442] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#059ad9]/50 transition-all hover:shadow-2xl hover:shadow-[#059ad9]/5 group"
              >
                <div className="space-y-4">
                  <div className="bg-[#059ad9]/10 w-fit p-3 rounded-lg group-hover:bg-[#059ad9]/20 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-bold text-white text-lg leading-tight">
                    {service.title}
                  </h3>
                  
                  {service.description && (
                    <p className="font-sans text-gray-400 text-xs leading-relaxed">
                      {service.description}
                    </p>
                  )}

                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="font-sans text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-[#059ad9] mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 space-y-4">
                  {service.footer && (
                    <p className="text-[#059ad9] text-[10px] font-bold uppercase tracking-wider">
                      {service.footer}
                    </p>
                  )}
                  <button className="w-full py-3 bg-gradient-to-r from-[#059ad9] to-[#047db8] hover:to-[#059ad9] text-white font-bold text-xs rounded-full transition-all shadow-md">
                    {service.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEPARADOR FINAL (opcional, se quiser fechar a seção) */}
      <SectionSeparator />
    </main>
  );
}