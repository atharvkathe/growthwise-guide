
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          SkillSense AI
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = () => {
  return (
    <>
      {["Features", "How it Works", "Pricing", "About"].map((item) => (
        <a
          key={item}
          href="#"
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          {item}
        </a>
      ))}
    </>
  );
};
