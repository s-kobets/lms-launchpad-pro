import { Upload, Settings, UserPlus, TrendingUp } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Upload,
    title: "Создайте курс",
    subtitle: "и загрузите материалы",
    description: "Добавьте видео, тексты, задания — всё в одном месте.",
  },
  {
    number: 2,
    icon: Settings,
    title: "Настройте продажи",
    subtitle: "и доступ",
    description: "Определите цены, условия доступа и способы оплаты.",
  },
  {
    number: 3,
    icon: UserPlus,
    title: "Пригласите студентов",
    subtitle: "",
    description: "Отправьте ссылки или интегрируйте с вашими каналами.",
  },
  {
    number: 4,
    icon: TrendingUp,
    title: "Следите за результатами",
    subtitle: "и растите",
    description: "Аналитика, отчёты и инсайты для роста вашей школы.",
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Как это работает
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display">
            Из идей — в запущенный
            <span className="text-gradient-accent"> образовательный продукт</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-1">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-shimmer bg-[length:200%_100%]" style={{ opacity: 0.5 }} />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step Circle */}
                <div className="relative inline-flex mb-8">
                  <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:rounded-3xl">
                    <step.icon className="w-9 h-9 text-primary-foreground" />
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full glass-strong flex items-center justify-center font-bold text-sm text-foreground font-display border border-primary/30">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-1 font-display">
                  {step.title}
                </h3>
                {step.subtitle && (
                  <h4 className="text-lg font-semibold text-primary mb-3 font-display">
                    {step.subtitle}
                  </h4>
                )}
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;