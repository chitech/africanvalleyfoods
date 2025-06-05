import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Leaf } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-sm shadow-lg" 
        : "bg-white/95 backdrop-blur-sm shadow-sm"
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection("home")}>
          <Leaf className="text-warm-orange text-2xl h-8 w-8" />
          <span className="text-xl font-bold text-dark-brown">African Valley Foods</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href.substring(1))}
              className="text-gray-600 hover:text-warm-orange transition-colors duration-200 font-medium"
            >
              {link.label}
            </button>
          ))}
        </div>
        
        <div className="hidden md:block">
          <Button 
            onClick={() => scrollToSection("home")}
            className="bg-warm-orange text-white hover:bg-deep-orange transition-colors rounded-full px-6"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className="text-left text-lg text-gray-600 hover:text-warm-orange transition-colors p-2"
                  >
                    {link.label}
                  </button>
                ))}
                <Button 
                  onClick={() => scrollToSection("home")}
                  className="bg-warm-orange text-white hover:bg-deep-orange transition-colors rounded-full mt-4"
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
