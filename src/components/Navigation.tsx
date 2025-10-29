import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-display text-2xl font-bold hover:text-primary transition-colors">
            BRUNSWICK BOXING
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link 
                to="/programs" 
                className={`font-medium transition-colors ${isActive('/programs') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link 
                to="/trainers" 
                className={`font-medium transition-colors ${isActive('/trainers') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              >
                Trainers
              </Link>
            </li>
            <li>
              <Link 
                to="/pricing" 
                className={`font-medium transition-colors ${isActive('/pricing') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`font-medium transition-colors ${isActive('/contact') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Button asChild size="sm">
                <Link to="/contact">Book a Class</Link>
              </Button>
            </li>
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
            <Link 
              to="/programs" 
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left px-4 py-2 rounded font-medium ${isActive('/programs') ? 'bg-accent text-primary' : 'hover:bg-accent'}`}
            >
              Programs
            </Link>
            <Link 
              to="/trainers" 
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left px-4 py-2 rounded font-medium ${isActive('/trainers') ? 'bg-accent text-primary' : 'hover:bg-accent'}`}
            >
              Trainers
            </Link>
            <Link 
              to="/pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left px-4 py-2 rounded font-medium ${isActive('/pricing') ? 'bg-accent text-primary' : 'hover:bg-accent'}`}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left px-4 py-2 rounded font-medium ${isActive('/contact') ? 'bg-accent text-primary' : 'hover:bg-accent'}`}
            >
              Contact
            </Link>
            <Button asChild className="w-full">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Book a Class</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
