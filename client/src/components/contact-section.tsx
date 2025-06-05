import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, Shield } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message,
      });
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter", { email });
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Subscribed!",
        description: data.message,
      });
      setNewsletterEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    newsletterMutation.mutate(newsletterEmail);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Corporate Office",
      content: "123 African Valley Street\nBusiness District, BD 12345",
      color: "text-warm-orange bg-warm-orange/10",
    },
    {
      icon: Phone,
      title: "Partnership Hotline",
      content: "+1 (555) 123-JUICE\nMon-Fri 9AM-6PM EST",
      color: "text-red-600 bg-red-600/10",
    },
    {
      icon: Mail,
      title: "Partnership Inquiries",
      content: "partnerships@africanvalleyfoods.com\nWe reply within 24 hours",
      color: "text-deep-orange bg-deep-orange/10",
    },
  ];

  return (
    <>
      {/* Newsletter CTA Section */}
      <section className="py-20 bg-gradient-to-r from-warm-orange to-deep-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Partner Newsletter</h2>
            <p className="text-xl mb-8 opacity-90">
              Get partnership updates, market insights, and exclusive business opportunities delivered to your inbox
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col md:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-4 rounded-lg text-gray-800 border-0 focus:ring-2 focus:ring-red-600"
                />
                <Button
                  type="submit"
                  disabled={newsletterMutation.isPending}
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
                >
                  {newsletterMutation.isPending ? "Subscribing..." : "Subscribe Now"}
                </Button>
              </form>
              <p className="text-sm opacity-75 mt-4">
                <Shield className="w-4 h-4 inline mr-1" /> Business partnerships only. Professional updates and opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-dark-brown mb-4">Start Your Partnership</h2>
            <p className="text-xl text-gray-600">Ready to bring African Valley Foods to your market? Let's discuss opportunities</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {contactInfo.map((info, index) => (
                <div key={info.title} className="flex items-start space-x-4">
                  <div className={`${info.color} p-3 rounded-lg`}>
                    <info.icon className="text-current text-xl h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-brown mb-2">{info.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                  </div>
                </div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-neutral/20 to-white shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-dark-brown mb-6">Send Us a Message</h3>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        type="text"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        className="border-gray-300 focus:ring-warm-orange focus:border-warm-orange"
                      />
                      <Input
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        className="border-gray-300 focus:ring-warm-orange focus:border-warm-orange"
                      />
                    </div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="border-gray-300 focus:ring-warm-orange focus:border-warm-orange"
                    />
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      className="border-gray-300 focus:ring-warm-orange focus:border-warm-orange"
                    />
                    <Button
                      type="submit"
                      disabled={contactMutation.isPending}
                      className="w-full bg-warm-orange text-white py-4 px-6 rounded-lg font-semibold hover:bg-deep-orange transition-colors"
                    >
                      {contactMutation.isPending ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
