import { Button } from '@/components/ui/button';
import { Heart, Calendar, MapPin, Mail, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen bg-wedding-cream">
      {/* Desktop: Side-by-side layout */}
      <div className="hidden lg:flex lg:min-h-screen">
        {/* Left Side - Hero Section (Fixed) */}
        <div className="lg:w-1/2 lg:shrink-0 lg:sticky lg:top-0 lg:h-screen relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/wedding-video-hero.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60" />
          </div>
          
          <div className="relative z-10 text-center px-4 animate-fade-in">
            <p className="font-nav text-white/90 text-sm md:text-base tracking-[0.3em] uppercase mb-6 drop-shadow-lg">
              We're Getting Married
            </p>
            <h1 className="font-couple-name text-7xl md:text-9xl text-white mb-8 drop-shadow-2xl leading-tight">
              Glieselle & Kyle
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-white/60"></div>
              <Heart className="w-6 h-6 text-white animate-pulse drop-shadow-lg" />
              <div className="h-px w-16 bg-white/60"></div>
            </div>
            <p className="font-info text-2xl md:text-3xl text-white/95 mb-12 drop-shadow-lg">
              March XX, 2027
            </p>
            <Link to="/rsvp">
              <Button className="bg-wedding-terracotta text-white font-nav font-semibold px-10 py-7 text-lg rounded-full hover:bg-wedding-terracotta-dark transition-all duration-300 uppercase tracking-wider shadow-2xl hover:shadow-wedding-terracotta/50 hover:scale-105">
                Save the Date
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side - All Other Sections (Scrollable) */}
        <div className="lg:w-1/2">
          {/* Event Details Section */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-wedding-cream/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-wedding-terracotta/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <h2 className="font-couple-name text-6xl md:text-7xl text-wedding-terracotta mb-4">
                  Event Details
                </h2>
                <div className="h-1 w-24 bg-wedding-terracotta mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* When */}
                <div className="group bg-wedding-cream/50 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-wedding-cream transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-wedding-terracotta/10">
                  <div className="w-20 h-20 bg-linear-to-br from-wedding-terracotta to-wedding-terracotta-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Calendar className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-nav text-lg font-bold text-wedding-charcoal mb-4 uppercase tracking-wider">
                    When
                  </h3>
                  <p className="font-info text-2xl font-semibold text-wedding-terracotta mb-2">
                    March XX, 2027
                  </p>
                  <div className="flex items-center justify-center gap-2 text-wedding-charcoal mt-3">
                    <Clock className="w-4 h-4" />
                    <p className="font-info text-lg">
                      X:00 PM
                    </p>
                  </div>
                </div>
                
                {/* Where */}
                <div className="group bg-wedding-cream/50 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-wedding-cream transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-wedding-terracotta/10">
                  <a href='https://www.google.com/maps/place/Grand+Island+Mansion/@38.2691108,-121.5878428,17z/data=!3m1!4b1!4m6!3m5!1s0x809ab48b824ed3a3:0xaa13cdbe8ee84038!8m2!3d38.2691108!4d-121.5878428!16s%2Fg%2F1tg6vyrs?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D' target="_blank" rel="noopener noreferrer">
                    <div className="w-20 h-20 bg-linear-to-br from-wedding-terracotta to-wedding-terracotta-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"> 
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                  </a>
                  <h3 className="font-nav text-lg font-bold text-wedding-charcoal mb-4 uppercase tracking-wider">
                    Where
                  </h3>
                  <p className="font-info text-2xl font-semibold text-wedding-terracotta mb-2">
                    The Grand Island Mansion
                  </p>
                  <p className="font-info text-sm text-wedding-sage-dark mt-3 leading-relaxed">
                    13415 Grand Island Rd<br />Walnut Grove, CA 95690
                  </p>
                </div>
                
                {/* Celebration */}
                <div className="group bg-wedding-cream/50 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-wedding-cream transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-wedding-terracotta/10">
                  <div className="w-20 h-20 bg-linear-to-br from-wedding-terracotta to-wedding-terracotta-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-nav text-lg font-bold text-wedding-charcoal mb-4 uppercase tracking-wider">
                    Celebration
                  </h3>
                  <p className="font-info text-2xl font-semibold text-wedding-terracotta mb-2">
                    Ceremony & Reception
                  </p>
                  <p className="font-info text-lg text-wedding-sage-dark mt-3">
                    to follow
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Story Section */}
          <section className="py-24 bg-linear-to-br from-wedding-cream via-wedding-cream to-wedding-cream-dark relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 left-10 text-wedding-terracotta text-9xl font-couple-name">❦</div>
              <div className="absolute bottom-20 right-10 text-wedding-terracotta text-9xl font-couple-name">❦</div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="font-couple-name text-6xl md:text-7xl text-wedding-terracotta mb-4">
                    Our Story
                  </h2>
                  <div className="h-1 w-24 bg-wedding-terracotta mx-auto rounded-full"></div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm p-10 md:p-12 rounded-3xl shadow-xl border border-wedding-terracotta/10">
                  <p className="font-info text-xl md:text-2xl text-wedding-charcoal leading-relaxed mb-6 text-center">
                    From a chance meeting at a coffee shop to adventures around the world, 
                    our journey together has been filled with laughter, love, and countless memories.
                  </p>
                  <p className="font-info text-xl md:text-2xl text-wedding-charcoal leading-relaxed mb-8 text-center">
                    Now, we're excited to begin our next chapter as husband and wife, 
                    and we can't wait to celebrate this special day with all of you.
                  </p>

                  <div className="text-center">
                    <Link to="/about">
                      <Button className="group bg-wedding-terracotta text-white font-nav font-semibold px-8 py-6 rounded-full hover:bg-wedding-terracotta-dark transition-all duration-300 uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105">
                        Read More About Us
                        <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* RSVP Call-to-Action Section */}
          <section className="py-24 bg-linear-to-br from-wedding-terracotta via-wedding-terracotta to-wedding-terracotta-dark text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
              <Heart className="w-16 h-16 mx-auto mb-6 animate-pulse" />
              <h2 className="font-couple-name text-6xl md:text-7xl mb-6">
                Join Us in Celebration
              </h2>
              <p className="font-info text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Your presence would mean the world to us. Please let us know if you can make it!
              </p>
              <Link to="/rsvp">
                <Button className="group bg-white text-wedding-terracotta font-nav font-bold px-12 py-7 text-lg rounded-full hover:bg-wedding-cream transition-all duration-300 uppercase tracking-wider shadow-2xl hover:shadow-white/20 hover:scale-110">
                  RSVP Now
                  <Heart className="inline-block ml-3 w-5 h-5 group-hover:scale-125 transition-transform" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Contact/Questions Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center bg-wedding-cream/50 backdrop-blur-sm p-10 rounded-3xl border border-wedding-terracotta/10">
                <div className="w-16 h-16 bg-linear-to-br from-wedding-terracotta to-wedding-terracotta-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-nav text-2xl font-bold text-wedding-charcoal mb-3 uppercase tracking-wider">
                  Have Questions?
                </h3>
                <p className="font-info text-lg text-wedding-sage-dark mb-6">
                  We're here to help! Check out our Q&A page for answers to common questions.
                </p>
                <Link to="/qa">
                  <Button className="group bg-wedding-terracotta text-white font-nav font-semibold px-8 py-6 rounded-full hover:bg-wedding-terracotta-dark transition-all duration-300 uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105">
                    View Q&A
                    <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Mobile/Tablet: Original stacked layout */}
      <div className="lg:hidden">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/wedding-video-hero.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60" />
          </div>
          
          <div className="relative z-10 text-center px-4 animate-fade-in">
            <p className="font-nav text-white/90 text-sm md:text-base tracking-[0.3em] uppercase mb-6 drop-shadow-lg">
              We're Getting Married
            </p>
            <h1 className="font-couple-name text-7xl md:text-9xl text-white mb-8 drop-shadow-2xl leading-tight">
              Glieselle & Kyle
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-white/60"></div>
              <Heart className="w-6 h-6 text-white animate-pulse drop-shadow-lg" />
              <div className="h-px w-16 bg-white/60"></div>
            </div>
            <p className="font-info text-2xl md:text-3xl text-white/95 mb-12 drop-shadow-lg">
              March XX, 2027
            </p>
            <Link to="/rsvp">
              <Button className="bg-wedding-terracotta text-white font-nav font-semibold px-10 py-7 text-lg rounded-full hover:bg-wedding-terracotta-dark transition-all duration-300 uppercase tracking-wider shadow-2xl hover:shadow-wedding-terracotta/50 hover:scale-105">
                Save the Date
              </Button>
            </Link>
          </div>
        </section>

        {/* Event Details Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-wedding-cream/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-wedding-terracotta/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-couple-name text-6xl md:text-7xl text-wedding-terracotta mb-4">
                Event Details
              </h2>
              <div className="h-1 w-24 bg-wedding-terracotta mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* When */}
              <div className="group bg-wedding-cream/50 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-wedding-cream transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-wedding-terracotta/10">
                <div className="w-20 h-20 bg-linear-to-br from-wedding-terracotta to-wedding-terracotta-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-nav text-lg font-bold text-wedding-charcoal mb-4 uppercase tracking-wider">
                  When
                </h3>
                <p className="font-info text-2xl font-semibold text-wedding-terracotta mb-2">
                  March XX, 2027
                </p>
                <div className="flex items-center justify-center gap-2 text-wedding-charcoal mt-3">
                  <Clock className="w-4 h-4" />
                  <p className="font-info text-lg">
                    X:00 PM
                  </p>
                </div>
              </div>
              
              {/* Where */}
              <div className="group bg-wedding-cream/50 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-wedding-cream transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-wedding-terracotta/10">
                <a href='https://www.google.com/maps/place/Grand+Island+Mansion/@38.2691108,-121.5878428,17z/data=!3m1!4b1!4m6!3m5!1s0x809ab48b824ed3a3:0xaa13cdbe8ee84038!8m2!3d38.2691108!4d-121.5878428!16s%2Fg%2F1tg6vyrs?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D' target="_blank" rel="noopener noreferrer">
                  <div className="w-20 h-20 bg-linear-to-br from-wedding-terracotta to-wedding-terracotta-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"> 
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                </a>
                <h3 className="font-nav text-lg font-bold text-wedding-charcoal mb-4 uppercase tracking-wider">
                  Where
                </h3>
                <p className="font-info text-2xl font-semibold text-wedding-terracotta mb-2">
                  The Grand Island Mansion
                </p>
                <p className="font-info text-sm text-wedding-sage-dark mt-3 leading-relaxed">
                  13415 Grand Island Rd<br />Walnut Grove, CA 95690
                </p>
              </div>
              
              {/* Celebration */}
              <div className="group bg-wedding-cream/50 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-wedding-cream transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-wedding-terracotta/10">
                <div className="w-20 h-20 bg-linear-to-br from-wedding-terracotta to-wedding-terracotta-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-nav text-lg font-bold text-wedding-charcoal mb-4 uppercase tracking-wider">
                  Celebration
                </h3>
                <p className="font-info text-2xl font-semibold text-wedding-terracotta mb-2">
                  Ceremony & Reception
                </p>
                <p className="font-info text-lg text-wedding-sage-dark mt-3">
                  to follow
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 bg-linear-to-br from-wedding-cream via-wedding-cream to-wedding-cream-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 text-wedding-terracotta text-9xl font-couple-name">❦</div>
            <div className="absolute bottom-20 right-10 text-wedding-terracotta text-9xl font-couple-name">❦</div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-couple-name text-6xl md:text-7xl text-wedding-terracotta mb-4">
                  Our Story
                </h2>
                <div className="h-1 w-24 bg-wedding-terracotta mx-auto rounded-full"></div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-10 md:p-12 rounded-3xl shadow-xl border border-wedding-terracotta/10">
                <p className="font-info text-xl md:text-2xl text-wedding-charcoal leading-relaxed mb-6 text-center">
                  From a chance meeting at a coffee shop to adventures around the world, 
                  our journey together has been filled with laughter, love, and countless memories.
                </p>
                <p className="font-info text-xl md:text-2xl text-wedding-charcoal leading-relaxed mb-8 text-center">
                  Now, we're excited to begin our next chapter as husband and wife, 
                  and we can't wait to celebrate this special day with all of you.
                </p>

                <div className="text-center">
                  <Link to="/about">
                    <Button className="group bg-wedding-terracotta text-white font-nav font-semibold px-8 py-6 rounded-full hover:bg-wedding-terracotta-dark transition-all duration-300 uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105">
                      Read More About Us
                      <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RSVP Call-to-Action Section */}
        <section className="py-24 bg-linear-to-br from-wedding-terracotta via-wedding-terracotta to-wedding-terracotta-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <Heart className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h2 className="font-couple-name text-6xl md:text-7xl mb-6">
              Join Us in Celebration
            </h2>
            <p className="font-info text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Your presence would mean the world to us. Please let us know if you can make it!
            </p>
            <Link to="/rsvp">
              <Button className="group bg-white text-wedding-terracotta font-nav font-bold px-12 py-7 text-lg rounded-full hover:bg-wedding-cream transition-all duration-300 uppercase tracking-wider shadow-2xl hover:shadow-white/20 hover:scale-110">
                RSVP Now
                <Heart className="inline-block ml-3 w-5 h-5 group-hover:scale-125 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Contact/Questions Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center bg-wedding-cream/50 backdrop-blur-sm p-10 rounded-3xl border border-wedding-terracotta/10">
              <div className="w-16 h-16 bg-linear-to-br from-wedding-terracotta to-wedding-terracotta-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-nav text-2xl font-bold text-wedding-charcoal mb-3 uppercase tracking-wider">
                Have Questions?
              </h3>
              <p className="font-info text-lg text-wedding-sage-dark mb-6">
                We're here to help! Check out our Q&A page for answers to common questions.
              </p>
              <Link to="/qa">
                <Button className="group bg-wedding-terracotta text-white font-nav font-semibold px-8 py-6 rounded-full hover:bg-wedding-terracotta-dark transition-all duration-300 uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105">
                  View Q&A
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}