import { Package, Globe, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      icon: Package,
      title: "Diversified Product Portfolio",
      description: "Complete range of African food products including juices, spices, grains, traditional foods, and specialty ingredients.",
      color: "text-[#FFD700] bg-[#FFD700]/20",
    },
    {
      icon: Globe,
      title: "Global Supply Chain",
      description: "Established sourcing networks across Africa with quality control and sustainable farming partnerships worldwide.",
      color: "text-[#FFD700] bg-[#FFD700]/20",
    },
    {
      icon: Layers,
      title: "Scalable Solutions",
      description: "From retail partnerships to food service distribution, we provide flexible solutions that grow with your business needs.",
      color: "text-[#FFD700] bg-[#FFD700]/20",
    },
  ];

  return (
    <section className="py-20 bg-[#1B4D3E]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Why Partner with African Valley Foods?</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Join a winning partnership that delivers growth, quality, and authentic African juice flavors
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className="text-current text-2xl h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#FFD700] mb-4">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
