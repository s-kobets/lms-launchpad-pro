import { Layers, HardDrive, Users, Smartphone, Check } from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: Layers,
    title: "Создавайте курсы просто",
    description: "Удобный редактор без сложных настроек.",
    benefit: "Запускайте обучение за минуты, без разработчиков.",
    features: ["Drag & drop", "Шаблоны", "Автосохранение"],
  },
  {
    number: "02",
    icon: HardDrive,
    title: "Загружайте любые файлы",
    description: "Без ограничений по размеру и количеству.",
    benefit: "Безлимитное хранилище — видео, аудио, материалы.",
    features: ["Любой формат", "CDN доставка", "∞ объём"],
  },
  {
    number: "03",
    icon: Users,
    title: "Добавляйте людей без лимитов",
    description: "Любое количество студентов и членов команды.",
    benefit: "Масштабируйтесь, не считая пользователей.",
    features: ["∞ студентов", "∞ команда", "Роли"],
  },
  {
    number: "04",
    icon: Smartphone,
    title: "Мобильное приложение",
    description: "iOS и Android — скоро!",
    benefit: "Ваши студенты учатся везде, где им удобно.",
    features: ["iOS", "Android", "Офлайн"],
    coming: true,
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Преимущества
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display">
            Всё, что нужно для роста
            <span className="text-gradient"> вашей школы</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative glass rounded-3xl p-8 hover:glass-strong transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Coming Soon Badge */}
              {benefit.coming && (
                <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold">
                  Скоро
                </div>
              )}

              <div className="flex items-start gap-6">
                {/* Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <span className="text-7xl font-bold text-muted/30 font-display">
                      {benefit.number}
                    </span>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <benefit.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-4">
                  <h3 className="text-xl font-bold text-foreground mb-2 font-display">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-3">{benefit.description}</p>
                  <p className="text-sm text-foreground/80 font-medium mb-4">{benefit.benefit}</p>
                  
                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2">
                    {benefit.features.map((feature) => (
                      <span 
                        key={feature}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground"
                      >
                        <Check className="w-3 h-3 text-accent" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;