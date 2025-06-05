import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ProductsSection() {
  const products = [
    {
      name: "Baobab Bliss",
      description: "Premium baobab fruit juice with natural antioxidants and vitamin C",
      features: "High Antioxidants • Vitamin C Rich • Superfruit",
      image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      name: "Hibiscus Harmony",
      description: "Traditional hibiscus flower juice blend with natural floral notes",
      features: "Caffeine Free • Heart Healthy • Traditional Recipe",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      name: "Tamarind Twist",
      description: "Sweet and tangy tamarind juice with authentic African flavor profile",
      features: "Natural Sweetness • Digestive Support • Traditional",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      name: "Moringa Magic",
      description: "Nutrient-dense moringa leaf juice packed with vitamins and minerals",
      features: "Superfood • 90+ Nutrients • Energy Boost",
      image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      name: "Passion Fruit Paradise",
      description: "Tropical passion fruit juice with vibrant taste and natural vitamins",
      features: "Tropical Flavor • Vitamin A • Exotic Taste",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      name: "Ginger Glow",
      description: "Spicy ginger root juice blend with warming properties and health benefits",
      features: "Anti-Inflammatory • Digestive Aid • Warming",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
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
