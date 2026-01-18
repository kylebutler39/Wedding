import { Heart, Calendar, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
    const shootingHearts = [
        { delay: 0, duration: 3, startX: -10, startY: -10, endX: 90, endY: 110 },
        { delay: 1.5, duration: 3.5, startX: 110, startY: -10, endX: -10, endY: 110 },
        { delay: 3, duration: 3, startX: -10, startY: 50, endX: 110, endY: 50 },
        { delay: 4.5, duration: 4, startX: 110, startY: 30, endX: -10, endY: 90 },
    ];

    return (
        <div className="min-h-screen bg-linear-to-b from-wedding-cream to-white">
            {/* Hero Section */}
            <div className="relative h-[40vh] bg-linear-to-b from-wedding-terracotta to-wedding-terracotta-dark flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Heart className="absolute top-10 left-10 w-16 h-16 text-white animate-pulse" />
                    <Heart className="absolute top-32 right-32 w-12 h-12 text-white animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <Heart className="absolute bottom-20 right-20 w-20 h-20 text-white animate-pulse" style={{ animationDelay: '1s' }} />
                    <Heart className="absolute bottom-40 left-24 w-10 h-10 text-white animate-pulse" style={{ animationDelay: '1.5s' }} />
                    <Heart className="absolute top-1/2 left-1/3 w-8 h-8 text-white animate-pulse" style={{ animationDelay: '0.75s' }} />
                    
                    {/* Shooting Star Hearts */}
                    {shootingHearts.map((heart, index) => (
                        <motion.div
                            key={index}
                            className="absolute"
                            initial={{ 
                                left: `${heart.startX}%`, 
                                top: `${heart.startY}%`,
                                opacity: 0,
                                scale: 0
                            }}
                            animate={{ 
                                left: `${heart.endX}%`, 
                                top: `${heart.endY}%`,
                                opacity: [0, 1, 1, 0],
                                scale: [0, 1, 1, 0.5]
                            }}
                            transition={{
                                duration: heart.duration,
                                delay: heart.delay,
                                repeat: Infinity,
                                repeatDelay: 2,
                                ease: "easeInOut"
                            }}
                        >
                            <Heart className="w-6 h-6 text-white fill-current" />
                            <motion.div
                                className="absolute top-0 left-0 w-20 h-0.5 bg-linear-to-r from-transparent via-white to-transparent"
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: [0, 0.6, 0], scaleX: [0, 1, 0] }}
                                transition={{
                                    duration: heart.duration,
                                    delay: heart.delay,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                    ease: "easeInOut"
                                }}
                                style={{ transformOrigin: 'left center' }}
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="text-center z-10">
                    <h1 className="text-6xl md:text-8xl mb-4 text-white font-couple-name">
                        Our Story
                    </h1>
                    <p className="text-white/90 text-lg font-info">
                        A journey of love, laughter, and happily ever after
                    </p>
                </div>
            </div>

            {/* Story Timeline */}
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                {/* How We Met */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-wedding-terracotta flex items-center justify-center shrink-0">
                            <Heart className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h2 className="text-3xl text-wedding-charcoal font-info">
                                How We Met
                            </h2>
                            <p className="text-wedding-sage-dark font-nav">
                                Spring 2018
                            </p>
                        </div>
                    </div>
                    <div className="ml-8 pl-8 border-l-2 border-wedding-terracotta">
                        <p className="text-wedding-charcoal text-lg leading-relaxed font-info">
                            [TBA]
                        </p>
                    </div>
                </div>

                {/* First Date */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-wedding-sage flex items-center justify-center shrink-0">
                            <Calendar className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h2 className="text-3xl text-wedding-charcoal font-info">
                                The First Date
                            </h2>
                            <p className="text-wedding-sage-dark font-nav">
                                May 2018
                            </p>
                        </div>
                    </div>
                    <div className="ml-8 pl-8 border-l-2 border-wedding-sage">
                        <p className="text-wedding-charcoal text-lg leading-relaxed font-info">
                            [TBA]
                        </p>
                    </div>
                </div>

                {/* The Relationship Grows */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-wedding-sage-dark flex items-center justify-center shrink-0">
                            <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h2 className="text-3xl text-wedding-charcoal font-info">
                                Growing Together
                            </h2>
                            <p className="text-wedding-sage-dark font-nav">
                                2018 - 2023
                            </p>
                        </div>
                    </div>
                    <div className="ml-8 pl-8 border-l-2 border-wedding-sage-dark">
                        <p className="text-wedding-charcoal text-lg leading-relaxed font-info">
                            [TBA]
                        </p>
                    </div>
                </div>

                {/* The Proposal */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-wedding-terracotta-dark flex items-center justify-center shrink-0">
                            <MapPin className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h2 className="text-3xl text-wedding-charcoal font-info">
                                The Proposal
                            </h2>
                            <p className="text-wedding-sage-dark font-nav">
                                December 2023
                            </p>
                        </div>
                    </div>
                    <div className="ml-8 pl-8 border-l-2 border-wedding-terracotta">
                        <p className="text-wedding-charcoal text-lg leading-relaxed font-info">
                            [TBA]                
                        </p>
                    </div>
                </div>

                {/* Looking Forward */}
                <div className="text-center mt-16 p-8 bg-white rounded-lg shadow-sm border border-wedding-terracotta/20">
                    <Heart className="w-12 h-12 text-wedding-terracotta mx-auto mb-4" />
                    <h3 className="text-2xl mb-4 text-wedding-charcoal font-info">
                        And Now...
                    </h3>
                    <p className="text-wedding-charcoal text-lg leading-relaxed max-w-2xl mx-auto font-info">
                        We're thrilled to celebrate this next chapter with the people we love most. 
                        Thank you for being part of our journey and for joining us as we say "I do" 
                        and embark on our greatest adventure yet—marriage!
                    </p>
                </div>
            </div>
        </div>
    );
}