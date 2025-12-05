import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 gradient-mesh opacity-60" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/20 blur-[100px] animate-pulse-slow delay-200" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-primary/15 blur-[80px] animate-float" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-8 animate-blur-in">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-muted-foreground">Образовательная платформа нового поколения</span>
            <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs">2025</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] font-display animate-blur-in delay-100">
            Level 80 — инфраструктура,
            <br />
            <span className="text-gradient">которая растёт вместе</span>
            <br />
            с вашей школой
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-3 animate-blur-in delay-200 max-w-3xl mx-auto">
            От первого курса до собственной образовательной экосистемы.
          </p>
          <p className="text-lg text-muted-foreground/80 mb-10 animate-blur-in delay-300">
            Простая для старта • Гибкая для роста • Надёжная для масштаба
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-blur-in delay-400">
            <Button variant="accent" size="lg" className="group text-base">
              Попробовать бесплатно
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg" className="group text-base">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Посмотреть примеры
            </Button>
          </div>

          {/* Growth Visualization */}
          <div className="mt-20 animate-blur-in delay-500">
            <div className="relative max-w-2xl mx-auto">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-full -translate-y-1/2" />
              
              <div className="flex items-end justify-between relative">
                {/* Stage 1 - Small */}
                <div className="flex flex-col items-center gap-3 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl glass flex items-center justify-center group-hover:scale-110 transition-all duration-500 hover:glow-primary">
                    <span className="text-2xl md:text-3xl">🌱</span>
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground font-medium">Старт</span>
                </div>

                {/* Stage 2 - Medium */}
                <div className="flex flex-col items-center gap-3 group">
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl glass flex items-center justify-center group-hover:scale-110 transition-all duration-500 hover:glow-accent">
                    <span className="text-3xl md:text-4xl">🚀</span>
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground font-medium">Рост</span>
                </div>

                {/* Stage 3 - Large */}
                <div className="flex flex-col items-center gap-3 group">
                  <div className="w-24 h-24 md:w-36 md:h-36 rounded-2xl gradient-primary flex items-center justify-center group-hover:scale-105 transition-all duration-500 animate-glow">
                    <span className="text-4xl md:text-5xl">🏛️</span>
                  </div>
                  <span className="text-xs md:text-sm text-foreground font-semibold">Экосистема</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border/30 animate-blur-in delay-500">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {[
                { value: '500+', label: 'школ' },
                { value: '50K+', label: 'студентов' },
                { value: '10K+', label: 'курсов' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-foreground font-display">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;