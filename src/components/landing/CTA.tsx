import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Не важно, с чего вы начинаете —
            <span className="text-accent"> важно, куда вы растёте</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-4">
            Level 80 — единая база для вашего роста.
          </p>
          <p className="text-lg text-muted-foreground mb-10">
            Сегодня — простой запуск. Завтра — ваша собственная образовательная экосистема.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="accent" size="lg" className="group">
              🚀 Попробовать бесплатно
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Calendar className="mr-2 w-4 h-4" />
              Запланировать демо
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
