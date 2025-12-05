import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] animate-pulse-slow" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[100px] animate-pulse-slow delay-300" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Glass card */}
          <div className="glass-strong rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Готовы начать?
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display leading-tight">
              Не важно, с чего вы начинаете —
              <br />
              <span className="text-gradient">важно, куда вы растёте</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-3 max-w-2xl mx-auto">
              Level 80 — единая база для вашего роста.
            </p>
            <p className="text-lg text-muted-foreground/80 mb-10">
              Сегодня — простой запуск. Завтра — ваша собственная образовательная экосистема.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="accent" size="xl" className="group text-lg">
                🚀 Попробовать бесплатно
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="group text-lg">
                <Calendar className="w-5 h-5" />
                Запланировать демо
              </Button>
            </div>

            {/* Bottom decoration */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                Бесплатный старт • Без кредитной карты • Отмена в любое время
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;