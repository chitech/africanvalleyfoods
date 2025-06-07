import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Lock } from "lucide-react";
import { motion } from "framer-motion";
import customerImg from "@assets/african_valley_customer_1749147623825.jpeg";
import bgImage from "@assets/african_valley_foods_bg.png";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Partner with African Valley Foods
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Join us in bringing authentic African flavors to your market. Premium quality products, sustainable sourcing, and a growing portfolio of traditional foods.
            </p>
            
            <Card className="shadow-xl border border-gray-100 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-dark-brown mb-6">Request Partnership Information</h3>
                <form 
                  name="partner-request" 
                  method="POST" 
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="partner-request" />
                  <div hidden>
                    <input name="bot-field" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                      className="border-gray-300 focus:ring-accent-red focus:border-accent-red"
                    />
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      className="border-gray-300 focus:ring-accent-red focus:border-accent-red"
                    />
                  </div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="border-gray-300 focus:ring-accent-red focus:border-accent-red"
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="border-gray-300 focus:ring-accent-red focus:border-accent-red"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-accent-red text-white py-4 px-6 rounded-lg font-semibold hover:bg-accent-red/90 transition-colors transform hover:scale-105"
                  >
                    Request Partnership Package <Download className="ml-2 h-4 w-4" />
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
      </div>
    </section>
  );
}
