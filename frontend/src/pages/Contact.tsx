import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { isValidEmail } from '../utils/Tools2';
import { toast } from 'sonner';
import { CheckCircle2, XCircle, Send } from 'lucide-react';

interface FormData {
    from_name: string;
    from_email: string;
    message: string;
}

interface Status {
    type: 'success' | 'error' | '';
    message: string;
}

export function Contact() {
    const [formData, setFormData] = useState<FormData>({
        from_name: '',
        from_email: '',
        message: ''
    });
    const [status, setStatus] = useState<Status>({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === 'from_email') {
            if (value && !isValidEmail(value)) {
                setEmailError('Please enter a valid email address');
            } else {
                setEmailError('');
            }
        }
    };

    const isFormValid = formData.from_name.trim() !== '' && 
                        formData.from_email.trim() !== '' && 
                        isValidEmail(formData.from_email) &&
                        formData.message.trim() !== '';

    const handleSubmit = async () => {
        if (!isValidEmail(formData.from_email)) {
            setStatus({
                type: 'error',
                message: 'Please enter a valid email address.'
            });
            toast.error('Invalid Email', {
                description: 'Please enter a valid email address.',
                duration: 4000,
            });
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.from_name,
                    email: formData.from_email,
                    message: formData.message,
                    subject: `New Message from ${formData.from_name} via Website`,
                    time: new Date().toLocaleString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true
                    })
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            if (result.text === 'OK') {
                setStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully.'
                });
                toast.success('Message Sent Successfully!', {
                    description: `Thank you, ${formData.from_name}! We've received your message and will get back to you soon.`,
                    duration: 5000,
                });
                setFormData({ from_name: '', from_email: '', message: '' });
                setEmailError('');
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Oops! Something went wrong. Please try again.'
            });
            toast.error('Unable to Send Message', {
                description: "We're experiencing technical difficulties. Please try again or contact us directly via email.",
                duration: 6000,
            });
            console.error('EmailJS Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-wedding-cream">
            <div className="container mx-auto px-4 py-16 max-w-2xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl mb-4 font-couple-name text-wedding-terracotta">Get in Touch</h1>
                    <p className="text-lg text-wedding-charcoal font-info">We'd love to hear from you! Send us a message and we'll respond as soon as possible.</p>
                </div>

                {/* Contact Form */}
                <div className="space-y-6">
                    {/* Name Input */}
                    <div>
                        <label 
                            htmlFor="from_name" 
                            className="block text-sm font-medium text-wedding-charcoal mb-2 font-montserrat"
                        >Your Name</label>
                        <input
                            type="text"
                            id="from_name"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border-2 border-wedding-terracotta-dark bg-white text-wedding-charcoal focus:outline-none focus:border-wedding-terracotta focus:ring-2 focus:ring-wedding-terracotta/20 transition-all font-info"
                            placeholder="Your name"
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <label 
                            htmlFor="from_email" 
                            className="block text-sm font-medium text-wedding-charcoal mb-2 font-montserrat"
                        >Your Email</label>
                        <input
                            type="email"
                            id="from_email"
                            name="from_email"
                            value={formData.from_email}
                            onChange={handleChange}
                            required
                            className={`w-full px-4 py-3 rounded-lg border-2 ${
                                emailError ? 'border-red-500' : 'border-wedding-terracotta-dark'
                            } bg-white text-wedding-charcoal focus:outline-none focus:border-wedding-terracotta focus:ring-2 focus:ring-wedding-terracotta/20 transition-all font-info`}
                            placeholder="john.doe@gmail.com"
                        />
                        {emailError && (
                            <p className="mt-1 text-sm text-red-600 font-info">{emailError}</p>
                        )}
                    </div>

                    {/* Message Textarea */}
                    <div>
                        <label 
                            htmlFor="message" 
                            className="block text-sm font-medium text-wedding-charcoal mb-2 font-montserrat"
                        >Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 rounded-lg border-2 border-wedding-terracotta-dark bg-white text-wedding-charcoal focus:outline-none focus:border-wedding-terracotta focus:ring-2 focus:ring-wedding-terracotta/20 transition-all resize-none font-info"
                            placeholder="Write your message here..."
                        />
                    </div>

                    {/* Status Message - Enhanced with icons */}
                    {status.message && (
                        <div
                            className={`p-4 rounded-lg font-info flex items-start gap-3 ${
                                status.type === 'success'
                                ? 'bg-green-50 text-green-800 border-2 border-green-200'
                                : 'bg-red-50 text-red-800 border-2 border-red-200'
                            }`}
                        >
                            {status.type === 'success' ? (
                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                            ) : (
                                <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                            )}
                            <span>{status.message}</span>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting || !isFormValid}
                        className="w-full bg-wedding-terracotta hover:bg-wedding-terracotta-dark text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg font-montserrat"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        fill="none"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    />
                                </svg>
                                Sending...
                            </span>
                        ) : (
                            <span className="flex items-center justify-center gap-2">
                                <Send className="h-5 w-5" />
                                Send Message
                            </span>
                        )}
                    </button>
                </div>

            </div>
        </div>
    );
}