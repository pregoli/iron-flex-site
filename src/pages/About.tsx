import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Users, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Us - Brunswick Boxing | Twickenham Amateur Boxing Club</title>
        <meta name="description" content="Learn about Brunswick Boxing's 35+ year heritage in Twickenham. We're a registered amateur boxing club fostering champions and community since the 1980s." />
        <link rel="canonical" href="https://www.brunswickboxing.co.uk/about" />
      </Helmet>

      <Navigation />

      <section className="pt-32 pb-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About Brunswick Boxing</h1>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            A registered amateur boxing club with over 35 years of heritage in Twickenham
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Heritage</h2>
              <p className="text-muted-foreground leading-relaxed">
                Established in the heart of Twickenham, Brunswick Boxing has been shaping champions and fostering community for over three decades. We're a registered amateur boxing club committed to excellence in training and personal development.
              </p>
            </Card>

            <Card className="p-8">
              <Dumbbell className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Training Options</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Group Sessions</h3>
                  <p className="text-muted-foreground text-sm">
                    Train alongside fellow boxers in our dynamic group classes, suitable for all skill levels from beginners to competitive fighters.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Personal Training</h3>
                  <p className="text-muted-foreground text-sm">
                    Get one-on-one attention from our experienced coaches with personalized training plans tailored to your goals.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg">Get Started Today</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
