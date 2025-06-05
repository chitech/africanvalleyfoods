import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import cassavaFlourImg from "@assets/african_valley_casava_flour_1749147623825.jpg";
import cocoyamFlourImg from "@assets/african_valley_cocoyam_1749147623825.jpg";
import breadfruitFlourImg from "@assets/african_valley_foods_bread_flour_1749147623825.jpg";
import sweetPotatoFlourImg from "@assets/african_valley_sweetpotato_1749147623825.jpg";

export default function ProductsSection() {
  const products = [
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
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      name: "Premium Juice Collection",
      description: "Authentic African fruit juices including baobab, hibiscus, and tropical blends",
      features: "Natural • Traditional Recipes • Health Benefits",
      image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
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
            Premium African flour products, spices, and beverages - authentic ingredients for global markets
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
                  <div className="mb-4">
                    <span className="text-sm font-medium text-warm-orange bg-warm-orange/10 px-3 py-1 rounded-full">
                      {product.features}
                    </span>
                  </div>
                  <div className="text-center">
                    <Button className="bg-red-600 text-white hover:bg-red-700 transition-colors rounded-full px-6">
                      Learn More
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
