import {
  Linkedin,
  Mail,
  Phone,
  Send,
  Code,
  MapPin
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation of a form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out, Ishan will get back to you soon.",
      });
      setIsSubmitting(false);
      e.target.reset(); // Clears the form after sending
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Whether you're interested in data analytics, Python automation, or 
          machine learning collaboration, I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              {/* Email - Verified from Resume [cite: 2, 47] */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:ishangupta409@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ishangupta409@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone - Verified from Resume [cite: 2, 47] */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:9918163737"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9918163737
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center md:text-left">Connect With Me</h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                {/* LinkedIn [cite: 2, 50] */}
                <a 
                  href="https://linkedin.com/in/ishan-gupta-a589a3246/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover:text-primary transition-all duration-300 shadow-sm border border-border/50"
                  title="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>

                {/* LeetCode [cite: 30, 85] */}
                <a 
                  href="https://leetcode.com/u/Ishan_74/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover:text-primary transition-all duration-300 shadow-sm border border-border/50"
                  title="LeetCode (700+ Solved)"
                >
                  <Code size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs border border-border/50">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder=" XYZ"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="xyz@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Hello Ishan, I'd like to discuss a data analytics project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};