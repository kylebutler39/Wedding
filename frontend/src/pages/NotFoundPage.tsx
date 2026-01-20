import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, ArrowLeft, Heart } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-wedding-cream flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full border-wedding-terracotta/20 shadow-xl">
        <CardContent className="p-8 md:p-12 text-center">
          {/* Decorative hearts */}
          <div className="flex justify-center gap-2 mb-6">
            <Heart className="w-5 h-5 text-wedding-terracotta fill-wedding-terracotta animate-pulse" />
            <Heart className="w-4 h-4 text-wedding-terracotta fill-wedding-terracotta animate-pulse delay-150" />
            <Heart className="w-5 h-5 text-wedding-terracotta fill-wedding-terracotta animate-pulse delay-300" />
          </div>

          {/* 404 Number */}
          <h1 
            className="text-8xl md:text-9xl font-bold mb-4"
            style={{ 
              fontFamily: 'var(--font-couple-name)',
              color: 'var(--color-wedding-terracotta)'
            }}
          >
            404
          </h1>

          {/* Main Message */}
          <h2 
            className="text-3xl md:text-4xl mb-4"
            style={{ 
              fontFamily: 'var(--font-info)',
              color: 'var(--color-wedding-charcoal)'
            }}
          >
            Page Not Found
          </h2>

          {/* Description */}
          <p 
            className="text-lg md:text-xl mb-8 text-wedding-sage-dark max-w-md mx-auto"
            style={{ fontFamily: 'var(--font-info)' }}
          >
            Oops! It seems this page has wandered off to the ceremony. 
            Let's get you back to where the celebration is.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16 bg-wedding-terracotta/30"></div>
            <Heart className="w-4 h-4 text-wedding-terracotta fill-wedding-terracotta" />
            <div className="h-px w-16 bg-wedding-terracotta/30"></div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="gap-2 border-wedding-terracotta text-wedding-charcoal hover:bg-wedding-terracotta hover:text-wedding-cream font-info"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
            
            <Button
              onClick={() => window.location.href = '/'}
              className="gap-2 bg-wedding-terracotta hover:bg-wedding-terracotta-dark text-wedding-cream font-info"
            >
              <Home className="w-4 h-4" />
              Return Home
            </Button>
          </div>

          {/* Bottom decoration */}
          {/* <div className="mt-10 pt-8 border-t border-wedding-terracotta/10">
            <p 
              className="text-sm text-wedding-sage"
              style={{ fontFamily: 'var(--font-info)' }}
            >
              "Love is not about finding the right path, it's about finding each other."
            </p>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
}