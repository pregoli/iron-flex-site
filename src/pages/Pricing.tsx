import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const Pricing = () => {
  const plans = [
    { 
      name: "Basic", 
      price: "45", 
      features: [
        "Boxing gym access",
        "Group boxing classes",
        "Heavy bags & speed bags",
        "Locker room"
      ]
    },
    { 
      name: "Pro", 
      price: "89", 
      features: [
        "Everything in Basic",
        "2 private boxing sessions/month",
        "Sparring access",
        "Boxing gloves included"
      ], 
      popular: true 
    },
    { 
      name: "Elite", 
      price: "179", 
      features: [
        "Everything in Pro",
        "Unlimited private coaching",
        "Fight preparation & cornering",
        "Competition registration support"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Boxing Gym Membership Prices | Brunswick Boxing Twickenham</title>
        <meta name="description" content="Affordable boxing gym membership plans in Twickenham. From £45/month. Basic, Pro, and Elite packages available. Book your free class today!" />
        <meta name="keywords" content="boxing gym prices, boxing membership Twickenham, boxing gym cost, affordable boxing classes" />
        <link rel="canonical" href="https://brunswickboxing.co.uk/pricing" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-24">
          {/* Header */}
          <section className="py-16 bg-gradient-hero">
            <div className="container mx-auto px-6 text-center">
              <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 text-primary-foreground">
                MEMBERSHIP PLANS
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Invest in yourself today - flexible plans for every boxer
              </p>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="py-24 container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, i) => (
                <Card 
                  key={i} 
                  className={`p-8 bg-gradient-card border-border hover:shadow-card transition-all animate-fade-in ${plan.popular ? 'border-primary shadow-glow scale-105' : ''}`} 
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {plan.popular && (
                    <div className="bg-gradient-hero text-primary-foreground text-xs font-bold px-3 py-1 rounded-full w-fit mb-4" role="status">
                      MOST POPULAR
                    </div>
                  )}
                  <h2 className="font-display text-3xl mb-2">{plan.name}</h2>
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
                  <Button 
                    className={`w-full font-bold ${plan.popular ? 'bg-gradient-hero' : ''}`}
                    aria-label={`Get started with ${plan.name} plan for £${plan.price} per month`}
                  >
                    GET STARTED
                  </Button>
                </Card>
              ))}
            </div>
          </section>

          {/* Free Trial CTA */}
          <section className="py-24 bg-secondary/50">
            <div className="container mx-auto px-6 text-center">
              <div className="text-6xl mb-6">🥊</div>
              <h2 className="font-display text-4xl md:text-5xl mb-6">Try Before You Commit</h2>
              <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
                Not sure which plan is right for you? Book a free trial class and experience Brunswick Boxing
              </p>
              <Button size="lg" className="text-lg px-8 py-6 font-bold bg-gradient-hero">
                BOOK FREE CLASS
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Pricing;
