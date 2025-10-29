import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Brunswick Boxing Gym Twickenham | Get In Touch</title>
        <meta name="description" content="Contact Brunswick Boxing in Twickenham. Visit us, call 020 1234 5678, or email info@brunswickboxing.co.uk. Get started with boxing today!" />
        <meta name="keywords" content="contact boxing gym, Brunswick Boxing Twickenham, boxing gym location, boxing classes enquiry" />
        <link rel="canonical" href="https://brunswickboxing.co.uk/contact" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-24">
          {/* Header */}
          <section className="py-16 bg-gradient-hero">
            <div className="container mx-auto px-6 text-center">
              <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 text-primary-foreground">
                GET IN TOUCH
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Have questions? We&apos;re here to help you start your boxing journey
              </p>
            </div>
          </section>

          {/* Contact Info & Form */}
          <section className="py-24 container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-3xl mb-6">CONTACT INFORMATION</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-bold mb-1">Location</h3>
                        <address className="text-muted-foreground not-italic">
                          Twickenham<br/>
                          London, UK
                        </address>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-bold mb-1">Phone</h3>
                        <a href="tel:+442012345678" className="text-muted-foreground hover:text-primary transition-colors">
                          020 1234 5678
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-bold mb-1">Email</h3>
                        <a href="mailto:info@brunswickboxing.co.uk" className="text-muted-foreground hover:text-primary transition-colors">
                          info@brunswickboxing.co.uk
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-bold mb-1">Opening Hours</h3>
                        <p className="text-muted-foreground">
                          <time>Mon-Fri: 6am - 10pm</time><br/>
                          <time>Sat-Sun: 8am - 8pm</time>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-card border border-border rounded-lg">
                  <h3 className="font-display text-xl mb-4">Visit Us</h3>
                  <p className="text-muted-foreground mb-4">
                    Drop by anytime during our opening hours for a gym tour. No appointment necessary!
                  </p>
                  <Button className="w-full font-bold">Get Directions</Button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gradient-card border border-border rounded-lg p-8">
                <h2 className="font-display text-3xl mb-6">SEND US A MESSAGE</h2>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="020 1234 5678" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your boxing goals or ask any questions..." 
                      className="mt-2 min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full font-bold text-lg py-6">
                    SEND MESSAGE
                  </Button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
