import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import coachPud from "@/assets/coach-pud.png";
import coachJerry from "@/assets/coach-jerry.png";

const Coaches = () => {
  const coaches = [
    {
      name: "Pud",
      role: "Head Coach",
      image: coachPud,
      experience: "At the club for 35 years, coaching for 15 years and head coach for the last 8 years. Produced a number of champions and continues to develop the next generation of boxing talent."
    },
    {
      name: "Gerry",
      role: "Head Junior Coach",
      image: coachJerry,
      experience: "At the club for 5 years and Head Junior Coach for the last 2 years. Specializes in youth development and creating a safe, encouraging environment for young boxers."
    },
    {
      name: "Paul",
      role: "Senior Coach",
      image: null,
      experience: "Coach for 25 years, member of the club for 30 years. A well-known and respected coach around the boxing community with extensive experience in amateur boxing."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Our Coaches - Brunswick Boxing | Expert Amateur Boxing Trainers</title>
        <meta name="description" content="Meet Brunswick Boxing's expert coaches: Pud (Head Coach, 15 years), Gerry (Head Junior Coach), and Paul (25 years experience). Respected trainers in the amateur boxing community." />
        <link rel="canonical" href="https://www.brunswickboxing.co.uk/coaches" />
      </Helmet>

      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">BRUNSWICK BOXING</Link>
          <div className="hidden md:flex gap-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/programs" className="hover:text-primary transition-colors">Programs</Link>
            <Link to="/coaches" className="text-primary">Coaches</Link>
            <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Our Coaches</h1>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Learn from experienced coaches dedicated to your development
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coaches.map((coach, index) => (
              <Card key={index} className="p-6 text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  {coach.image ? (
                    <AvatarImage src={coach.image} alt={coach.name} />
                  ) : (
                    <AvatarFallback>
                      <Users className="w-16 h-16" />
                    </AvatarFallback>
                  )}
                </Avatar>
                <h3 className="text-2xl font-bold mb-1">{coach.name}</h3>
                <p className="text-primary font-semibold mb-4">{coach.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {coach.experience}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg">Train With Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coaches;
