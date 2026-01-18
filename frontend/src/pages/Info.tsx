import { MapPin, Shirt, Calendar, Hotel, Car, Gift, Phone, Camera, Hash } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ScheduleItem } from '@/utils/Tools'

export function Info() {
  const colorPalette = [
    { name: 'Terracotta', hex: '#c89872', class: 'bg-wedding-terracotta' },
    { name: 'Cream', hex: '#f5f1ed', class: 'bg-wedding-cream' },
    { name: 'Charcoal', hex: '#4a4a43', class: 'bg-wedding-charcoal' },
    { name: 'Sage', hex: '#9b9e8e', class: 'bg-wedding-sage' },
    { name: 'Olive', hex: '#6b6e5c', class: 'bg-wedding-sage-dark' },
  ]

  return (
    <div className="min-h-screen bg-linear-to-b from-wedding-cream to-wedding-cream-dark pt-16 pb-16">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-couple-name text-5xl md:text-6xl text-wedding-terracotta mb-4">
            Wedding Information
          </h1>
          <p className="font-nav text-lg text-wedding-sage-dark max-w-2xl mx-auto">
            Everything you need to know to celebrate with us
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="space-y-8">
          
          {/* Venue & Timing */}
          <Card className="border-wedding-terracotta-dark/20 bg-card/60 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-wedding-terracotta" />
                <CardTitle className="font-info text-3xl text-wedding-charcoal">
                  Venue & Timing
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 font-nav">
              <div>
                <h3 className="font-medium text-wedding-charcoal mb-2">Ceremony</h3>
                <p className="text-foreground">The Grand Island Mansion</p>
                <p className="text-sm text-wedding-sage-dark">13415 Grand Island Rd, Walnut Grove, CA 95690</p>
                <Badge className="mt-2 bg-wedding-terracotta hover:bg-wedding-terracotta-dark text-white">
                  TBA
                </Badge>
              </div>
              
              <Separator className="bg-wedding-terracotta-dark/20" />
              
              <div>
                <h3 className="font-medium text-wedding-charcoal mb-2">Reception</h3>
                <p className="text-foreground">Same location - Garden Pavilion</p>
                <Badge className="mt-2 bg-wedding-terracotta hover:bg-wedding-terracotta-dark text-white">
                  TBA
                </Badge>
              </div>
              
              <Separator className="bg-wedding-terracotta-dark/20" />
              
              <div>
                <h3 className="font-medium text-wedding-charcoal mb-2">Parking</h3>
                <p className="text-sm text-foreground">Info about parking to be inserted.</p>
                <p className="text-sm text-wedding-sage-dark mt-1">Accessible parking near main entrance</p>
              </div>

            <Separator className="bg-wedding-terracotta-dark/20" />
              
              <div>
                <h3 className="font-medium text-wedding-charcoal mb-2">Location Map</h3>
                <div className="w-full h-64 rounded-lg overflow-hidden border-2 border-wedding-terracotta-dark/20">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.447820118029!2d-121.58784279999999!3d38.2691108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ab48b824ed3a3%3A0xaa13cdbe8ee84038!2sGrand%20Island%20Mansion!5e0!3m2!1sen!2sus!4v1768699393233!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-3 border-wedding-terracotta text-wedding-terracotta hover:bg-wedding-terracotta hover:text-white"
                  onClick={() => window.open('https://www.google.com/maps/place/Grand+Island+Mansion/@38.2691108,-121.5878428,17z/data=!3m1!4b1!4m6!3m5!1s0x809ab48b824ed3a3:0xaa13cdbe8ee84038!8m2!3d38.2691108!4d-121.5878428!16s%2Fg%2F1tg6vyrs?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D', '_blank')}
                >
                  Open in Google Maps
                </Button>
              </div>

            </CardContent>
          </Card>

          {/* Dress Code */}
          <Card className="border-wedding-terracotta-dark/20 bg-card/60 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shirt className="w-6 h-6 text-wedding-terracotta" />
                <CardTitle className="font-info text-3xl text-wedding-charcoal">
                  Dress Code
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 font-nav">
              <div>
                <h3 className="font-medium text-wedding-charcoal mb-2">Attire</h3>
                <p className="font-medium text-foreground">Insert how formal the wedding is...</p>
                <p className="text-sm mt-2 text-muted-foreground">Insert what colors to be put here, what theme colors. For now, euro botanical luxury</p>
              </div>
              
              <Separator className="bg-wedding-terracotta-dark/20" />
              
              <div>
                <h3 className="font-medium text-wedding-charcoal mb-3">Color Palette</h3>
                <TooltipProvider>
                  <div className="flex gap-2">
                    {colorPalette.map((color) => (
                      <Tooltip key={color.name}>
                        <TooltipTrigger asChild>
                          <div 
                            className={`w-12 h-12 rounded-full ${color.class} border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform`}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-medium">{color.name}</p>
                          <p className="text-xs">{color.hex}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </TooltipProvider>
                <p className="text-sm text-wedding-sage-dark mt-2">Our wedding colors for inspiration</p>
              </div>
              
              <Separator className="bg-wedding-terracotta-dark/20" />
              
              <div>
                <h3 className="font-medium text-wedding-charcoal mb-2">Weather Note</h3>
                <p className="text-sm text-muted-foreground">Insert a reminder for guests of extra clothes to wear and the temperature of the location</p>
              </div>
            </CardContent>
          </Card>

          {/* Schedule */}
          <Card className="border-wedding-terracotta-dark/20 bg-card/60 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-wedding-terracotta" />
                <CardTitle className="font-info text-3xl text-wedding-charcoal">
                  Schedule of Events
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="font-nav">
              <div className="space-y-3">
                <p>This is not the real schedule!</p>
                <ScheduleItem time="3:30 PM" event="Guest Arrival" />
                <ScheduleItem time="4:00 PM" event="Ceremony Begins" />
                <ScheduleItem time="4:30 PM" event="Cocktail Hour" />
                <ScheduleItem time="5:30 PM" event="Reception & Dinner" />
                <ScheduleItem time="7:00 PM" event="First Dance & Toasts" />
                <ScheduleItem time="8:00 PM" event="Dancing & Celebration" />
                <ScheduleItem time="10:00 PM" event="Sparkler Send-Off" />
              </div>
            </CardContent>
          </Card>

          {/* Accommodations */}
          <Card className="border-wedding-terracotta-dark/20 bg-card/60 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Hotel className="w-6 h-6 text-wedding-terracotta" />
                <CardTitle className="font-info text-3xl text-wedding-charcoal">
                  Accommodations
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 font-nav">
              <div>
                <h3 className="font-medium text-wedding-charcoal mb-3">Recommended Hotels</h3>
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-wedding-terracotta border-wedding-terracotta-dark/20">
                    <CardContent className="pt-4">
                      <p className="font-medium text-wedding-charcoal">Hotel 1</p>
                      <p className="text-sm text-wedding-sage-dark">X miles from venue</p>
                      <div className="flex gap-2 items-center mt-2 flex-wrap">
                        <span className="text-sm text-wedding-sage-dark">Group Code:</span>
                        <Badge variant="outline" className="border-wedding-terracotta text-wedding-terracotta">
                          WEDDING2026 -- Its not real
                        </Badge>
                      </div>
                      <p className="text-xs text-wedding-sage-dark mt-2">Book by TIME OF EXPIRED DATE</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-wedding-terracotta border-wedding-terracotta-dark/20">
                    <CardContent className="pt-4">
                      <p className="font-medium text-wedding-charcoal">Hotel 2</p>
                      <p className="text-sm text-wedding-sage-dark">X miles from venue</p>
                      <div className="flex gap-2 items-center mt-2 flex-wrap">
                        <span className="text-sm text-wedding-sage-dark">Group Code:</span>
                        <Badge variant="outline" className="border-wedding-terracotta text-wedding-terracotta">
                          WEDDING2026 -- Its not real
                        </Badge>
                      </div>
                      <p className="text-xs text-wedding-sage-dark mt-2">Book by TIME OF EXPIRED DATE</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <Separator className="bg-wedding-terracotta-dark/20" />
              
              <div>
                <h3 className="font-medium text-wedding-charcoal mb-2">Shuttle Service</h3>
                <p className="text-sm text-foreground">Complimentary shuttle service from X LOCATION to the venue.</p>
                <p className="text-sm text-wedding-sage-dark mt-1">Pickup: 3:00 PM & 3:30 PM | Return: 9:30 PM & 10:15 PM</p>
              </div>
            </CardContent>
          </Card>

          {/* Transportation */}
          <Card className="border-wedding-terracotta-dark/20 bg-card/60 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Car className="w-6 h-6 text-wedding-terracotta" />
                <CardTitle className="font-info text-3xl text-wedding-charcoal">
                  Travel & Transportation
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 font-nav">
              <div>
                <h3 className="font-medium text-wedding-charcoal mb-2">Airport</h3>
                <p className="text-foreground">Sacramento International Airport (SMF)</p>
                <p className="text-sm text-wedding-sage-dark">Approximately X minutes from venue</p>
              </div>
              
              <Separator className="bg-wedding-terracotta-dark/20" />
              
              <div>
                <h3 className="font-medium text-wedding-charcoal mb-2">Getting Around</h3>
                <p className="text-sm text-foreground">Uber and Lyft are readily available throughout Sacramento.</p>
                <p className="text-sm text-wedding-sage-dark mt-1">We encourage ridesharing for a safe celebration!</p>
              </div>
            </CardContent>
          </Card>

          {/* Registry */}
          <Card className="border-wedding-terracotta-dark/20 bg-card/60 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Gift className="w-6 h-6 text-wedding-terracotta" />
                <CardTitle className="font-info text-3xl text-wedding-charcoal">
                  Registry
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="font-nav">
              <p className="text-center italic text-wedding-sage-dark mb-4">
                Your presence at our wedding is the greatest gift of all.
              </p>
              <p className="text-sm text-center text-foreground mb-4">
                However, if you wish to honor us with a gift, we've registered at:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" className="border-wedding-terracotta text-wedding-terracotta hover:bg-wedding-terracotta hover:text-white">
                  Crate & Barrel
                </Button>
                <Button variant="outline" className="border-wedding-terracotta text-wedding-terracotta hover:bg-wedding-terracotta hover:text-white">
                  Williams Sonoma
                </Button>
                <Button variant="outline" className="border-wedding-terracotta text-wedding-terracotta hover:bg-wedding-terracotta hover:text-white">
                  Honeymoon Fund
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Special Notes */}
          <Card className="border-wedding-terracotta-dark/20 bg-card/60 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Camera className="w-6 h-6 text-wedding-terracotta" />
                <CardTitle className="font-info text-3xl text-wedding-charcoal">
                  Special Notes
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 font-nav">
              <div>
                <h3 className="font-medium text-wedding-charcoal mb-2">Unplugged Ceremony</h3>
                <p className="text-sm text-foreground">We kindly request an unplugged ceremony. Please silence your phones and enjoy the moment with us! Our photographer will capture all the special memories.</p>
              </div>
              
              <Separator className="bg-wedding-terracotta-dark/20" />
              
              <div>
                <h3 className="font-medium text-wedding-charcoal mb-2">Celebration Style</h3>
                <p className="text-sm text-foreground">This will be an adults-only celebration to allow all guests to relax and enjoy.</p>
              </div>
              
              <Separator className="bg-wedding-terracotta-dark/20" />
              
              <div>
                <h3 className="font-medium text-wedding-charcoal mb-2">Dietary Accommodations</h3>
                <p className="text-sm text-foreground">Please let us know of any dietary restrictions in your RSVP. We'll work with our caterer to accommodate all needs.</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact & Social */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-wedding-terracotta-dark/20 bg-card/60 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-wedding-terracotta" />
                  <CardTitle className="font-info text-3xl text-wedding-charcoal">
                    Contact
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 font-nav">
                <div>
                  <h3 className="font-medium text-wedding-charcoal mb-2">Questions?</h3>
                  <p className="text-sm text-foreground">Wedding Coordinator: Jane Doe</p>
                  <p className="text-sm text-wedding-sage-dark">jane.doe@gmail.com</p>
                  <p className="text-sm text-wedding-sage-dark">(123) 456-7890</p>
                </div>
                
                <Separator className="bg-wedding-terracotta-dark/20" />
                
                <div>
                  <h3 className="font-medium text-wedding-charcoal mb-2">Day-of Contact</h3>
                  <p className="text-sm text-foreground">(123) 456-7899</p>
                  <p className="text-sm text-wedding-sage-dark">Available from 2:00 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-wedding-terracotta-dark/20 bg-card/60 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Hash className="w-6 h-6 text-wedding-terracotta" />
                  <CardTitle className="font-info text-3xl text-wedding-charcoal">
                    Share the Love
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="font-nav">
                <h3 className="font-medium text-wedding-charcoal mb-2">Wedding Hashtag</h3>
                <p className="text-2xl font-couple-name text-wedding-terracotta text-center my-3">
                  #HappilyMarried
                </p>
                <p className="text-sm text-center text-wedding-sage-dark">
                  Tag your photos so we can see the day through your eyes!
                </p>
              </CardContent>
            </Card>
          </div>

        </div>

        {/* Footer Message */}
        <div className="mt-16 text-center">
          <p className="font-couple-name text-2xl text-wedding-terracotta mb-2">
            We can't wait to celebrate with you!
          </p>
          <p className="font-nav text-wedding-sage-dark">
            See you on January 16, 2026
          </p>
        </div>

      </div>
    </div>
  )
}

export default Info