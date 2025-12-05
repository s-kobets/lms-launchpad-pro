const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">80</span>
            </div>
            <span className="text-xl font-bold">Level 80</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              База знаний
            </a>
            <span className="text-primary-foreground/30">•</span>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Контакты
            </a>
            <span className="text-primary-foreground/30">•</span>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Политика
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/50 text-center md:text-right">
            Level 80 — построено разработчиками для создателей знаний
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
