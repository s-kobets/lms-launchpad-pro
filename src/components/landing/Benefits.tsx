import { Layers, HardDrive, Users, Smartphone } from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: Layers,
    title: "Создавайте курсы просто",
    description: "Удобный редактор без сложных настроек.",
    benefit: "Запускайте обучение за минуты, без разработчиков."
  },
  {
    number: "02",
    icon: HardDrive,
    title: "Загружайте любые файлы",
    description: "Без ограничений по размеру и количеству.",
    benefit: "Безлимитное хранилище — видео, аудио, материалы."
  },
  {
    number: "03",
    icon: Users,
    title: "Добавляйте людей без лимитов",
    description: "Любое количество студентов и членов команды.",
    benefit: "Масштабируйтесь, не считая пользователей."
  },
  {
    number: "04",
    icon: Smartphone,
    title: "Обучайте в мобильном приложении",
    description: "iOS и Android — скоро!",
    benefit: "Ваши студенты учатся везде, где им удобно."
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Преимущества
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Всё, что нужно для роста
            <span className="text-accent"> вашей школы</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-card rounded-xl p-6 border border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
                  {benefit.number}
                </span>
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm mb-2">{benefit.description}</p>
              <p className="text-sm text-foreground/70 font-medium">{benefit.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
