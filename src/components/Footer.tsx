export const Footer = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Brunswick Boxing",
    "image": "https://brunswickboxing.co.uk/hero-boxing.jpg",
    "description": "Premier professional boxing gym in Twickenham, London. Expert coaches, beginner to competitive training programs.",
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
    ],
    "sameAs": [
      "https://www.facebook.com/brunswickboxing",
      "https://www.instagram.com/brunswickboxing"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <footer className="py-12 bg-secondary/50 border-t border-border" role="contentinfo">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-display text-2xl mb-4">BRUNSWICK BOXING</h3>
              <p className="text-muted-foreground text-sm">Twickenham&apos;s premier boxing gym since 2009</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hours</h4>
              <p className="text-muted-foreground text-sm">
                <time>Mon-Fri: 6am - 10pm</time><br/>
                <time>Sat-Sun: 8am - 8pm</time>
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Location</h4>
              <address className="text-muted-foreground text-sm not-italic">
                Twickenham<br/>London, UK
              </address>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-muted-foreground text-sm">
                <a href="mailto:info@brunswickboxing.co.uk" className="hover:text-primary transition-colors">info@brunswickboxing.co.uk</a><br/>
                <a href="tel:+442012345678" className="hover:text-primary transition-colors">020 1234 5678</a>
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            © 2024 Brunswick Boxing. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};
