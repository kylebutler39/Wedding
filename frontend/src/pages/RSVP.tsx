import { Link } from "react-router-dom";

export function RSVP() {
    // Replace this URL with your actual Google Forms link
    const googleFormsUrl = "https://forms.google.com/your-form-link-here";

    return (
        <div className="min-h-screen bg-wedding-cream relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-64 h-64 bg-wedding-terracotta rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-wedding-sage rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-6xl md:text-7xl mb-4 text-wedding-terracotta font-couple-name">RSVP</h1>
                        <div className="w-24 h-1 bg-wedding-terracotta mx-auto mb-6"></div>
                        <p className="text-xl md:text-2xl text-wedding-charcoal leading-relaxed font-info">We hope you can join us for our special day</p>
                    </div>

                    {/* Main content card */}
                    <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 border border-wedding-terracotta/20">
                        <div className="text-center mb-8 font-info">
                            <p className="text-lg text-wedding-charcoal mb-6 leading-relaxed">Your presence would mean the world to us. Please let us know if you'll be able to celebrate with us by filling out our RSVP form.</p>
                            <p className="text-md text-wedding-sage mb-8">Kindly respond by [Your RSVP Date]</p>
                        </div>

                        {/* CTA Button */}
                        <div className="text-center">
                            <Link
                                to={googleFormsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-wedding-terracotta hover:bg-wedding-terracotta-dark text-white px-12 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-nav"
                            >
                                <span className="text-lg font-medium tracking-wide">Complete RSVP Form</span>
                            </Link>
                        </div>

                        {/* Additional info */}
                        <div className="mt-10 pt-8 border-t border-wedding-terracotta/20 text-center font-info">
                            <p className="text-wedding-sage text-sm">
                                If you have any questions or need assistance with the form,<br />
                                please don't hesitate to contact us.
                            </p>
                        </div>
                    </div>

                    {/* Decorative footer element */}
                    <div className="text-center mt-12">
                        <div className="inline-block">
                            <div className="flex items-center gap-3">
                                <div className="w-16 h-px bg-wedding-terracotta"></div>
                                <div className="w-2 h-2 bg-wedding-terracotta rounded-full"></div>
                                <div className="w-16 h-px bg-wedding-terracotta"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RSVP;