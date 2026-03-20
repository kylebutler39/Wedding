import { Heart, Mail, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wedding-charcoal text-wedding-cream">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Couple Names & Date */}
          <div className="text-center md:text-left">
            <h3 className="font-couple-name text-4xl mb-3 text-wedding-terracotta">
              Glieselle & Kyle
            </h3>
            <p className="font-info text-lg mb-6 text-wedding-cream/90">
              April 30, 2027
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-nav font-semibold text-lg mb-6 text-wedding-terracotta">
              Quick Links
            </h4>
            <nav className="space-y-3">
              <Link to="/" className="block font-info text-base text-wedding-cream/90 hover:text-wedding-terracotta hover:ml-1 transition-all duration-300">
                Home
              </Link>
              <Link to="/about" className="block font-info text-base text-wedding-cream/90 hover:text-wedding-terracotta hover:ml-1 transition-all duration-300">
                Our Story
              </Link>
              <Link to="/contact" className="block font-info text-base text-wedding-cream/90 hover:text-wedding-terracotta hover:ml-1 transition-all duration-300">
                Contact
              </Link>
              <Link to="/info" className="block font-info text-base text-wedding-cream/90 hover:text-wedding-terracotta hover:ml-1 transition-all duration-300">
                Event Details
              </Link>
              <Link to="/rsvp" className="block font-info text-base text-wedding-cream/90 hover:text-wedding-terracotta hover:ml-1 transition-all duration-300">
                RSVP
              </Link>
              <Link to="/qa" className="block font-info text-base text-wedding-cream/90 hover:text-wedding-terracotta hover:ml-1 transition-all duration-300">
                Q&A
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-nav font-semibold text-lg mb-6 text-wedding-terracotta">
              Get in Touch
            </h4>
            <div className="space-y-4 font-info">
              <a
                href="mailto:kyleglieslle@gmail.com"
                className="flex items-center justify-center md:justify-end gap-2 hover:text-wedding-terracotta transition-colors text-wedding-cream/90"
              >
                <Mail className="w-4 h-4" />
                <span>kyleglieslle@gmail.com</span>
              </a>
              <a
                href="https://www.google.com/maps/place/Grand+Island+Mansion/@38.2691108,-121.5878428,17z/data=!3m1!4b1!4m6!3m5!1s0x809ab48b824ed3a3:0xaa13cdbe8ee84038!8m2!3d38.2691108!4d-121.5878428!16s%2Fg%2F1tg6vyrs?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end gap-2 hover:text-wedding-terracotta transition-colors text-wedding-cream/90"
              >
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="text-sm">13415 Grand Island Rd, Walnut Grove, CA 95690</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-wedding-sage/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm font-nav">
          <p className="text-wedding-cream/70 text-center sm:text-left order-2 sm:order-1">
            © {currentYear} Glieselle & Kyle. Made by Elaeth Jonah Lilagan. All rights reserved.
          </p>
          <p className="text-wedding-cream/70 flex items-center gap-2 order-1 sm:order-2 whitespace-nowrap">
            Made with <Heart className="w-4 h-4 text-wedding-terracotta fill-wedding-terracotta animate-pulse" /> for our special day
          </p>
        </div>
      </div>
    </footer>
  );
}
