import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import logoImg from "@assets/africanvalleyfoods_logo_1749151193715.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Home", href: "home" },
    { label: "Products", href: "products" },
    { label: "About Us", href: "about" },
    { label: "Contact", href: "contact" },
  ];

  const categories = [
    { label: "Traditional Dishes", href: "#" },
    { label: "Spices & Seasonings", href: "#" },
    { label: "Fresh Ingredients", href: "#" },
    { label: "Gift Packages", href: "#" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "@africanvalleyfoods", label: "Instagram" },
   
  ];

  return (
    <footer className="bg-dark-brown text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6 cursor-pointer" onClick={() => scrollToSection("home")}>
              <img 
                src={logoImg} 
                alt="African Valley Foods Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-300">
              Diversified African food products company. From juices to spices, grains to traditional foods - connecting authentic African flavors with global markets.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-300 hover:text-warm-orange transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-warm-orange transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Categories</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.label}>
                  <a
                    href={category.href}
                    className="text-gray-300 hover:text-warm-orange transition-colors duration-200"
                  >
                    {category.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Partnership Contact</h4>
            <div className="space-y-3 text-gray-300">
              <p>3700 W Agatite Street</p>
              <p>Chicago, IL 60625 </p>
              
              <p>africanvalleyfoods@gmail.com</p>
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 African Valley Foods. All rights reserved. |{" "}
            <a href="#" className="hover:text-warm-orange transition-colors duration-200">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-warm-orange transition-colors duration-200">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
