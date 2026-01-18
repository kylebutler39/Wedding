import { Button } from '@/components/ui/button';
import { Heart, Calendar, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen bg-wedding-cream">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: "url('/example.png')" }}
          />
          <div className="absolute inset-0 bg-black/50" /> {/* Adds dark overlay */}
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/50" />
        
        <div className="relative z-10 text-center px-4">
          <p className="font-nav text-white/90 text-sm tracking-[0.3em] uppercase mb-4 drop-shadow-lg">
            We're Getting Married
          </p>
          <h1 className="font-couple-name text-7xl md:text-9xl text-white mb-6 animate-fade-in drop-shadow-2xl">
            Glieselle & Kyle
          </h1>
          <p className="font-info text-2xl text-white/95 mb-8 drop-shadow-lg">
            March XX, 2027
          </p>
          <Heart className="w-8 h-8 text-white mx-auto animate-pulse drop-shadow-lg" />
        </div>
      </section>

      {/* Date & Location Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <Calendar className="w-12 h-12 text-wedding-terracotta mx-auto mb-4" />
              <h3 className="font-nav text-lg font-semibold text-wedding-charcoal mb-2 uppercase tracking-wider">
                When
              </h3>
              <p className="font-info text-xl text-wedding-sage-dark">
                March XX, 2027
              </p>
              <p className="font-info text-wedding-charcoal mt-1">
                X:00 PM
              </p>
            </div>
            
            <div className="text-center">
              <MapPin className="w-12 h-12 text-wedding-terracotta mx-auto mb-4" />
              <h3 className="font-nav text-lg font-semibold text-wedding-charcoal mb-2 uppercase tracking-wider">
                Where
              </h3>
              <p className="font-info text-xl text-wedding-sage-dark">
                The Grand Island Mansion
              </p>
              <p className="font-info text-wedding-charcoal mt-1">
                13415 Grand Island Rd, Walnut Grove, CA 95690
              </p>
            </div>
            
            <div className="text-center">
              <Heart className="w-12 h-12 text-wedding-terracotta mx-auto mb-4" />
              <h3 className="font-nav text-lg font-semibold text-wedding-charcoal mb-2 uppercase tracking-wider">
                Celebration
              </h3>
              <p className="font-info text-xl text-wedding-sage-dark">
                Ceremony & Reception
              </p>
              <p className="font-info text-wedding-charcoal mt-1">
                to follow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-wedding-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-couple-name text-6xl text-wedding-terracotta mb-8">
              Our Story
            </h2>
            <p className="font-info text-xl text-wedding-charcoal leading-relaxed mb-6">
              From a chance meeting at a coffee shop to adventures around the world, 
              our journey together has been filled with laughter, love, and countless memories.
            </p>
            <p className="font-info text-xl text-wedding-charcoal leading-relaxed">
              Now, we're excited to begin our next chapter as husband and wife, 
              and we can't wait to celebrate this special day with all of you.
            </p>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 bg-linear-to-br from-wedding-terracotta to-wedding-terracotta-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-couple-name text-6xl mb-6">
            Join Us
          </h2>
          <p className="font-info text-xl mb-8 max-w-2xl mx-auto">
            Your presence would mean the world to us. Please let us know if you can make it!
          </p>
          <Link to={"/rsvp"}>
            <Button className="bg-white text-wedding-terracotta font-nav font-semibold px-7 py-6 rounded-full hover:bg-wedding-cream transition-all duration-300 uppercase tracking-wider shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                RSVP Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Mail className="w-10 h-10 text-wedding-terracotta mx-auto mb-4" />
          <h3 className="font-nav text-lg font-semibold text-wedding-charcoal mb-2 uppercase tracking-wider">
            Questions?
          </h3>
          <p className="font-info text-lg text-wedding-sage-dark">
            Contact us at{' '}
            <a href="mailto:jane.doe@gmail.com" className="text-wedding-terracotta hover:underline">
              jane.doe@gmail.com
            </a> or click&nbsp;
            <Link to={"/qa"} className='hover:underline hover:text-wedding-terracotta'>
              Q&A
            </Link>
            &nbsp;for more information.
          </p>
        </div>
      </section>
    </div>
  );
}