import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Users, Trophy, Menu, X, Clock, MapPin, Phone, Mail, AlertCircle } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet";
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Brunswick Boxing",
    "image": "https://brunswickboxing.co.uk/hero-boxing.jpg",
    "description": "35 years of boxing excellence in Twickenham. Fully insured & affiliated to England Boxing with qualified coaches. Ages 9-90 welcome.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Twickenham",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "postalCode": "TW1",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.4479",
      "longitude": "-0.3260"
    },
    "telephone": "+44-20-1234-5678",
    "email": "info@brunswickboxing.co.uk",
    "priceRange": "££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Brunswick Boxing - Professional Boxing Gym in Twickenham, London</title>
        <meta name="description" content="35 years of boxing excellence in Twickenham. England Boxing affiliated gym. Junior to senior champions. Ages 9-90 welcome. Join today!" />
        <meta name="keywords" content="boxing gym Twickenham, Brunswick ABC, England Boxing, amateur boxing, boxing training, boxing club Twickenham" />
        <link rel="canonical" href="https://brunswickboxing.co.uk/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" role="navigation" aria-label="Main navigation">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <h2 className="font-display text-2xl font-bold cursor-pointer" onClick={() => scrollToSection('hero')}>BRUNSWICK BOXING</h2>
              
              {/* Desktop Menu */}
              <ul className="hidden md:flex items-center space-x-8">
                <li><button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-medium">About</button></li>
                <li><button onClick={() => scrollToSection('programs')} className="text-foreground hover:text-primary transition-colors font-medium">Programs</button></li>
                <li><button onClick={() => scrollToSection('trainers')} className="text-foreground hover:text-primary transition-colors font-medium">Coaches</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-primary transition-colors font-medium">Pricing</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors font-medium">Contact</button></li>
                <li><Button onClick={() => scrollToSection('contact')} size="sm">Get Started</Button></li>
              </ul>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 space-y-3 border-t border-border">
                <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 hover:bg-accent rounded font-medium">About</button>
                <button onClick={() => scrollToSection('programs')} className="block w-full text-left px-4 py-2 hover:bg-accent rounded font-medium">Programs</button>
                <button onClick={() => scrollToSection('trainers')} className="block w-full text-left px-4 py-2 hover:bg-accent rounded font-medium">Coaches</button>
                <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-4 py-2 hover:bg-accent rounded font-medium">Pricing</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 hover:bg-accent rounded font-medium">Contact</button>
                <Button onClick={() => scrollToSection('contact')} className="w-full">Get Started</Button>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <header id="hero" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
            role="img"
            aria-label="Boxing training session at Brunswick Boxing gym"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
            <Badge className="mb-4 px-6 py-2 bg-primary/20 border-2 border-primary text-primary text-sm tracking-wider">
              🥊 35 YEARS OF BOXING EXCELLENCE
            </Badge>
            <h1 className="font-display text-7xl md:text-9xl font-bold mb-6 tracking-tight">
              BRUNSWICK BOXING
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto font-medium">
              Twickenham ABC - England Boxing Affiliated. Junior to Senior Champions. Ages 9-90 Welcome.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" onClick={() => scrollToSection('contact')} className="bg-gradient-hero text-lg px-8 py-6 font-bold hover:shadow-glow transition-all">
                GET STARTED
              </Button>
              <Button size="lg" variant="secondary" onClick={() => scrollToSection('about')} className="text-lg px-8 py-6 font-bold">
                LEARN MORE
              </Button>
            </div>
          </div>
        </header>

        {/* Stats Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Years Running", value: "35+" },
                { label: "Expert Coaches", value: "12" },
                { label: "Championships Won", value: "150+" },
                { label: "Age Range", value: "9-90" }
              ].map((stat, i) => (
                <div key={i} className="text-center animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="font-display text-5xl md:text-6xl text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-5xl md:text-6xl text-center mb-4">ABOUT US</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">England Boxing Affiliated Boxing Club</p>
            
            <Card className="p-8 md:p-12 bg-gradient-card border-border">
              <div className="space-y-6 text-lg">
                <p>
                  <strong>Twickenham Brunswick ABC</strong> has been running for <strong>35 years</strong> with a wide range of success from junior to senior ABA amateur champions. We are fully insured & affiliated to <strong>England Boxing</strong> with qualified England coaches.
                </p>
                
                <p>
                  We welcome all ages from <strong>9 to 90</strong>. Any ability welcome with a friendly atmosphere. Fully equipped gym so if you are looking to box or just get fitter, come down and see how you like it!
                </p>

                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div className="space-y-2">
                      <p className="font-bold text-primary">IMPORTANT INFORMATION</p>
                      <p className="text-sm">
                        THE CAR PARK IS FOR DROP OFF OR PICK UP ONLY - PLEASE DO NOT PARK
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-4">
                    Please be aware that Brunswick ABC is a charity run by volunteers. The coaches will do their best to help you train during the sessions but might not always get time as the gym can become busy.
                  </p>
                  <p className="font-semibold">
                    If you need closer attention, one-hour personal training sessions are available for <span className="text-primary">£30</span>. Please email for details.
                  </p>
                </div>

                <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-lg">
                  <p className="font-bold text-destructive mb-2">📅 UPDATE</p>
                  <p className="text-sm">
                    Junior sessions are closed until Monday 8th September.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-24 bg-secondary/50">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-5xl md:text-6xl text-center mb-4">BOXING PROGRAMS</h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">From beginner to championship level</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Dumbbell,
                  title: "Beginner Boxing",
                  description: "Learn proper stance, jab, cross, and hooks. Master boxing fundamentals with certified England Boxing coaches.",
                  features: ["Boxing stance & footwork", "Basic punch combinations", "Speed bag & heavy bag work"]
                },
                {
                  icon: Users,
                  title: "Boxing Fitness",
                  description: "High-intensity boxing workouts. Learn to throw punches like a pro while getting in peak shape.",
                  features: ["Cardio boxing rounds", "Pad work with trainers", "Group training sessions"]
                },
                {
                  icon: Trophy,
                  title: "Competitive Boxing",
                  description: "Train for amateur boxing competitions. Championship-level coaching from experienced England Boxing coaches.",
                  features: ["Ring sparring sessions", "Competition preparation", "ABA championship training"]
                }
              ].map((program, i) => (
                <Card key={i} className="p-8 bg-gradient-card border-border hover:border-primary transition-all hover:shadow-card group animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                  <program.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" aria-hidden="true" />
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
                  <Button variant="secondary" onClick={() => scrollToSection('contact')} className="w-full font-bold">Get Started</Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trainers Section */}
        <section id="trainers" className="py-24 container mx-auto px-6">
          <h2 className="font-display text-5xl md:text-6xl text-center mb-4">OUR COACHES</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Qualified England Boxing coaches with championship experience</p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Mike Rodriguez", role: "Head Boxing Coach", exp: "Ex-Pro Boxer, 22-3 record" },
              { name: "Sarah Chen", role: "Technique Specialist", exp: "England Boxing Coach" },
              { name: "Marcus Johnson", role: "Fitness Coach", exp: "Former ABA Champion" },
              { name: "Elena Volkov", role: "Youth Coach", exp: "Amateur Champion" }
            ].map((trainer, i) => (
              <Card key={i} className="p-6 bg-gradient-card border-border hover:border-primary transition-all group animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform" role="img" aria-label={`${trainer.name} - ${trainer.role}`}>
                  <Users className="w-16 h-16 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl mb-1">{trainer.name}</h3>
                <p className="text-primary text-sm font-semibold mb-1">{trainer.role}</p>
                <p className="text-muted-foreground text-sm">{trainer.exp}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-secondary/50">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-5xl md:text-6xl text-center mb-4">MEMBERSHIP PLANS</h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">Invest in yourself today</p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: "Basic", price: "45", features: ["Boxing gym access", "Group boxing classes", "Heavy bags & speed bags", "Locker room"] },
                { name: "Pro", price: "89", features: ["Everything in Basic", "2 private sessions/month", "Sparring access", "Boxing gloves included"], popular: true },
                { name: "Elite", price: "179", features: ["Everything in Pro", "Unlimited coaching", "Fight preparation", "Competition support"] }
              ].map((plan, i) => (
                <Card key={i} className={`p-8 bg-gradient-card border-border hover:shadow-card transition-all animate-fade-in ${plan.popular ? 'border-primary shadow-glow scale-105' : ''}`} style={{ animationDelay: `${i * 0.15}s` }}>
                  {plan.popular && (
                    <Badge className="bg-gradient-hero text-primary-foreground text-xs font-bold mb-4">
                      MOST POPULAR
                    </Badge>
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
                  <Button onClick={() => scrollToSection('contact')} className={`w-full font-bold ${plan.popular ? 'bg-gradient-hero' : ''}`}>
                    GET STARTED
                  </Button>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="inline-block p-6 bg-gradient-card border-border">
                <p className="text-lg mb-2">
                  <strong>Personal Training Sessions</strong>
                </p>
                <p className="text-muted-foreground mb-4">
                  One-hour personal training with our qualified coaches
                </p>
                <p className="font-display text-4xl text-primary">£30<span className="text-lg text-muted-foreground">/hour</span></p>
                <Button onClick={() => scrollToSection('contact')} variant="secondary" className="mt-4 font-bold">
                  Email for Details
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-hero">
          <div className="container mx-auto px-6 text-center">
            <div className="text-6xl mb-6">🥊</div>
            <h2 className="font-display text-5xl md:text-6xl mb-6 text-primary-foreground">STEP INTO THE RING</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
              Join 35 years of boxing tradition at Twickenham Brunswick ABC
            </p>
            <Button size="lg" variant="secondary" onClick={() => scrollToSection('contact')} className="text-lg px-8 py-6 font-bold">
              GET STARTED TODAY
            </Button>
          </div>
        </section>

        {/* Contact/Footer Section */}
        <footer id="contact" className="py-12 bg-secondary/50 border-t border-border" role="contentinfo">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-display text-2xl mb-4">BRUNSWICK BOXING</h3>
                <p className="text-muted-foreground text-sm">Twickenham ABC - 35 years of boxing excellence since 1989</p>
              </div>
              <div>
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Hours
                </h4>
                <p className="text-muted-foreground text-sm">
                  <time>Mon-Fri: 6am - 10pm</time><br/>
                  <time>Sat-Sun: 8am - 8pm</time>
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Location
                </h4>
                <address className="text-muted-foreground text-sm not-italic">
                  Twickenham<br/>London, UK
                </address>
              </div>
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <p className="text-muted-foreground text-sm space-y-2">
                  <a href="mailto:info@brunswickboxing.co.uk" className="hover:text-primary transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    info@brunswickboxing.co.uk
                  </a>
                  <a href="tel:+442012345678" className="hover:text-primary transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    020 1234 5678
                  </a>
                </p>
              </div>
            </div>
            <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
              <p>© 2024 Brunswick Boxing. All rights reserved. Registered Charity.</p>
              <p className="mt-2">Affiliated to England Boxing</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
