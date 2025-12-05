import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">80</span>
            </div>
            <span className="text-xl font-bold text-foreground">Level 80</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#segments" className="text-muted-foreground hover:text-foreground transition-colors">
              Для кого
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
              Преимущества
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              Как это работает
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Отзывы
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Войти
            </Button>
            <Button variant="accent" size="sm">
              Попробовать бесплатно
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#segments" className="text-muted-foreground hover:text-foreground transition-colors">
                Для кого
              </a>
              <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
                Преимущества
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                Как это работает
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Отзывы
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start">
                  Войти
                </Button>
                <Button variant="accent">
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
