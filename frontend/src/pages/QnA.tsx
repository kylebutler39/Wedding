import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Link } from 'react-router-dom';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: 'ceremony' | 'reception' | 'travel' | 'attire' | 'gifts';
}

const faqs: FAQ[] = [
  {
    id: 1,
    category: 'ceremony',
    question: 'What time should we arrive?',
    answer: 'We recommend arriving 20-30 minutes before the ceremony starts to find parking and get seated comfortably.'
  },
  {
    id: 2,
    category: 'ceremony',
    question: 'Will the ceremony be indoors or outdoors?',
    answer: 'The ceremony will be held outdoors in the garden. In case of rain, we have a beautiful indoor space prepared as a backup.'
  },
  {
    id: 3,
    category: 'attire',
    question: 'What is the dress code?',
    answer: 'Semi-formal attire. Think cocktail dresses, suits, or dressy separates. Please avoid white, ivory, or cream colors.'
  },
  {
    id: 4,
    category: 'attire',
    question: 'What should I wear if the ceremony is outdoors?',
    answer: 'We recommend wearing comfortable shoes suitable for grass. Wedges or block heels work better than stilettos!'
  },
  {
    id: 5,
    category: 'reception',
    question: 'Will there be an open bar?',
    answer: 'Yes! We will have a full open bar with wine, beer, and signature cocktails throughout the reception.'
  },
  {
    id: 6,
    category: 'reception',
    question: 'Is dinner provided?',
    answer: 'Yes, a plated dinner will be served. Please make sure to indicate any dietary restrictions when you RSVP.'
  },
  {
    id: 7,
    category: 'travel',
    question: 'Where should we stay?',
    answer: 'We have reserved room blocks at the Hilton Garden Inn and Courtyard Marriott. Booking links are available on our Travel page.'
  },
  {
    id: 8,
    category: 'travel',
    question: 'Is there parking available?',
    answer: 'Yes, there is complimentary parking available at the venue. Valet service will also be provided.'
  },
  {
    id: 9,
    category: 'gifts',
    question: 'Do you have a registry?',
    answer: 'Your presence is the greatest gift! However, if you wish to give something, we have registries at Crate & Barrel and Zola.'
  },
  {
    id: 10,
    category: 'gifts',
    question: 'Can I bring a plus one?',
    answer: 'Due to venue capacity, we are only able to accommodate guests formally invited on your invitation. Please check your RSVP for details.'
  }
];

const categories = {
  ceremony: { label: 'Ceremony' },
  reception: { label: 'Reception' },
  travel: { label: 'Travel & Accommodations' },
  attire: { label: 'Attire' },
  gifts: { label: 'Gifts & Registry' }
};

export function QnA() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = selectedCategory 
    ? faqs.filter(faq => faq.category === selectedCategory)
    : faqs;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-linear-to-b from-primary to-primary/80 text-primary-foreground py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl mb-4 font-couple-name">
            Questions & Answers
          </h1>
          <p className="text-lg md:text-xl opacity-90 font-info">
            Everything you need to know about our special day
          </p>
        </div>
      </div>

      {/* Main Content Area with Sidebar */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Category Filter */}
          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-4">
              <h2 className="text-xl font-semibold mb-4 font-info text-foreground">Filter by Topic</h2>
              
              {/* Mobile: Horizontal Scrollable */}
              <ScrollArea className="lg:hidden w-full whitespace-nowrap">
                <div className="flex gap-2 pb-4">
                  <Button
                    onClick={() => setSelectedCategory(null)}
                    variant={selectedCategory === null ? "default" : "outline"}
                    className="rounded-full font-nav shrink-0"
                  >
                    All Questions
                  </Button>
                  {Object.entries(categories).map(([key, { label }]) => (
                    <Button
                      key={key}
                      onClick={() => setSelectedCategory(key)}
                      variant={selectedCategory === key ? "default" : "outline"}
                      className="rounded-full font-nav shrink-0"
                    >
                      {label}
                    </Button>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
              
              {/* Desktop: Vertical Stack */}
              <div className="hidden lg:flex lg:flex-col gap-2">
                <Button
                  onClick={() => setSelectedCategory(null)}
                  variant={selectedCategory === null ? "default" : "outline"}
                  className="rounded-full font-nav justify-start"
                >
                  All Questions
                </Button>
                {Object.entries(categories).map(([key, { label }]) => (
                  <Button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    variant={selectedCategory === key ? "default" : "outline"}
                    className="rounded-full font-nav justify-start"
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>
          </aside>

          {/* FAQ Content */}
          <div className="flex-1">
            <div className="space-y-3">
              {filteredFAQs.map((faq) => (
                <Card
                  key={faq.id}
                  className="border hover:border-primary py-3 transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-4 py-3 flex items-start justify-between text-left hover:bg-muted transition-colors duration-200"
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="default" className="font-nav text-xs">
                          {categories[faq.category].label}
                        </Badge>
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-foreground mt-1 font-info">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform duration-300 shrink-0 ${
                        openItems.includes(faq.id) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openItems.includes(faq.id) ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <CardContent className="px-4 pb-3 pt-1">
                      <div className="border-t border-border pt-3">
                        <p className="text-foreground text-sm md:text-base leading-relaxed font-info">
                          {faq.answer}
                        </p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {/* Still Have Questions Section */}
            <Card className="mt-12 text-center border-2 border-primary">
              <CardContent className="p-6">
                <h2 className="text-2xl md:text-3xl text-primary mb-3 font-couple-name">
                  Still have questions?
                </h2>
                <p className="text-foreground text-base mb-4 font-info">
                  We're here to help! Feel free to reach out to us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <Button
                    className="rounded-full shadow-md font-nav bg-wedding-terracotta"
                  >
                    <Link to={"/contact"}>
                        Click Here
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default QnA;