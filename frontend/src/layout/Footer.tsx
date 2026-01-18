import { Heart, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wedding-charcoal text-wedding-cream mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Couple Names & Date */}
          <div className="text-center md:text-left">
            <h3 className="font-couple-name text-4xl mb-2 text-wedding-terracotta">
              Glieselle & Kyle
            </h3>
            <p className="font-info text-lg mb-4">
              [Wedding Date]
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Heart className="w-5 h-5 text-wedding-terracotta fill-wedding-terracotta" />
              <span className="font-nav text-sm">
                Celebrating Love
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-nav font-semibold text-lg mb-4 text-wedding-terracotta">
              Quick Links
            </h4>
            <nav className="space-y-2">
              <Link to="/" className="block hover:text-wedding-terracotta transition-colors font-info text-base">
                Home
              </Link>
              <Link to="/about" className="block hover:text-wedding-terracotta transition-colors font-info text-base">
                Our Story
              </Link>
              <Link to="/contact" className="block hover:text-wedding-terracotta transition-colors font-info text-base">
                Contact
              </Link>
              <Link to="/info" className="block hover:text-wedding-terracotta transition-colors font-info text-base">
                Event Details
              </Link>
              <Link to="/rsvp" className="block hover:text-wedding-terracotta transition-colors font-info text-base">
                RSVP
              </Link>
              <Link to="/qa" className="block hover:text-wedding-terracotta transition-colors font-info text-base">
                Q&A
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-nav font-semibold text-lg mb-4 text-wedding-terracotta">
              Get in Touch
            </h4>
            <div className="space-y-3 font-info">
              <a 
                href="mailto:wedding@example.com" 
                className="flex items-center justify-center md:justify-end gap-2 hover:text-wedding-terracotta transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>wedding@example.com</span>
              </a>
              <a 
                href="tel:+1234567890" 
                className="flex items-center justify-center md:justify-end gap-2 hover:text-wedding-terracotta transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(123) 456-7890</span>
              </a>
              <Link 
                to="https://www.google.com/maps/place/Grand+Island+Mansion/@38.2691108,-121.5878428,17z/data=!3m1!4b1!4m6!3m5!1s0x809ab48b824ed3a3:0xaa13cdbe8ee84038!8m2!3d38.2691108!4d-121.5878428!16s%2Fg%2F1tg6vyrs?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end gap-2 hover:text-wedding-terracotta transition-colors"
                >
                <MapPin className="w-4 h-4" />
                <span>13415 Grand Island Rd, Walnut Grove, CA 95690</span>
                </Link>
            </div>

            {/* Social Media */}
            <div className="flex justify-center md:justify-end gap-3 mt-6">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-wedding-terracotta/20 hover:text-wedding-terracotta"
              >
                <Link 
                  to="#" 
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-wedding-terracotta/20 hover:text-wedding-terracotta"
              >
                <Link 
                  to="#" 
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-wedding-sage/30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-nav">
          <p className="text-wedding-sage">
            © {currentYear} [Your Names]. All rights reserved.
          </p>
          <p className="text-wedding-sage flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-wedding-terracotta fill-wedding-terracotta" /> for our special day
          </p>
        </div>
      </div>
    </footer>
  );
}