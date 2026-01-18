import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Link } from 'react-router-dom';
import { faqs, categories } from '@/utils/faqData';

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
                                    >All Questions</Button>
                                    {Object.entries(categories).map(([key, { label }]) => (
                                        <Button
                                            key={key}
                                            onClick={() => setSelectedCategory(key)}
                                            variant={selectedCategory === key ? "default" : "outline"}
                                            className="rounded-full font-nav shrink-0"
                                        >{label}</Button>
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
                                >All Questions</Button>
                                {Object.entries(categories).map(([key, { label }]) => (
                                    <Button
                                        key={key}
                                        onClick={() => setSelectedCategory(key)}
                                        variant={selectedCategory === key ? "default" : "outline"}
                                        className="rounded-full font-nav justify-start"
                                    >{label}</Button>
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
                                        className={`grid transition-all duration-300 ${
                                            openItems.includes(faq.id) ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                        }`}
                                        >
                                        <div className="overflow-hidden">
                                            <CardContent className="px-4 pb-3 pt-1">
                                                <div className="border-t border-border pt-3">
                                                    <p className="text-foreground text-sm md:text-base leading-relaxed font-info">
                                                    {faq.answer}
                                                    </p>
                                                </div>
                                            </CardContent>
                                        </div>
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