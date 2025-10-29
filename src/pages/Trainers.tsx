import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Trainers = () => {
  const trainers = [
    { 
      name: "Mike Rodriguez", 
      role: "Head Boxing Coach", 
      exp: "Ex-Pro Boxer, 22-3 record",
      bio: "Former professional boxer with over 15 years coaching experience. Specializes in technical development and fight preparation.",
      certifications: ["AIBA Certified Coach", "First Aid Certified"]
    },
    { 
      name: "Sarah Chen", 
      role: "Boxing Technique Specialist", 
      exp: "Olympic Boxing Coach",
      bio: "Coached multiple Olympic athletes. Expert in defensive techniques and counter-punching strategies.",
      certifications: ["Olympic Level Certification", "Sports Science Degree"]
    },
    { 
      name: "Marcus Johnson", 
      role: "Boxing Fitness Coach", 
      exp: "Former Golden Gloves Champion",
      bio: "Combines boxing with high-intensity fitness training. Specializes in conditioning and strength development.",
      certifications: ["Personal Training Certified", "Nutrition Specialist"]
    },
    { 
      name: "Elena Volkov", 
      role: "Youth Boxing Coach", 
      exp: "Amateur Boxing Champion",
      bio: "Passionate about developing young talent. Creates a safe and encouraging environment for beginners.",
      certifications: ["Youth Coaching Certified", "Child Safety Certified"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Expert Boxing Coaches & Trainers | Brunswick Boxing Twickenham</title>
        <meta name="description" content="Meet our certified boxing coaches at Brunswick Boxing. Professional fighters and Olympic-level trainers dedicated to your success." />
        <meta name="keywords" content="boxing coaches, boxing trainers Twickenham, professional boxing coach, Olympic boxing trainer" />
        <link rel="canonical" href="https://brunswickboxing.co.uk/trainers" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-24">
          {/* Header */}
          <section className="py-16 bg-gradient-hero">
            <div className="container mx-auto px-6 text-center">
              <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 text-primary-foreground">
                BOXING COACHES
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Certified boxing trainers with professional fight experience and championship credentials
              </p>
            </div>
          </section>

          {/* Trainers Grid */}
          <section className="py-24 container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {trainers.map((trainer, i) => (
                <article 
                  key={i} 
                  className="p-8 bg-gradient-card border border-border hover:border-primary transition-all group animate-scale-in rounded-lg"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="aspect-square bg-muted rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform" role="img" aria-label={`${trainer.name} - ${trainer.role}`}>
                    <Users className="w-24 h-24 text-primary" aria-hidden="true" />
                  </div>
                  <h2 className="font-display text-3xl mb-2">{trainer.name}</h2>
                  <p className="text-primary text-sm font-semibold mb-1">{trainer.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{trainer.exp}</p>
                  <p className="text-sm mb-4">{trainer.bio}</p>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-muted-foreground">Certifications:</p>
                    {trainer.certifications.map((cert, idx) => (
                      <p key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        {cert}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-secondary/50">
            <div className="container mx-auto px-6 text-center">
              <h2 className="font-display text-4xl md:text-5xl mb-6">Train with the Best</h2>
              <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
                Our coaches are committed to helping you achieve your boxing goals
              </p>
              <Button asChild size="lg" className="text-lg px-8 py-6 font-bold">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Trainers;
