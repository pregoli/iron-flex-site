import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Users, Trophy, Menu, X, Clock, MapPin, Phone, Mail, AlertCircle } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import heroImage from "@/assets/hero-boxing.jpg";
import coachPud from "@/assets/coach-pud.png";
import coachJerry from "@/assets/coach-jerry.png";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    window.location.hash = id;
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
      "streetAddress": "Clarendon Crescent",
      "addressLocality": "Twickenham",
      "addressRegion": "Richmond upon Thames",
      "postalCode": "TW2 5LN",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.4479",
      "longitude": "-0.3260"
    },
    "telephone": "+44-7786-903306",
    "email": "forddavy@gmail.com",
    "priceRange": "££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Wednesday"],
        "opens": "17:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday"],
        "opens": "18:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/twickenham_brunswick_abc"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Brunswick Boxing - Amateur Boxing Club in Twickenham, London</title>
        <meta name="description" content="35 years of boxing excellence in Twickenham. England Boxing affiliated amateur club. Junior to senior champions. Ages 9-90 welcome. Join today!" />
        <meta name="keywords" content="amateur boxing club Twickenham, Brunswick ABC, England Boxing, amateur boxing, boxing training, boxing club Twickenham" />
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
                <li>
                  <a 
                    href="https://www.instagram.com/twickenham_brunswick_abc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </li>
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
              Twickenham ABC - England Boxing Affiliated. Junior (9-17) & Adult (18+) Programs.
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
            <p className="text-center text-muted-foreground mb-12 text-lg">England Boxing Affiliated Championship Boxing Club</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 bg-gradient-card border-border">
                <h3 className="font-display text-2xl mb-4">Our Heritage</h3>
                <p className="text-muted-foreground mb-4">
                  Since 1989, Twickenham Brunswick ABC has been at the heart of the local boxing community, 
                  producing champions from junior to senior levels in ABA amateur competitions.
                </p>
                <p className="text-muted-foreground">
                  We are proud to be fully insured and affiliated with <strong className="text-foreground">England Boxing</strong>, 
                  with all our coaches holding official England Boxing qualifications.
                </p>
              </Card>

              <Card className="p-8 bg-gradient-card border-border">
                <h3 className="font-display text-2xl mb-4">Our Community</h3>
                <p className="text-muted-foreground mb-4">
                  As a registered charity run entirely by dedicated volunteers, we welcome boxers of all ages 
                  (9 to 90) and abilities in a supportive, friendly atmosphere.
                </p>
                <p className="text-muted-foreground">
                  Whether you&apos;re looking to compete or simply improve your fitness, our fully equipped gym 
                  provides everything you need to achieve your goals.
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-muted/30 border-border">
              <h3 className="font-display text-2xl mb-6 text-center">Training Options</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Group Sessions
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Train alongside fellow boxers in our group sessions. As a volunteer-run charity, 
                    our coaches work hard to support everyone, though busy periods may require patience.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    Personal Training
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Need focused, one-on-one attention? Private coaching sessions available at £30 per hour.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => scrollToSection('contact')}>
                    Email for Details
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-24 bg-secondary/50">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-5xl md:text-6xl text-center mb-4">BOXING PROGRAMS</h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">Programs for all ages - Juniors (9-17) & Adults (18+)</p>
            
            {/* Junior Programs */}
            <div className="mb-16">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Badge className="bg-gradient-hero text-lg px-4 py-2">JUNIOR PROGRAMS (Ages 9-17)</Badge>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    icon: Users,
                    title: "Junior Boxing",
                    description: "Dedicated sessions for young boxers aged 9-17. Learn fundamentals in a safe, supervised environment.",
                    features: ["Age-appropriate training", "Fundamentals & technique", "Fitness & discipline", "Mon & Wed 5pm-6pm"]
                  },
                  {
                    icon: Trophy,
                    title: "Junior Competition",
                    description: "For juniors ready to compete. Train for amateur boxing competitions with championship-level coaching.",
                    features: ["Competition preparation", "Advanced techniques", "Ring sparring", "England Boxing competitions"]
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

            {/* Adult Programs */}
            <div>
              <div className="flex items-center justify-center gap-3 mb-8">
                <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">ADULT PROGRAMS (Ages 18+)</Badge>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Dumbbell,
                    title: "Beginner Boxing",
                    description: "New to boxing? Learn proper stance, jab, cross, and hooks. Master fundamentals with certified coaches.",
                    features: ["Boxing stance & footwork", "Basic punch combinations", "Speed bag & heavy bag work"]
                  },
                  {
                    icon: Users,
                    title: "Boxing Fitness",
                    description: "High-intensity boxing workouts. Get in peak shape while learning proper technique.",
                    features: ["Cardio boxing rounds", "Pad work with trainers", "Mon/Wed/Fri 6pm-8pm"]
                  },
                  {
                    icon: Trophy,
                    title: "Competitive Boxing",
                    description: "Train for amateur boxing competitions with championship-level coaching.",
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
          </div>
        </section>

        {/* Trainers Section */}
        <section id="trainers" className="py-24 container mx-auto px-6">
          <h2 className="font-display text-5xl md:text-6xl text-center mb-4">OUR COACHES</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Qualified England Boxing coaches with championship experience</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                name: "Pud", 
                role: "Head Coach", 
                exp: "35 years at club • 15 years coaching • 8 years head coach • Multiple champions trained", 
                image: coachPud 
              },
              { 
                name: "Gerry", 
                role: "Head Junior Coach", 
                exp: "5 years at club • 2 years Head Junior Coach", 
                image: coachJerry 
              },
              { 
                name: "Paul", 
                role: "Senior Coach", 
                exp: "30 years club member • 25 years coaching • Well-respected in boxing community", 
                image: null 
              }
            ].map((trainer, i) => (
              <Card key={i} className="p-6 bg-gradient-card border-border hover:border-primary transition-all group animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden group-hover:scale-105 transition-transform flex items-center justify-center">
                  {trainer.image ? (
                    <img 
                      src={trainer.image} 
                      alt={`${trainer.name} - ${trainer.role}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted">
                      <Users className="w-24 h-24 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <h3 className="font-display text-2xl mb-1">{trainer.name}</h3>
                <p className="text-primary text-sm font-semibold mb-2">{trainer.role}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{trainer.exp}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-secondary/50">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-5xl md:text-6xl text-center mb-4">PRICING</h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">Affordable boxing for everyone</p>
            
            <div className="max-w-5xl mx-auto">
              {/* Group Training Options */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="p-8 bg-gradient-card border-border hover:shadow-card transition-all">
                  <div className="text-center mb-6">
                    <h3 className="font-display text-3xl mb-2">Drop-In Session</h3>
                    <p className="text-muted-foreground text-sm">Pay as you go</p>
                  </div>
                  <div className="text-center mb-6">
                    <span className="font-display text-6xl text-primary">£5</span>
                    <p className="text-muted-foreground mt-2">per 2-hour session</p>
                  </div>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span>2-hour training session</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Monday, Wednesday, Friday (6pm - 8pm)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Full gym access during session</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span>No commitment required</span>
                    </div>
                  </div>
                  <Button onClick={() => scrollToSection('contact')} variant="secondary" className="w-full font-bold">
                    Come Train
                  </Button>
                </Card>

                <Card className="p-8 bg-gradient-card border-primary shadow-glow scale-105 relative overflow-hidden">
                  <Badge className="absolute top-4 right-4 bg-gradient-hero text-primary-foreground">
                    BEST VALUE
                  </Badge>
                  <div className="text-center mb-6">
                    <h3 className="font-display text-3xl mb-2">Monthly Pass</h3>
                    <p className="text-muted-foreground text-sm">Unlimited training</p>
                  </div>
                  <div className="text-center mb-6">
                    <span className="font-display text-6xl text-primary">£30</span>
                    <p className="text-muted-foreground mt-2">per month</p>
                  </div>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span><strong>Unlimited sessions</strong> for the month</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span>3 sessions per week (Mon/Wed/Fri 6pm-8pm)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span>2 hours per session</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Save over 40% vs drop-in</span>
                    </div>
                  </div>
                  <Button onClick={() => scrollToSection('contact')} className="w-full font-bold bg-gradient-hero">
                    Get Monthly Pass
                  </Button>
                </Card>
              </div>

              {/* Personal Training */}
              <div className="text-center mb-8">
                <h3 className="font-display text-3xl mb-2">Personal Training</h3>
                <p className="text-muted-foreground">One-on-one coaching for focused development</p>
              </div>

              <Card className="p-8 bg-gradient-card border-border max-w-md mx-auto">
                <div className="flex items-center gap-3 mb-6 justify-center">
                  <Trophy className="w-10 h-10 text-primary" />
                  <div className="text-center">
                    <h4 className="font-display text-2xl">1-on-1 Coaching</h4>
                    <p className="text-sm text-muted-foreground">Private sessions with qualified coaches</p>
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <span className="text-muted-foreground text-sm">Starting from</span>
                  <div>
                    <span className="font-display text-5xl text-primary">£30</span>
                    <span className="text-muted-foreground">/hour</span>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>1-hour private session</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Personalized training plan</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Technique & competition focus</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Flexible scheduling</span>
                  </div>
                </div>
                <Button onClick={() => scrollToSection('contact')} variant="outline" className="w-full font-bold">
                  Book Session
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-hero">
          <div className="container mx-auto px-6 text-center">
            <div className="text-6xl mb-6">🥊</div>
            <h2 className="font-display text-5xl md:text-6xl mb-6 text-primary-foreground">READY TO START?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
              Fill out the form below and we&apos;ll get back to you as soon as possible
            </p>
            <Button size="lg" variant="secondary" onClick={() => scrollToSection('contact')} className="text-lg px-8 py-6 font-bold">
              CONTACT US NOW
            </Button>
          </div>
        </section>

        {/* Contact/Footer Section */}
        <footer id="contact" className="py-16 bg-secondary/50 border-t border-border" role="contentinfo">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-4xl text-center mb-4">GET IN TOUCH</h2>
            <p className="text-center text-muted-foreground mb-12">Ready to start your boxing journey? Contact us today</p>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Contact Form */}
                <Card className="p-8 bg-gradient-card border-border">
                  <h3 className="font-display text-2xl mb-6">Send us a Message</h3>
                  <form action="https://formsubmit.co/forddavy@gmail.com" method="POST" className="space-y-4">
                    {/* FormSubmit Configuration */}
                    <input type="hidden" name="_subject" value="New enquiry from Brunswick Boxing website" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        maxLength={100}
                        className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        maxLength={255}
                        className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        maxLength={20}
                        className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="020 1234 5678"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        maxLength={1000}
                        rows={4}
                        className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        placeholder="Tell us about your boxing goals or ask any questions..."
                      />
                    </div>
                    
                    <Button type="submit" className="w-full font-bold text-lg py-6 bg-gradient-hero">
                      SEND MESSAGE
                    </Button>
                  </form>
                </Card>

                {/* Contact Info */}
                <div className="space-y-6">
                  <Card className="p-6 bg-gradient-card border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-6 h-6 text-primary" />
                      <h3 className="font-bold text-lg">Weekly Schedule</h3>
                    </div>
                    <div className="text-sm space-y-4">
                      <div>
                        <p className="font-semibold text-base mb-2">Monday</p>
                        <div className="pl-3 space-y-1">
                          <p className="text-muted-foreground">
                            <Badge variant="outline" className="mr-2 text-xs">JUNIORS 9-17</Badge>
                            5pm-6pm
                          </p>
                          <p className="text-muted-foreground">
                            <Badge variant="outline" className="mr-2 text-xs">ADULTS 18+</Badge>
                            6pm-8pm
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-base">Tuesday</p>
                        <p className="text-muted-foreground pl-3">
                          <Badge variant="outline" className="mr-2 text-xs">SPARRING</Badge>
                          Selected boxers only
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-base mb-2">Wednesday</p>
                        <div className="pl-3 space-y-1">
                          <p className="text-muted-foreground">
                            <Badge variant="outline" className="mr-2 text-xs">JUNIORS 9-17</Badge>
                            5pm-6pm
                          </p>
                          <p className="text-muted-foreground">
                            <Badge variant="outline" className="mr-2 text-xs">ADULTS 18+</Badge>
                            6pm-8pm
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-base">Thursday</p>
                        <p className="text-muted-foreground pl-3">
                          <Badge variant="outline" className="mr-2 text-xs">SPARRING</Badge>
                          Selected boxers only
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-base mb-2">Friday</p>
                        <div className="pl-3">
                          <p className="text-muted-foreground">
                            <Badge variant="outline" className="mr-2 text-xs">ADULTS 18+</Badge>
                            6pm-8pm
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-base">Saturday & Sunday</p>
                        <p className="text-muted-foreground pl-3">
                          <Badge variant="outline" className="mr-2 text-xs">SPARRING</Badge>
                          Selected boxers only
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-gradient-card border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-6 h-6 text-primary" />
                      <h3 className="font-bold text-lg">Location</h3>
                    </div>
                    <address className="text-sm not-italic mb-4">
                      Clarendon Crescent<br/>
                      Richmond upon Thames<br/>
                      Twickenham, TW2 5LN<br/>
                      United Kingdom
                    </address>
                    
                    {/* Map Embed */}
                    <div className="mb-4 rounded-lg overflow-hidden border border-border">
                      <iframe
                        src="https://maps.google.com/maps?q=Clarendon+Crescent,+Richmond+upon+Thames,+Twickenham,+TW2+5LN,+United+Kingdom&output=embed"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Brunswick Boxing Location - Clarendon Crescent, Twickenham"
                      />
                    </div>
                    
                    <div className="bg-destructive/10 border-l-4 border-destructive p-3 rounded">
                      <p className="text-xs font-bold text-destructive mb-1">⚠️ PARKING NOTICE</p>
                      <p className="text-xs">Car park is for drop-off/pick-up ONLY. Please do not park.</p>
                    </div>
                  </Card>

                  <Card className="p-6 bg-gradient-card border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <Mail className="w-6 h-6 text-primary" />
                      <h3 className="font-bold text-lg">Contact Us</h3>
                    </div>
                    <div className="text-sm space-y-3">
                      <a href="mailto:forddavy@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        forddavy@gmail.com
                      </a>
                      <a href="tel:+447786903306" className="hover:text-primary transition-colors flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        07786 903306
                      </a>
                      <a 
                        href="https://www.instagram.com/twickenham_brunswick_abc" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        @twickenham_brunswick_abc
                      </a>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <div className="text-center space-y-3">
                <h3 className="font-display text-2xl mb-3">BRUNSWICK BOXING</h3>
                
                {/* Social Media */}
                <div className="flex justify-center">
                  <a 
                    href="https://www.instagram.com/twickenham_brunswick_abc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent transition-colors group"
                    aria-label="Follow us on Instagram"
                  >
                    <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors font-medium">@twickenham_brunswick_abc</span>
                  </a>
                </div>

                <p className="text-sm text-muted-foreground">Twickenham ABC • Established 1989</p>
                <p className="text-sm text-muted-foreground">Registered Charity • England Boxing Affiliated</p>
                <p className="text-xs text-muted-foreground mt-4">© 2024 Brunswick Boxing. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
