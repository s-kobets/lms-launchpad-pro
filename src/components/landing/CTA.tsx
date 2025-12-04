import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Unlimited access to 500+ courses",
  "Personalized learning paths",
  "Certificates upon completion",
  "24/7 expert support"
];

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden gradient-hero p-8 md:p-16">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Accelerate Your
                <span className="text-accent"> Learning?</span>
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Join thousands of professionals who are transforming their careers with LearnHub. 
                Start your free trial today — no credit card required.
              </p>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-primary-foreground/90">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="xl">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Talk to Sales
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-foreground mb-2">14 Days</div>
                  <div className="text-xl text-accent font-semibold mb-4">Free Trial</div>
                  <p className="text-primary-foreground/70 mb-6">
                    Full access to all features. Cancel anytime.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-primary-foreground/5 rounded-xl p-4">
                      <div className="text-2xl font-bold text-primary-foreground">500+</div>
                      <div className="text-sm text-primary-foreground/60">Courses</div>
                    </div>
                    <div className="bg-primary-foreground/5 rounded-xl p-4">
                      <div className="text-2xl font-bold text-primary-foreground">50+</div>
                      <div className="text-sm text-primary-foreground/60">Instructors</div>
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

export default CTA;
