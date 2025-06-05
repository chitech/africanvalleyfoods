import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ProductsSection() {
  const products = [
    {
      name: "Jollof Rice",
      description: "West African one-pot rice dish with tomatoes, onions, and spices",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      name: "Ethiopian Platter",
      description: "Traditional injera bread served with assorted stews and vegetables",
      price: "$18.99",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      name: "Moroccan Tagine",
      description: "Slow-cooked stew with tender meat, vegetables, and aromatic spices",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      name: "Fresh Ingredients Kit",
      description: "Premium African vegetables, herbs, and spices for home cooking",
      price: "$15.99",
      image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      name: "Suya Skewers",
      description: "Spicy Nigerian grilled meat skewers with groundnut seasoning",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      name: "Spice Collection",
      description: "Curated selection of authentic African spices and seasonings",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
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
          <h2 className="text-4xl font-bold text-dark-brown mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our most popular African dishes and ingredients
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
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-dark-brown mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-warm-orange">{product.price}</span>
                    <Button className="bg-red-600 text-white hover:bg-red-700 transition-colors rounded-full px-6">
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
