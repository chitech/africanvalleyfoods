import { Leaf, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { motion } from "framer-motion";

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
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
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
            <div className="flex items-center space-x-2 mb-6 cursor-pointer" onClick={() => scrollToSection("home")}>
              <Leaf className="text-warm-orange text-2xl h-8 w-8" />
              <span className="text-xl font-bold">African Valley Foods</span>
            </div>
            <p className="text-gray-300">
              Premium African juice brand partnerships. Sustainable sourcing, authentic flavors, proven success.
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
              <p>123 African Valley Street</p>
              <p>Business District, BD 12345</p>
              <p>+1 (555) 123-JUICE</p>
              <p>partnerships@africanvalleyfoods.com</p>
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 African Valley Foods. All rights reserved. |{" "}
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
