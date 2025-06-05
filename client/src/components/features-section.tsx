import { Handshake, TrendingUp, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      icon: Handshake,
      title: "Proven Partnership Model",
      description: "Join our successful network of distributors and retailers who've grown their revenue with our premium juice brand.",
      color: "text-warm-orange bg-warm-orange/10",
    },
    {
      icon: TrendingUp,
      title: "Market Growth",
      description: "Tap into the rapidly expanding African beverage market with authentic flavors that customers are craving.",
      color: "text-red-600 bg-red-600/10",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Award-winning juices made from authentic African fruits with sustainable sourcing and premium packaging.",
      color: "text-deep-orange bg-deep-orange/10",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-dark-brown mb-4">Why Partner with African Valley Foods?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join a winning partnership that delivers growth, quality, and authentic African juice flavors
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className="text-current text-2xl h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-dark-brown mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
