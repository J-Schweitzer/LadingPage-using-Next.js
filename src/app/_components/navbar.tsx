export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#101c35]/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-7xl">
        
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/logo-econect.png" 
            alt="Econect Logo" 
            className="h-10 w-auto" 
          />
        </div>

        {/* Links Centrais / Direita */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-medium text-white/90">
            <a href="#inicio" className="hover:text-[#059ad9] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#059ad9]">
              Início
            </a>
            <a href="#sobre" className="hover:text-[#059ad9] transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-[#059ad9] transition-colors">Contato</a>
          </div>

          {/* Botões de Ação */}
          <div className="flex items-center gap-4 ml-4">
            <button className="px-6 py-2 text-sm font-bold text-white border border-white/20 rounded-lg hover:bg-white/5 transition-all">
              Entrar
            </button>
            <button className="px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-[#059ad9] to-[#047db8] rounded-lg shadow-[0_0_15px_rgba(5,154,217,0.4)] hover:scale-105 transition-all">
              Teste Grátis
            </button>
          </div>
        </div>

        {/* Menu Mobile (Hambúrguer) - Opcional */}
        <div className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </nav>
  );
}