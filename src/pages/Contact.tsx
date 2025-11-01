import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";

const Contact = () => {
  const schedule = [
    { day: "Monday", time: "6:30 PM - 8:30 PM", activity: "Juniors & Adults" },
    { day: "Tuesday", time: "6:30 PM - 8:30 PM", activity: "SPARRING - Selected boxers only" },
    { day: "Wednesday", time: "6:30 PM - 8:30 PM", activity: "Juniors & Adults" },
    { day: "Thursday", time: "6:30 PM - 8:30 PM", activity: "SPARRING - Selected boxers only" },
    { day: "Friday", time: "6:30 PM - 8:30 PM", activity: "Juniors & Adults" },
    { day: "Saturday", time: "10:00 AM - 12:00 PM", activity: "SPARRING - Selected boxers only" },
    { day: "Sunday", time: "10:00 AM - 12:00 PM", activity: "SPARRING - Selected boxers only" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us - Brunswick Boxing | Get in Touch with Our Twickenham Boxing Club</title>
        <meta name="description" content="Contact Brunswick Boxing in Twickenham. Call 07786 903306 or email forddavy@gmail.com. Located at Harlequin Sports Ground, Langhorn Drive, TW2 7SH." />
        <link rel="canonical" href="https://www.brunswickboxing.co.uk/contact" />
      </Helmet>

      <Navigation />

      <section className="pt-32 pb-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Get In Touch</h1>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Ready to start your boxing journey? Contact us today
          </p>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form 
                action="https://formsubmit.co/forddavy@gmail.com" 
                method="POST"
                className="space-y-4"
              >
                <div>
                  <Input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    required 
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    name="phone"
                    placeholder="Your Phone" 
                  />
                </div>
                <div>
                  <Textarea 
                    name="message"
                    placeholder="Your Message" 
                    rows={6} 
                    required 
                  />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:forddavy@gmail.com" className="text-muted-foreground hover:text-primary">
                        forddavy@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:07786903306" className="text-muted-foreground hover:text-primary">
                        07786 903306
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Instagram className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Instagram</p>
                      <a 
                        href="https://www.instagram.com/brunswickboxingclub" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        @brunswickboxingclub
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Weekly Schedule
                </h3>
                <div className="space-y-2">
                  {schedule.map((item, index) => (
                    <div key={index} className="flex justify-between items-start text-sm border-b pb-2 last:border-0">
                      <span className="font-semibold">{item.day}</span>
                      <div className="text-right">
                        <div className="text-muted-foreground">{item.time}</div>
                        <div className="text-xs text-muted-foreground">{item.activity}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Location
                </h3>
                <p className="text-muted-foreground mb-4">
                  Harlequin Sports Ground<br />
                  Langhorn Drive<br />
                  Twickenham<br />
                  TW2 7SH
                </p>
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.1234567890!2d-0.3456789!3d51.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI3JzI0LjQiTiAwwrAyMCc0NC40Ilc!5e0!3m2!1sen!2suk!4v1234567890"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  🅿️ Free parking available on site
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
