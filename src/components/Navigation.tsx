import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, ExternalLink } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Story", id: "story" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-terminal/20" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="font-mono font-bold text-xl text-terminal hover:text-terminal-dim transition-colors"
          >
            $ GuruOrGoru
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-terminal transition-colors font-mono text-sm"
              >
                {item.label}
              </button>
            ))}
            
            <div className="flex items-center gap-3 ml-4">
              <Button
                variant="outline"
                size="sm"
                className="border-terminal text-terminal hover:bg-terminal/10"
                onClick={() => window.open("https://github.com/guruorgoru", "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                size="sm"
                className="bg-terminal hover:bg-terminal-dim text-primary-foreground"
                onClick={() => scrollToSection("contact")}
              >
                Let's Talk
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-terminal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-terminal/20 fade-up">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-muted-foreground hover:text-terminal transition-colors font-mono text-sm"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-terminal text-terminal hover:bg-terminal/10 justify-start"
                  onClick={() => {
                    window.open("https://github.com/guruorgoru", "_blank");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  size="sm"
                  className="bg-terminal hover:bg-terminal-dim text-primary-foreground justify-start"
                  onClick={() => scrollToSection("contact")}
                >
                  Let's Talk
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