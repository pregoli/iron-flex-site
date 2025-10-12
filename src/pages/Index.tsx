import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dumbbell, Users, Trophy, Clock } from "lucide-react";
import heroImage from "@/assets/hero-boxing.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
          <h1 className="font-display text-7xl md:text-9xl font-bold mb-6 tracking-tight">
            IRONFIST
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto font-medium">
            Train like a champion. Fight like a warrior. Become unstoppable.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gradient-hero text-lg px-8 py-6 font-bold hover:shadow-glow transition-all">
              START YOUR JOURNEY
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-bold">
              VIEW CLASSES
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Members", value: "500+" },
              { label: "Expert Trainers", value: "12" },
              { label: "Championships Won", value: "150+" },
              { label: "Years Experience", value: "15" }
            ].map((stat, i) => (
              <div key={i} className="text-center animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="font-display text-5xl md:text-6xl text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="font-display text-5xl md:text-6xl text-center mb-4">TRAINING PROGRAMS</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">Choose your path to greatness</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Dumbbell,
              title: "Beginner Boxing",
              description: "Master the fundamentals with expert guidance. Perfect for those starting their boxing journey.",
              features: ["Basic techniques", "Footwork training", "Conditioning"]
            },
            {
              icon: Users,
              title: "Group Classes",
              description: "High-energy sessions that push your limits. Train alongside motivated athletes.",
              features: ["Cardio boxing", "Sparring practice", "Team motivation"]
            },
            {
              icon: Trophy,
              title: "Elite Training",
              description: "Professional coaching for competitive fighters. Take your skills to championship level.",
              features: ["1-on-1 coaching", "Fight preparation", "Advanced techniques"]
            }
          ].map((program, i) => (
            <Card key={i} className="p-8 bg-gradient-card border-border hover:border-primary transition-all hover:shadow-card group animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
              <program.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-3xl mb-4">{program.title}</h3>
              <p className="text-muted-foreground mb-6">{program.description}</p>
              <ul className="space-y-2 mb-6">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="secondary" className="w-full font-bold">Learn More</Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-5xl md:text-6xl text-center mb-4">MEET OUR TRAINERS</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Learn from the best in the business</p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Mike Rodriguez", role: "Head Coach", exp: "15 years" },
              { name: "Sarah Chen", role: "Boxing Specialist", exp: "10 years" },
              { name: "Marcus Johnson", role: "Strength Coach", exp: "12 years" },
              { name: "Elena Volkov", role: "Cardio Expert", exp: "8 years" }
            ].map((trainer, i) => (
              <Card key={i} className="p-6 bg-gradient-card border-border hover:border-primary transition-all group animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Users className="w-16 h-16 text-primary" />
                </div>
                <h3 className="font-display text-2xl mb-1">{trainer.name}</h3>
                <p className="text-primary text-sm font-semibold mb-1">{trainer.role}</p>
                <p className="text-muted-foreground text-sm">{trainer.exp} experience</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="font-display text-5xl md:text-6xl text-center mb-4">MEMBERSHIP PLANS</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">Invest in yourself today</p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: "Basic", price: "49", features: ["Gym access", "Group classes", "Locker room"] },
            { name: "Pro", price: "99", features: ["Everything in Basic", "Personal training (2x/month)", "Nutrition guide", "Priority booking"], popular: true },
            { name: "Elite", price: "199", features: ["Everything in Pro", "Unlimited personal training", "Fight prep coaching", "Recovery sessions"] }
          ].map((plan, i) => (
            <Card key={i} className={`p-8 bg-gradient-card border-border hover:shadow-card transition-all animate-fade-in ${plan.popular ? 'border-primary shadow-glow scale-105' : ''}`} style={{ animationDelay: `${i * 0.15}s` }}>
              {plan.popular && (
                <div className="bg-gradient-hero text-primary-foreground text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className="font-display text-3xl mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="font-display text-5xl text-primary">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className={`w-full font-bold ${plan.popular ? 'bg-gradient-hero' : ''}`}>
                GET STARTED
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <Clock className="w-16 h-16 mx-auto mb-6" />
          <h2 className="font-display text-5xl md:text-6xl mb-6 text-primary-foreground">READY TO FIGHT?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Join IronFist today and transform your body, mind, and spirit. First week is on us.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-bold">
            CLAIM FREE TRIAL
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary/50 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-display text-2xl mb-4">IRONFIST</h3>
              <p className="text-muted-foreground text-sm">Building champions since 2009</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hours</h4>
              <p className="text-muted-foreground text-sm">Mon-Fri: 6am - 10pm<br/>Sat-Sun: 8am - 8pm</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Location</h4>
              <p className="text-muted-foreground text-sm">123 Fight Street<br/>Brooklyn, NY 11201</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-muted-foreground text-sm">info@ironfist.gym<br/>(555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            © 2024 IronFist Boxing Gym. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;