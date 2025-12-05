import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Animated Growth Illustration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10">
          <div className="absolute bottom-0 left-1/4 w-16 h-24 bg-accent/40 rounded-t-lg animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-40 bg-accent/60 rounded-t-lg animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="absolute bottom-0 right-1/4 w-24 h-56 bg-accent/80 rounded-t-lg animate-pulse" style={{ animationDelay: '0.6s' }} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Образовательная платформа нового поколения
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Level 80 — инфраструктура, которая растёт
            <span className="text-accent"> вместе с вашей школой</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            От первого курса до собственной образовательной экосистемы.
          </p>
          <p className="text-lg text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: '0.25s' }}>
            Простая для старта, гибкая для роста, надёжная для масштаба.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="accent" size="lg" className="group">
              Попробовать бесплатно
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <BookOpen className="mr-2 w-4 h-4" />
              Посмотреть примеры
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm text-muted-foreground mb-4">Уже доверяют</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <span className="text-lg font-semibold text-foreground">500+ школ</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-lg font-semibold text-foreground">50,000+ студентов</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-lg font-semibold text-foreground">10,000+ курсов</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
