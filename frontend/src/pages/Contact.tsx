import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Check if all fields are filled
  const isFormValid = formData.from_name.trim() !== '' && 
                      formData.from_email.trim() !== '' && 
                      formData.message.trim() !== '';

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.from_name,
          email: formData.from_email,
          message: formData.message,
          subject: `New Wedding Website Message from ${formData.from_name}`,
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
        setFormData({ from_name: '', from_email: '', message: '' });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again.'
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
          <h1 className="text-5xl md:text-6xl mb-4 font-couple-name text-wedding-terracotta">
            Get in Touch
          </h1>
          <p className="text-lg text-wedding-charcoal font-info">
            We'd love to hear from you! Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="space-y-6">
          {/* Name Input */}
          <div>
            <label 
              htmlFor="from_name" 
              className="block text-sm font-medium text-wedding-charcoal mb-2 font-montserrat"
            >
              Your Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-wedding-terracotta-dark bg-white text-wedding-charcoal focus:outline-none focus:border-wedding-terracotta focus:ring-2 focus:ring-offset-wedding-terracotta/20 transition-all font-info"
              placeholder="Your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label 
              htmlFor="from_email" 
              className="block text-sm font-medium text-wedding-charcoal mb-2 font-montserrat"
            >
              Your Email
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-wedding-terracotta-dark bg-white text-wedding-charcoal focus:outline-none focus:border-wedding-terracotta focus:ring-2 focus:ring-wedding-terracotta/20 transition-all font-info"
              placeholder="john@example.com"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label 
              htmlFor="message" 
              className="block text-sm font-medium text-wedding-charcoal mb-2 font-montserrat"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 rounded-lg border-2 border-wedding-terracotta-dark bg-white text-wedding-charcoal focus:outline-none focus:border-wedding-terracotta focus:ring-2 focus:ring-wedding-terracotta/20 transition-all resize-none font-info"
              placeholder="Write your message here..."
            />
          </div>

          {/* Status Message */}
          {status.message && (
            <div
              className={`p-4 rounded-lg font-info ${
                status.type === 'success'
                  ? 'bg-green-50 text-green-800 border-2 border-green-200'
                  : 'bg-red-50 text-red-800 border-2 border-red-200'
              }`}
            >
              {status.message}
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
              'Send Message'
            )}
          </button>
        </div>

        {/* Additional Contact Info (Optional) */}
        <div className="mt-12 text-center">
          <p className="text-wedding-sage italic font-info">
            Or reach out to us directly at{' '}
            <a 
              href="mailto:hello@yourwedding.com" 
              className="text-wedding-terracotta hover:underline"
            >
              hello@yourwedding.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}