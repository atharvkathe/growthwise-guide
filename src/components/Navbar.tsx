
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          <Link to="/">SkillSense AI</Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks onSectionClick={scrollToSection} />
          <Link 
            to="/learn-more"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Link to="/assessment">
            <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

interface NavLinksProps {
  onSectionClick: (sectionId: string) => void;
}

const NavLinks = ({ onSectionClick }: NavLinksProps) => {
  const navItems = [
    { label: "Features", id: "features" },
    { label: "How it Works", id: "how-it-works" },
    { label: "Pricing", id: "pricing" },
    { label: "About", id: "about" },
  ];

  return (
    <>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onSectionClick(item.id)}
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          {item.label}
        </button>
      ))}
    </>
  );
};
