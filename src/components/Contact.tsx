import { useState } from "react";
import { Send, Mail, Phone, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      // Simulate form submission
      console.log("Form data submitted:", formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }, 2000);
    } catch (err) {
      console.error("Error submitting form:", err);
      if (err instanceof Error) {
        setError(`Error: ${err.message}`);
      } else {
        setError("There was an error submitting your message. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 to-muted/20 backdrop-blur-sm dark:from-gray-900/40 dark:to-gray-900/20"></div>
      
      <div className="container relative mx-auto px-6 sm:px-8 md:px-12 lg:px-16 z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700 drop-shadow-sm dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Contact Us
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-700 rounded-full mb-6" />
          
          <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
            Have a question or want to work together? Reach out to us!
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {isSuccess ? (
            <div className="py-12 text-center bg-background/50 dark:bg-gray-800/30 backdrop-blur-md border border-border rounded-xl p-8">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. We'll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-background/50 dark:bg-gray-800/30 backdrop-blur-md border border-border rounded-xl p-8">
              {error && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-md">
                  {error}
                </div>
              )}
              
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium flex items-center gap-2">
                    <User className="h-4 w-4 text-cyan-500" />
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 rounded-md border border-border bg-background/50 focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4 text-cyan-500" />
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded-md border border-border bg-background/50 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium flex items-center gap-2">
                      <Phone className="h-4 w-4 text-cyan-500" />
                      Phone (Optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-md border border-border bg-background/50 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-cyan-500" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full p-3 rounded-md border border-border bg-background/50 focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto md:self-end px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-700 hover:from-blue-600 hover:to-cyan-600 text-white rounded-md shadow-lg shadow-cyan-500/20 transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
