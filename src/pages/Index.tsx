import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dumbbell, Users, Trophy, Menu, X } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-boxing.jpg";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="font-display text-2xl font-bold">BRUNSWICK BOXING</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('programs')} className="text-foreground hover:text-primary transition-colors font-medium">Programs</button>
              <button onClick={() => scrollToSection('trainers')} className="text-foreground hover:text-primary transition-colors font-medium">Trainers</button>
              <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-primary transition-colors font-medium">Pricing</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors font-medium">Contact</button>
              <Button onClick={() => scrollToSection('pricing')} size="sm">Book Free Class</Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-border">
              <button onClick={() => scrollToSection('programs')} className="block w-full text-left px-4 py-2 hover:bg-accent rounded font-medium">Programs</button>
              <button onClick={() => scrollToSection('trainers')} className="block w-full text-left px-4 py-2 hover:bg-accent rounded font-medium">Trainers</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-4 py-2 hover:bg-accent rounded font-medium">Pricing</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 hover:bg-accent rounded font-medium">Contact</button>
              <Button onClick={() => scrollToSection('pricing')} className="w-full">Book Free Class</Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
          <div className="inline-block mb-4 px-6 py-2 bg-primary/20 border-2 border-primary rounded-full">
            <span className="font-bold text-primary text-sm tracking-wider">🥊 PROFESSIONAL BOXING GYM</span>
          </div>
          <h1 className="font-display text-7xl md:text-9xl font-bold mb-6 tracking-tight">
            BRUNSWICK BOXING
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto font-medium">
            Master the sweet science. Train with professional boxing coaches. Step into the ring.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gradient-hero text-lg px-8 py-6 font-bold hover:shadow-glow transition-all">
              BOOK FREE BOXING CLASS
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-bold">
              VIEW BOXING PROGRAMS
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
      <section id="programs" className="py-24 container mx-auto px-6">
        <h2 className="font-display text-5xl md:text-6xl text-center mb-4">BOXING PROGRAMS</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">From beginner to championship level</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Dumbbell,
              title: "Beginner Boxing",
              description: "Learn proper stance, jab, cross, and hooks. Master boxing fundamentals with certified coaches.",
              features: ["Boxing stance & footwork", "Basic punch combinations", "Speed bag & heavy bag work"]
            },
            {
              icon: Users,
              title: "Boxing Fitness Classes",
              description: "High-intensity boxing workouts. Learn to throw punches like a pro while getting in peak shape.",
              features: ["Cardio boxing rounds", "Pad work with trainers", "Group sparring drills"]
            },
            {
              icon: Trophy,
              title: "Competitive Boxing",
              description: "Train for amateur or professional boxing matches. Championship-level coaching and sparring.",
              features: ["Ring sparring sessions", "Fight camp preparation", "Competition strategy"]
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
      <section id="trainers" className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-5xl md:text-6xl text-center mb-4">BOXING COACHES</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Certified boxing trainers with professional fight experience</p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Mike Rodriguez", role: "Head Boxing Coach", exp: "Ex-Pro Boxer, 22-3 record" },
              { name: "Sarah Chen", role: "Boxing Technique Specialist", exp: "Olympic Boxing Coach" },
              { name: "Marcus Johnson", role: "Boxing Fitness Coach", exp: "Former Golden Gloves Champion" },
              { name: "Elena Volkov", role: "Youth Boxing Coach", exp: "Amateur Boxing Champion" }
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
      <section id="pricing" className="py-24 container mx-auto px-6">
        <h2 className="font-display text-5xl md:text-6xl text-center mb-4">MEMBERSHIP PLANS</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">Invest in yourself today</p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: "Basic", price: "45", features: ["Boxing gym access", "Group boxing classes", "Heavy bags & speed bags", "Locker room"] },
            { name: "Pro", price: "89", features: ["Everything in Basic", "2 private boxing sessions/month", "Sparring access", "Boxing gloves included"], popular: true },
            { name: "Elite", price: "179", features: ["Everything in Pro", "Unlimited private coaching", "Fight preparation & cornering", "Competition registration support"] }
          ].map((plan, i) => (
            <Card key={i} className={`p-8 bg-gradient-card border-border hover:shadow-card transition-all animate-fade-in ${plan.popular ? 'border-primary shadow-glow scale-105' : ''}`} style={{ animationDelay: `${i * 0.15}s` }}>
              {plan.popular && (
                <div className="bg-gradient-hero text-primary-foreground text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className="font-display text-3xl mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="font-display text-5xl text-primary">£{plan.price}</span>
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
          <div className="text-6xl mb-6">🥊</div>
          <h2 className="font-display text-5xl md:text-6xl mb-6 text-primary-foreground">STEP INTO THE RING</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Start your boxing journey at Brunswick Boxing. First boxing class completely free.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-bold">
            BOOK FREE BOXING CLASS
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-secondary/50 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-display text-2xl mb-4">BRUNSWICK BOXING</h3>
              <p className="text-muted-foreground text-sm">Twickenham's premier boxing gym since 2009</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hours</h4>
              <p className="text-muted-foreground text-sm">Mon-Fri: 6am - 10pm<br/>Sat-Sun: 8am - 8pm</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Location</h4>
              <p className="text-muted-foreground text-sm">Twickenham<br/>London, UK</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-muted-foreground text-sm">info@brunswickboxing.co.uk<br/>020 1234 5678</p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            © 2024 Brunswick Boxing. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;