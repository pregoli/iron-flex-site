import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Trophy, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";

const Programs = () => {
  const programs = [
    {
      icon: Trophy,
      title: "Junior Program",
      age: "Ages 9-17",
      description: "Our junior program introduces young people to the fundamentals of boxing in a safe, supportive environment. We focus on building discipline, fitness, and confidence while teaching proper technique.",
      features: [
        "Skill development & technique training",
        "Fitness & conditioning programs",
        "Competition preparation for those interested",
        "Character building & discipline"
      ]
    },
    {
      icon: Target,
      title: "Adult Program",
      age: "Ages 18+",
      description: "Whether you're looking to get fit, learn self-defense, or compete at an amateur level, our adult program caters to all abilities and goals. Train with experienced coaches in a motivating atmosphere.",
      features: [
        "Technical boxing instruction",
        "High-intensity fitness training",
        "Sparring sessions (optional)",
        "Amateur competition support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Boxing Programs - Brunswick Boxing | Junior & Adult Classes</title>
        <meta name="description" content="Brunswick Boxing offers programs for juniors (ages 9-17) and adults (18+). Learn boxing fundamentals, get fit, and develop discipline with expert amateur coaches." />
        <link rel="canonical" href="https://www.brunswickboxing.co.uk/programs" />
      </Helmet>

      <Navigation />

      <section className="pt-32 pb-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Our Programs</h1>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Comprehensive amateur boxing programs for all ages and skill levels
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="p-8">
                <program.icon className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-2">{program.title}</h2>
                <p className="text-primary font-semibold mb-4">{program.age}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-2">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg">Join Our Program</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
