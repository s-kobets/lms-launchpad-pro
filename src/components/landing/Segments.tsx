import { Button } from "@/components/ui/button";
import { GraduationCap, Settings, Building2, ArrowRight, Sparkles, Puzzle, Shield } from "lucide-react";

const segments = [
  {
    icon: GraduationCap,
    badge: Sparkles,
    title: "Маленькие школы",
    description: "Запустите школу за пару часов — без программистов и лишних подписок.",
    benefit: "Из хаоса ссылок → в систему, где всё под контролем.",
    cta: "Начать сейчас",
    gradient: "from-emerald-500 to-teal-500",
    glowColor: "hover:shadow-emerald-500/25",
  },
  {
    icon: Settings,
    badge: Puzzle,
    title: "Средние школы",
    description: "Платформа, которая подстраивается под ваш флоу, а не наоборот.",
    benefit: "Гибкие API, кастомные интерфейсы, интеграции — всё для роста.",
    cta: "Создать систему под себя",
    gradient: "from-violet-500 to-purple-500",
    glowColor: "hover:shadow-violet-500/25",
    featured: true,
  },
  {
    icon: Building2,
    badge: Shield,
    title: "Крупные школы",
    description: "Собственная образовательная экосистема под вашим контролем.",
    benefit: "On-premise, безопасность, масштаб — enterprise-уровень.",
    cta: "Узнать об on-premise",
    gradient: "from-amber-500 to-orange-500",
    glowColor: "hover:shadow-amber-500/25",
  }
];

const Segments = () => {
  return (
    <section id="segments" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-accent/10 blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Для кого
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display">
            Решения под ваш уровень
            <span className="text-gradient"> и амбиции</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {segments.map((segment, index) => (
            <div
              key={segment.title}
              className={`group relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                segment.featured 
                  ? 'glass-strong lg:scale-105 lg:-my-4' 
                  : 'glass hover:glass-strong'
              } ${segment.glowColor} hover:shadow-2xl`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured Badge */}
              {segment.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-xs font-semibold text-primary-foreground">
                  Популярный выбор
                </div>
              )}
              
              {/* Icon */}
              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${segment.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <segment.icon className="w-8 h-8 text-white" />
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-card flex items-center justify-center border border-border">
                  <segment.badge className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3 font-display">{segment.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{segment.description}</p>
              
              {/* Benefit highlight */}
              <div className="p-4 rounded-xl bg-muted/50 mb-6">
                <p className="text-sm text-foreground/90 font-medium">{segment.benefit}</p>
              </div>
              
              <Button variant="ghost" className="group/btn p-0 h-auto text-foreground hover:text-primary font-semibold">
                {segment.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;