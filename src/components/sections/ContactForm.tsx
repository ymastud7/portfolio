"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        // Reset form
        setFormData({ name: "", email: "", message: "" });
        setSubmitStatus("success");
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="apple-card p-8">
      <h3 className="text-2xl font-bold mb-6 text-center">Send me a message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <input 
          type="hidden" 
          name="access_key" 
          value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY"} 
        />
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
            Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiUser className="text-foreground/50" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 bg-background border border-border/50 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300"
              placeholder="Your name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiMail className="text-foreground/50" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 bg-background border border-border/50 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
            Message
          </label>
          <div className="relative">
            <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
              <FiMessageSquare className="text-foreground/50 mt-1" />
            </div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full pl-10 pr-4 py-3 bg-background border border-border/50 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 resize-none"
              placeholder="Your message..."
            />
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 bg-primary text-background font-medium rounded-lg hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-background mr-2"></span>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </motion.button>

        {submitStatus === "success" && (
          <motion.div 
            className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-600 dark:text-green-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            Message sent successfully! I'll get back to you soon.
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div 
            className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-600 dark:text-red-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            Failed to send message. Please try again later.
          </motion.div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;