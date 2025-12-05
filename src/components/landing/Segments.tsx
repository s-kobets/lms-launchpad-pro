import { Button } from "@/components/ui/button";
import { GraduationCap, Settings, Building2, ArrowRight } from "lucide-react";

const segments = [
  {
    icon: GraduationCap,
    title: "Маленькие школы",
    description: "Запустите школу за пару часов — без программистов и лишних подписок.",
    benefit: "Из хаоса ссылок → в систему, где всё под контролем.",
    cta: "Начать сейчас",
    color: "from-emerald-500/20 to-emerald-500/5"
  },
  {
    icon: Settings,
    title: "Средние школы",
    description: "Платформа, которая подстраивается под ваш флоу, а не наоборот.",
    benefit: "Гибкие API, кастомные интерфейсы, интеграции — всё, чтобы вы росли без ограничений.",
    cta: "Создать систему под себя",
    color: "from-blue-500/20 to-blue-500/5"
  },
  {
    icon: Building2,
    title: "Крупные школы и продюсеры",
    description: "Собственная образовательная экосистема под вашим контролем.",
    benefit: "On-premise, безопасность, масштаб — инфраструктура enterprise-уровня.",
    cta: "Узнать об on-premise",
    color: "from-purple-500/20 to-purple-500/5"
  }
];

const Segments = () => {
  return (
    <section id="segments" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Для кого
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Решения под ваш уровень
            <span className="text-accent"> и амбиции</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <div
              key={segment.title}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${segment.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <segment.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{segment.title}</h3>
                <p className="text-muted-foreground mb-4">{segment.description}</p>
                <p className="text-sm text-foreground/80 mb-6 font-medium">{segment.benefit}</p>
                
                <Button variant="ghost" className="group/btn p-0 h-auto text-accent hover:text-accent">
                  {segment.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;
