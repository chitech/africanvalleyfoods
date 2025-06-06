import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import cassavaFlourImg from "@assets/african_valley_casava_flour_1749147623825.jpg";
import cocoyamFlourImg from "@assets/african_valley_cocoyam_1749147623825.jpg";
import breadfruitFlourImg from "@assets/african_valley_foods_bread_flour_1749147623825.jpg";
import sweetPotatoFlourImg from "@assets/african_valley_sweetpotato_1749147623825.jpg";
import yogaClassImg from "@assets/african_valley_yoga_class_1749149694491.png";
import spiceBlendsImg from "@assets/spices_africanvalley_foods.png";
import glutenFreeBurgerBunsImg from "@assets/gluten_free_africanvalley_buns.jpg";

export default function ProductsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const products = [
    {
      name: "Premium NaturalJuice Collection",
      description: "Authentic African fruit juices connecting communities to traditional flavors. From fresh ginger and beetroot to six wild mangoes our juices blends - nourishment that celebrates cultural heritage",
      features: "Natural • Traditional Recipes • Health Benefits",
      image: yogaClassImg,
    },
    {
      name: "Cassava Flour",
      description: "Premium cassava root flour, gluten-free and rich in carbohydrates for traditional African cooking",
      features: "Gluten-Free • Traditional • 16 OZ",
      image: cassavaFlourImg,
    },
    {
      name: "Cocoyam Taro Flour",
      description: "Authentic taro root flour made from cocoyam, perfect for traditional dishes and baking",
      features: "Traditional Root • Versatile • 16 OZ",
      image: cocoyamFlourImg,
    },
    {
      name: "Breadfruit Flour",
      description: "Nutritious breadfruit flour with unique flavor profile, ideal for specialty baking applications",
      features: "Unique Flavor • Nutritious • 16 OZ",
      image: breadfruitFlourImg,
    },
    {
      name: "Sweet Potato Flour",
      description: "Natural sweet potato flour with rich flavor and vibrant color for diverse culinary uses",
      features: "Natural Sweetness • Rich Color • 16 OZ",
      image: sweetPotatoFlourImg,
    },
    {
      name: "Traditional Spice Blends",
      description: "Authentic African spice combinations sourced directly from local farmers",
      features: "Authentic • Direct Sourced • Premium Quality",
      image: spiceBlendsImg,
    },
    {
      name: "Gluten Free Burger Buns",
      description: "Enjoy the taste of 13 different flavors of gluten free burger buns",
      features: "Gluten Free • Direct Sourced • Premium Quality",
      image: glutenFreeBurgerBunsImg,
    },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-neutral/30 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-dark-brown mb-4">Featured Product Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            <span className="text-warm-orange font-semibold italic">"Food From Our Land, Food For Our Soul"</span>
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            High-quality, nutritious African food products celebrating culinary diversity. 
            From traditional flours to authentic spices and beverages - connecting communities to their heritage.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div 
                  className="relative w-full h-48 bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedImage(product.image)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-dark-brown mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <span className="text-sm font-medium text-warm-orange bg-warm-orange/10 px-3 py-1 rounded-full">
                      {product.features}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)}
        className="bg-white/95 backdrop-blur-sm"
      >
        {selectedImage && (
          <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center p-4">
            <img
              src={selectedImage}
              alt="Product preview"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white/80 rounded-full p-2 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
}
