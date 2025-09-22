import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Mail, MapPin, Coffee, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Since we don't have a backend, we'll just show a toast
    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Github,
      label: "GitHub",
      value: "@guruorgoru",
      link: "https://github.com/guruorgoru",
      description: "Check out my repositories"
    },
    {
      icon: Mail,
      label: "Email",
      value: "Let's connect",
      link: "mailto:contact@guruorgoru.dev",
      description: "Send me a message"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nepal 🇳🇵",
      description: "Available for remote work"
    },
    {
      icon: Coffee,
      label: "Status",
      value: "Available",
      description: "Open to opportunities"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Establish <span className="text-terminal">Connection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you want to collaborate on distributed systems, discuss Go architecture patterns, 
            or explore technical opportunities - I'd welcome the opportunity to connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="fade-up">
            <Card className="border-terminal/20 hover:border-terminal/50 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Send className="w-6 h-6 text-terminal" />
                  Initiate Communication
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-mono text-terminal">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="border-terminal/30 focus:border-terminal"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-mono text-terminal">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="border-terminal/30 focus:border-terminal"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-mono text-terminal">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your technical requirements, architecture ideas, or just establish initial contact!"
                      className="border-terminal/30 focus:border-terminal min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-terminal hover:bg-terminal-dim text-primary-foreground font-mono"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Transmit Message
                  </Button>
                </form>

                {/* Terminal Style Note */}
                <div className="mt-6 p-4 bg-terminal/5 border border-terminal/20 rounded-lg">
                  <div className="font-mono text-sm text-terminal">
                    <span className="text-terminal">$</span> echo "Response latency: Usually within 24 hours"
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 slide-in-right">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card 
                  key={index} 
                  className={`border-terminal/20 hover:border-terminal/50 transition-all duration-300 transform hover:scale-102 ${
                    info.link ? 'cursor-pointer hover:shadow-lg hover:shadow-terminal/20' : ''
                  }`}
                  onClick={() => info.link && window.open(info.link, "_blank")}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-terminal/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-terminal" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-lg">{info.value}</div>
                        <div className="text-sm text-muted-foreground">{info.description}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Fun Quote */}
            <Card className="bg-terminal/5 border-terminal/30">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl mb-3">💭</div>
                  <div className="font-mono text-terminal mb-2">
                    "Code is architecture, Go is my implementation language"
                  </div>
                  <div className="text-sm text-muted-foreground">
                    - GuruOrGoru, optimizing algorithms at 2 AM
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Setup */}
            <Card className="border-terminal/20">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 text-terminal">System Configuration</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">OS:</span>
                    <span className="font-mono">Arch Linux</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">WM:</span>
                    <span className="font-mono">Tiling Window Manager</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Editor:</span>
                    <span className="font-mono">Neovim</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Runtime:</span>
                    <span className="font-mono">Go</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center fade-up">
          <div className="inline-flex items-center gap-2 text-muted-foreground font-mono">
            <span>Engineered with</span>
            <span className="text-terminal">❤️</span>
            <span>and</span>
            <span className="text-terminal">Go concurrency</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;