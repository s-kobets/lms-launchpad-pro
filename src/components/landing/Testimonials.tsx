import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "За месяц перевели 300 студентов с Telegram в Level 80 и перестали терять доступы. Теперь всё под контролем.",
    author: "LinguaGo",
    role: "Школа английского языка",
    highlight: "300 студентов за месяц"
  },
  {
    id: 2,
    content: "Запустила свой курс за выходные и заработала первую сотню продаж. Платформа реально простая!",
    author: "Мария М.",
    role: "Коуч",
    highlight: "100 продаж за выходные"
  },
  {
    id: 3,
    content: "Развернули on-premise-инфраструктуру и объединили 5 школ под одним API. Enterprise-решение, которое работает.",
    author: "EduCorp",
    role: "Продюсерская команда",
    highlight: "5 школ в одной системе"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            Истории роста
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Реальные результаты
            <span className="text-accent"> наших пользователей</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-accent mb-4 opacity-50" />
              
              {/* Highlight Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium mb-4">
                {testimonial.highlight}
              </div>

              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-primary-foreground/10">
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">{testimonial.author}</p>
                  <p className="text-sm text-primary-foreground/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
