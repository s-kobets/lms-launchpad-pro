import { Upload, Settings, UserPlus, TrendingUp } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Upload,
    title: "Создайте курс и загрузите материалы",
    description: "Добавьте видео, тексты, задания — всё в одном месте."
  },
  {
    number: 2,
    icon: Settings,
    title: "Настройте продажи и доступ",
    description: "Определите цены, условия доступа и способы оплаты."
  },
  {
    number: 3,
    icon: UserPlus,
    title: "Пригласите студентов",
    description: "Отправьте ссылки или интегрируйте с вашими каналами."
  },
  {
    number: 4,
    icon: TrendingUp,
    title: "Следите за результатами и растите",
    description: "Аналитика, отчёты и инсайты для роста вашей школы."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Как это работает
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Из идей — в запущенный
            <span className="text-accent"> образовательный продукт</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step Circle */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <step.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 md:top-0 md:right-1/3 w-6 h-6 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center z-20">
                  {step.number}
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
