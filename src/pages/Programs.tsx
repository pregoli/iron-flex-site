import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dumbbell, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Programs = () => {
  const programs = [
    {
      icon: Dumbbell,
      title: "Beginner Boxing",
      description: "Learn proper stance, jab, cross, and hooks. Master boxing fundamentals with certified coaches.",
      features: ["Boxing stance & footwork", "Basic punch combinations", "Speed bag & heavy bag work"],
      duration: "8-week program",
      level: "Beginner"
    },
    {
      icon: Users,
      title: "Boxing Fitness Classes",
      description: "High-intensity boxing workouts. Learn to throw punches like a pro while getting in peak shape.",
      features: ["Cardio boxing rounds", "Pad work with trainers", "Group sparring drills"],
      duration: "Ongoing classes",
      level: "All levels"
    },
    {
      icon: Trophy,
      title: "Competitive Boxing",
      description: "Train for amateur or professional boxing matches. Championship-level coaching and sparring.",
      features: ["Ring sparring sessions", "Fight camp preparation", "Competition strategy"],
      duration: "12+ weeks",
      level: "Advanced"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Boxing Programs - Beginner to Pro Training | Brunswick Boxing</title>
        <meta name="description" content="Explore boxing programs at Brunswick Boxing Twickenham. From beginner fundamentals to competitive training. Expert coaches, proven results." />
        <meta name="keywords" content="boxing programs, beginner boxing, boxing fitness, competitive boxing, boxing training Twickenham" />
        <link rel="canonical" href="https://brunswickboxing.co.uk/programs" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-24">
          {/* Header */}
          <section className="py-16 bg-gradient-hero">
            <div className="container mx-auto px-6 text-center">
              <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 text-primary-foreground">
                BOXING PROGRAMS
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                From beginner to championship level - find the perfect program for your boxing journey
              </p>
            </div>
          </section>

          {/* Programs Grid */}
          <section className="py-24 container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {programs.map((program, i) => (
                <article 
                  key={i} 
                  className="p-8 bg-gradient-card border border-border hover:border-primary transition-all hover:shadow-card group animate-fade-in rounded-lg"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <program.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <div className="flex gap-2 mb-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary font-bold">{program.level}</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-bold">{program.duration}</span>
                  </div>
                  <h2 className="font-display text-3xl mb-4">{program.title}</h2>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <h3 className="font-bold mb-3">What You&apos;ll Learn:</h3>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full font-bold">
                    <Link to="/pricing">Enroll Now</Link>
                  </Button>
                </article>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-secondary/50">
            <div className="container mx-auto px-6 text-center">
              <h2 className="font-display text-4xl md:text-5xl mb-6">Ready to Start Your Boxing Journey?</h2>
              <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
                Book your free trial class today and experience professional boxing training
              </p>
              <Button asChild size="lg" className="text-lg px-8 py-6 font-bold">
                <Link to="/pricing">Book Free Class</Link>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Programs;
