import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Award, 
  Video, 
  MessageSquare,
  Zap,
  Shield
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Rich Course Library",
    description: "Access 500+ expertly crafted courses across multiple disciplines, from technical skills to leadership."
  },
  {
    icon: Video,
    title: "HD Video Lessons",
    description: "Learn with crystal-clear video content, downloadable resources, and interactive assignments."
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Join study groups, participate in discussions, and learn together with peers worldwide."
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Track your learning journey with detailed analytics, completion rates, and skill assessments."
  },
  {
    icon: Award,
    title: "Certified Credentials",
    description: "Earn industry-recognized certificates that boost your resume and career prospects."
  },
  {
    icon: MessageSquare,
    title: "Expert Support",
    description: "Get help when you need it with 24/7 instructor support and community forums."
  },
  {
    icon: Zap,
    title: "AI-Powered Learning",
    description: "Personalized learning paths powered by AI that adapt to your pace and preferences."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with SSO, role-based access, and compliance certifications."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Why Choose LearnHub
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to
            <span className="text-accent"> Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform combines cutting-edge technology with proven learning methodologies 
            to deliver an unmatched educational experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-xl p-6 border border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
