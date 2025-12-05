import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass-strong py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl gradient-primary flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <span className="text-primary-foreground font-bold text-lg font-display">80</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </div>
            <span className="text-xl font-bold text-foreground font-display">Level 80</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {['Для кого', 'Преимущества', 'Как это работает', 'Отзывы'].map((item, i) => (
              <a 
                key={item}
                href={`#${['segments', 'benefits', 'how-it-works', 'testimonials'][i]}`} 
                className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Войти
            </Button>
            <Button variant="accent" size="sm" className="group">
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              Попробовать бесплатно
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-up">
            <div className="flex flex-col gap-2 glass rounded-2xl p-4">
              {['Для кого', 'Преимущества', 'Как это работает', 'Отзывы'].map((item, i) => (
                <a 
                  key={item}
                  href={`#${['segments', 'benefits', 'how-it-works', 'testimonials'][i]}`}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
                <Button variant="ghost">Войти</Button>
                <Button variant="accent">
                  <Sparkles className="w-4 h-4" />
                  Попробовать бесплатно
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;