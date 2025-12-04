import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, BookOpen, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--accent)/0.1)_0%,_transparent_50%)]" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6 animate-fade-up">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">#1 Rated Learning Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Transform Your
              <span className="block text-accent">Learning Journey</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Empower your team with world-class courses, expert instructors, and 
              interactive learning experiences. Join 50,000+ learners today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button variant="accent" size="xl">
                Start Learning Free
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero" size="xl">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-2xl md:text-3xl font-bold text-foreground">50K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Active Learners</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <BookOpen className="w-5 h-5 text-accent" />
                  <span className="text-2xl md:text-3xl font-bold text-foreground">500+</span>
                </div>
                <p className="text-sm text-muted-foreground">Expert Courses</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-2xl md:text-3xl font-bold text-foreground">98%</span>
                </div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10">
              <div className="bg-card rounded-2xl shadow-medium p-6 border border-border">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-accent flex items-center justify-center shadow-accent animate-float">
                      <Play className="w-8 h-8 text-accent-foreground ml-1" />
                    </div>
                    <p className="text-muted-foreground">Interactive Learning Experience</p>
                  </div>
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-medium p-4 border border-border animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 text-lg">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Course Completed!</p>
                      <p className="text-xs text-muted-foreground">Web Development</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-medium p-4 border border-border animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-accent/20 border-2 border-card" />
                      <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card" />
                      <div className="w-8 h-8 rounded-full bg-green-200 border-2 border-card" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">+2.5k</p>
                      <p className="text-xs text-muted-foreground">Joined this week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
