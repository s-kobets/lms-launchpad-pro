import { Button } from "@/components/ui/button";
import { Clock, Users, Star, ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    category: "Development",
    instructor: "Sarah Johnson",
    duration: "42 hours",
    students: "12,459",
    rating: 4.9,
    image: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    level: "Beginner"
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    category: "Data Science",
    instructor: "Michael Chen",
    duration: "36 hours",
    students: "8,234",
    rating: 4.8,
    image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    level: "Intermediate"
  },
  {
    id: 3,
    title: "Leadership & Management Excellence",
    category: "Business",
    instructor: "Emily Rodriguez",
    duration: "18 hours",
    students: "15,672",
    rating: 4.9,
    image: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
    level: "All Levels"
  },
  {
    id: 4,
    title: "UX/UI Design Masterclass",
    category: "Design",
    instructor: "David Kim",
    duration: "28 hours",
    students: "9,845",
    rating: 4.7,
    image: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    level: "Intermediate"
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Popular Courses
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Explore Our Top
              <span className="text-accent"> Courses</span>
            </h2>
          </div>
          <Button variant="outline" className="self-start md:self-auto">
            View All Courses
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              {/* Course Image */}
              <div className={`aspect-video ${course.image} relative`}>
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-card/90 text-foreground text-xs font-medium">
                    {course.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-full bg-accent/90 text-accent-foreground text-xs font-medium">
                    {course.level}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">by {course.instructor}</p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* Rating & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="font-semibold text-foreground">{course.rating}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-accent hover:text-accent">
                    Enroll Now
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
