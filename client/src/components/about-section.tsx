import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-neutral/30 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl font-bold text-dark-brown mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2018, African Valley Foods was born from a passion to share the rich culinary 
                heritage of Africa with the world. Our founders, who grew up across different African 
                countries, noticed the lack of authentic African cuisine available in mainstream markets.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We work directly with local farmers and traditional cooks across Africa to source the 
                finest ingredients and time-honored recipes. Every product tells a story of culture, 
                tradition, and the incredible diversity of African cuisine.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-warm-orange mb-2">5000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-warm-orange mb-2">15</div>
                  <div className="text-gray-600">African Countries</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="African Valley Foods packaging and products"
              className="rounded-3xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-2xl shadow-lg">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Authentic</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
