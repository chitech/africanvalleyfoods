import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Lock } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import customerImg from "@assets/african_valley_customer_1749147623825.jpeg";
import bgImage from "@assets/african_valley_foods_bg.png";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  
  const { toast } = useToast();

  const leadCaptureMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/leads", {
        ...data,
        source: "lead_form"
      });
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message,
      });
      setFormData({ firstName: "", lastName: "", email: "", phone: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    leadCaptureMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section 
      id="home" 
      className="pt-20 min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-dark-brown/50 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Food From Our Land{" "}
              <span className="text-accent-red font-playfair italic">Food For Our Soul</span>
              <span className="text-sm align-super">®</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Sharing Africa's diverse culinary traditions with those seeking authentic heritage. 
              Partner with us to provide high-quality, nutritious African food products that celebrate 
              culinary diversity and connect communities across borders and generations.
            </p>
          </div>
          
          {/* Lead Capture Form */}
          <Card className="shadow-xl border border-gray-100 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-dark-brown mb-6">Request Partnership Information</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                    className="border-gray-300 focus:ring-accent-red focus:border-accent-red"
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                    className="border-gray-300 focus:ring-accent-red focus:border-accent-red"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="border-gray-300 focus:ring-accent-red focus:border-accent-red"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  className="border-gray-300 focus:ring-accent-red focus:border-accent-red"
                />
                <Button
                  type="submit"
                  disabled={leadCaptureMutation.isPending}
                  className="w-full bg-accent-red text-white py-4 px-6 rounded-lg font-semibold hover:bg-accent-red/90 transition-colors transform hover:scale-105"
                >
                  {leadCaptureMutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      Request Partnership Package <Download className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
              <p className="text-sm text-gray-500 mt-4 text-center flex items-center justify-center">
                <Lock className="h-4 w-4 mr-1" /> Your information is 100% secure
              </p>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={customerImg}
            alt="African Valley Foods customer enjoying authentic African food products"
            className="rounded-3xl shadow-2xl w-full h-auto"
          />
          <div className="absolute -top-4 -right-4 bg-accent-red text-white p-4 rounded-full">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
