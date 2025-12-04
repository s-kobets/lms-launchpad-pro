import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "LearnHub transformed how our team approaches professional development. The courses are incredibly well-structured and the analytics help us track ROI on training.",
    author: "Jennifer Martinez",
    role: "HR Director",
    company: "TechCorp Inc.",
    rating: 5
  },
  {
    id: 2,
    content: "I completed the Data Science bootcamp and landed my dream job within 2 months. The instructors are world-class and the community support is unmatched.",
    author: "Alex Thompson",
    role: "Data Scientist",
    company: "DataFlow",
    rating: 5
  },
  {
    id: 3,
    content: "As a manager, I appreciate how LearnHub makes it easy to assign courses and track my team's progress. The enterprise features are exactly what we needed.",
    author: "Robert Chen",
    role: "Engineering Manager",
    company: "InnovateLabs",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by
            <span className="text-accent"> 50,000+ </span>
            Learners
          </h2>
          <p className="text-lg text-primary-foreground/70">
            See what our students and organizations have to say about their learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-accent mb-4 opacity-50" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
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
                    {testimonial.role} at {testimonial.company}
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
