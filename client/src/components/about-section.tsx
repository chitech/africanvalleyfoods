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
              <h2 className="text-4xl font-bold text-dark-brown mb-6">About African Valley Foods®</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At African Valley Foods®, we are committed to sharing the diverse culinary traditions across 
                Africa with those that have lost that heritage. Our mission is to provide high-quality, 
                nutritious, and healthy food products that celebrate the diversity of Africa's culinary heritage.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We cater to both the African and African Diaspora markets, as well as individuals and communities 
                interested in African cuisine. Through e-commerce, wholesale distribution, and ready-to-eat meal kits, 
                we make traditional authentic African meals accessible without the need to visit Africa.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that food is more than just nourishment; it's a cultural experience that connects 
                people across borders and generations. African Valley Foods® is your gateway to exploring 
                the diverse tastes and cultural richness of Africa without leaving your doorstep.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-red mb-2">Growing</div>
                  <div className="text-gray-600">Partner Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-red mb-2">Increasing </div>
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
