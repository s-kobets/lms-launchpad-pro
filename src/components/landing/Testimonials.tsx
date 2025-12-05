import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "За месяц перевели 300 студентов с Telegram в Level 80 и перестали терять доступы. Теперь всё под контролем.",
    author: "LinguaGo",
    role: "Школа английского языка",
    highlight: "300 студентов за месяц",
    avatar: "🌍",
    rating: 5,
  },
  {
    id: 2,
    content: "Запустила свой курс за выходные и заработала первую сотню продаж. Платформа реально простая!",
    author: "Мария М.",
    role: "Коуч",
    highlight: "100 продаж за выходные",
    avatar: "✨",
    rating: 5,
  },
  {
    id: 3,
    content: "Развернули on-premise-инфраструктуру и объединили 5 школ под одним API. Enterprise-решение, которое работает.",
    author: "EduCorp",
    role: "Продюсерская команда",
    highlight: "5 школ в одной системе",
    avatar: "🏢",
    rating: 5,
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary opacity-90" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary-foreground)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary-foreground)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/5 blur-2xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-white/5 blur-2xl animate-float delay-200" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white/90 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Истории роста
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
            Реальные результаты
            <span className="text-accent"> наших пользователей</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-accent/50 mb-6" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Highlight Badge */}
              <div className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">
                {testimonial.highlight}
              </div>

              <p className="text-white/90 mb-8 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-white text-lg">{testimonial.author}</p>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
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