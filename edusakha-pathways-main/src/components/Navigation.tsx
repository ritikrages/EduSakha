import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Accessibility, Brain, Users, DollarSign } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Learning", href: "#learning", icon: Brain },
    { label: "Career & Finance", href: "#career-finance", icon: DollarSign },
    { label: "Community", href: "#community", icon: Users },
    { label: "Accessibility", href: "#accessibility", icon: Accessibility },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Accessibility className="h-6 w-6 text-white" />
            </div>
            <div className="font-bold text-xl">
              <span className="text-gradient-primary">EduSakha</span>{" "}
              <span className="text-muted-foreground text-base">Inclusive</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-3 py-2"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </a>
            ))}
            <Button className="shadow-elegant transition-smooth hover:shadow-glow">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-muted-foreground hover:text-primary hover:bg-muted/50 transition-smooth rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </a>
              ))}
              <div className="px-4 pt-4">
                <Button className="w-full shadow-elegant transition-smooth hover:shadow-glow">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;