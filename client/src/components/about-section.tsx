import { motion } from "framer-motion";
import sweetPotatoFlourImg from "@assets/african_valley_sweetpotato_1749147623825.jpg";

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
              <h2 className="text-4xl font-bold text-dark-brown mb-6">About African Valley Foods</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2018, African Valley Foods is a diversified food products company specializing in 
                authentic African ingredients and products. Like Cargill, we operate across multiple food 
                categories with global sourcing, processing, and distribution capabilities.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our comprehensive portfolio includes premium juices, traditional spices, specialty grains, 
                and processed foods. We partner with retailers, food service operators, and distributors 
                worldwide to bring authentic African flavors to global markets through scalable supply solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-warm-orange mb-2">150+</div>
                  <div className="text-gray-600">Partner Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-warm-orange mb-2">25+</div>
                  <div className="text-gray-600">Product Categories</div>
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
              src={sweetPotatoFlourImg}
              alt="African Valley Foods premium flour products and packaging"
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
