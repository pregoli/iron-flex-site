import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";

const Pricing = () => {
  const pricingOptions = [
    {
      title: "Drop-In Session",
      price: "£5",
      period: "per session",
      description: "Perfect for trying out the club or occasional training",
      features: [
        "Access to all group sessions",
        "Use of club equipment",
        "Expert coaching included",
        "No commitment required"
      ]
    },
    {
      title: "Monthly Pass",
      price: "£40",
      period: "per month",
      description: "Best value for regular training and serious progress",
      features: [
        "Unlimited group sessions",
        "Full equipment access",
        "Priority class booking",
        "Members-only events",
        "Progress tracking"
      ],
      popular: true
    },
    {
      title: "1:1 Personal Training",
      price: "From £30",
      period: "per hour",
      description: "Individual attention for accelerated improvement",
      features: [
        "One-on-one coaching",
        "Customized training plan",
        "Flexible scheduling",
        "Personalized feedback",
        "Goal-focused sessions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pricing - Brunswick Boxing | Affordable Amateur Boxing Memberships</title>
        <meta name="description" content="Brunswick Boxing pricing: £5 drop-in sessions, £40/month unlimited training, or personal training from £30/hour. Quality amateur boxing coaching at affordable rates." />
        <link rel="canonical" href="https://www.brunswickboxing.co.uk/pricing" />
      </Helmet>

      <Navigation />

      <section className="pt-32 pb-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Membership Pricing</h1>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Flexible pricing options to suit your training goals and schedule
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingOptions.map((option, index) => (
              <Card 
                key={index} 
                className={`p-8 relative ${option.popular ? 'border-primary shadow-lg' : ''}`}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{option.price}</span>
                  <span className="text-muted-foreground ml-2">{option.period}</span>
                </div>
                <p className="text-muted-foreground mb-6">{option.description}</p>
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block">
                  <Button className="w-full" variant={option.popular ? "default" : "outline"}>
                    Get Started
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              All prices are for our registered amateur boxing club. Contact us to discuss which option is right for you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
