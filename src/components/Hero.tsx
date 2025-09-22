import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Terminal, Code2 } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "whoami";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Developer workspace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Terminal Style */}
          <div className="space-y-8">
            {/* Terminal Header */}
            <div className="bg-card border border-terminal rounded-lg overflow-hidden fade-up">
              <div className="bg-secondary px-4 py-2 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-code-highlight"></div>
                  <div className="w-3 h-3 rounded-full bg-terminal"></div>
                </div>
                <Terminal className="w-4 h-4 text-muted-foreground ml-2" />
                <span className="text-sm font-mono text-muted-foreground">guru@archlinux:~$</span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-terminal">$</span>
                  <span className="text-terminal">{typedText}</span>
                  <span className="terminal-cursor"></span>
                </div>
                
                <div className="text-foreground space-y-2 slide-in-right">
                  <p><span className="text-code-highlight">name:</span> "Siddhartha Dhakal"</p>
                  <p><span className="text-code-highlight">alias:</span> "GuruOrGoru"</p>
                  <p><span className="text-code-highlight">role:</span> "Cloud Native Go Developer"</p>
                  <p><span className="text-code-highlight">experience:</span> "3+ years programming, 2 years Go"</p>
                  <p><span className="text-code-highlight">location:</span> "Nepal 🇳🇵"</p>
                  <p><span className="text-code-highlight">status:</span> "Available for opportunities"</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 fade-up">
              <Button className="bg-terminal hover:bg-terminal-dim text-primary-foreground font-mono">
                <Github className="w-4 h-4 mr-2" />
                View GitHub
              </Button>
              <Button variant="outline" className="border-terminal text-terminal hover:bg-terminal/10 font-mono">
                <Code2 className="w-4 h-4 mr-2" />
                See Projects
              </Button>
            </div>
          </div>

          {/* Right Column - Introduction */}
          <div className="space-y-6 fade-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Hey there! 👋
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I'm <span className="text-terminal font-semibold">Siddhartha</span>, but you probably know me as 
                <span className="text-terminal font-semibold"> GuruOrGoru</span> around the internet.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Started as a regular academic guy hitting those 4.00s, then my brother suggested I learn C for academics. 
                That single suggestion changed everything. From C to Ruby to C# and Unity games, I was searching for 
                "the one" - until I discovered <span className="text-terminal font-semibold">Go</span>. 
                The rest, as they say, is history.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-card border border-terminal/50 rounded-lg p-4 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-terminal">100+</div>
                <div className="text-sm text-muted-foreground font-mono">Repositories</div>
              </div>
              <div className="bg-card border border-terminal/50 rounded-lg p-4 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-terminal">3</div>
                <div className="text-sm text-muted-foreground font-mono">Competition Victories</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 smooth-bounce">
        <div className="w-6 h-10 border-2 border-terminal rounded-full flex justify-center">
          <div className="w-1 h-3 bg-terminal rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;