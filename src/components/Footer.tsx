const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2024 Augusto Ferreira da Silva. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
            <span>•</span>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <span>•</span>
            <a href="#experiencia" className="hover:text-primary transition-colors">Experiência</a>
            <span>•</span>
            <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
