import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral/30 flex items-center justify-center px-4">
      <motion.div 
        className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircle className="w-16 h-16 text-accent-red mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-dark-brown mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-8">
          Your message has been received. We'll get back to you as soon as possible.
        </p>
        <Link href="/">
          <Button className="bg-accent-red hover:bg-accent-red/90 text-white">
            Return to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
} 