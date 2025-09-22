import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Trophy, Wrench, Globe, Lock, Music, Terminal as TerminalIcon } from "lucide-react";

const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Inclusiv",
      description: "A job platform designed specifically for disabled people, promoting inclusive employment opportunities. Built during a hackathon and won first place.",
      tags: ["Go", "Web Platform", "Social Impact", "Hackathon Winner"],
      icon: Trophy,
      status: "Live",
      link: "https://inclusiv.surge.sh",
      highlight: "🏆 Hackathon Winner",
      color: "border-terminal bg-terminal/5"
    },
    {
      id: 2,
      title: "Adarsha School Website",
      description: "Complete educational website for Adarsha School with modern design and functionality for students, parents, and staff.",
      tags: ["Go", "Education", "Web Development"],
      icon: Globe,
      status: "Live",
      link: "https://adarshaschool.edu.np",
      highlight: "🎓 Educational Impact"
    },
    {
      id: 3,
      title: "Grt - URL Shortener",
      description: "A fast and efficient URL shortening service built with Go. Clean, minimal interface with powerful backend performance.",
      tags: ["Go", "Web Service", "API"],
      icon: TerminalIcon,
      status: "Completed",
      github: "https://github.com/guruorgoru",
      highlight: "⚡ High Performance"
    },
    {
      id: 4,
      title: "ScrapeGuru",
      description: "Concurrent web scraper built with Go's goroutines for high-performance data extraction. Handles multiple sites simultaneously.",
      tags: ["Go", "Concurrency", "Data Processing"],
      icon: Wrench,
      status: "Completed",
      github: "https://github.com/guruorgoru",
      highlight: "🚀 Concurrent Processing"
    }
  ];

  const currentProjects = [
    {
      title: "TUI Music Player",
      description: "Terminal-based personal music player with a beautiful interface. Perfect for command-line enthusiasts.",
      tags: ["Go", "TUI", "Music"],
      icon: Music,
      status: "In Development",
      progress: 70
    },
    {
      title: "Secure Password Manager",
      description: "Privacy-focused password manager with end-to-end encryption. Built for security-conscious users.",
      tags: ["Go", "Security", "Encryption"],
      icon: Lock,
      status: "In Development",
      progress: 45
    }
  ];

  const projectTypes = [
    { type: "REST APIs", count: "20+", description: "Various backend services" },
    { type: "Social Media Clones", count: "5+", description: "Using Ruby on Rails" },
    { type: "Unity Games", count: "3+", description: "Built with C#" },
    { type: "CRUD Applications", count: "15+", description: "Full-stack solutions" }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-terminal">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From hackathon winners to production applications, here are some projects I'm proud of. 
            Most of my 100+ projects were lost during OS changes, but these represent my best work.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={project.id}
                className={`${project.color || 'border-terminal/20'} hover:border-terminal/50 transition-all duration-300 hover:shadow-lg hover:shadow-terminal/20 fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-terminal/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-terminal" />
                      </div>
                      <div>
                        <div className="text-xl font-semibold">{project.title}</div>
                        <div className="text-sm text-terminal font-mono">
                          {project.highlight}
                        </div>
                      </div>
                    </div>
                    <Badge 
                      className={`${
                        project.status === 'Live' ? 'bg-terminal text-primary-foreground' :
                        project.status === 'Completed' ? 'bg-accent text-accent-foreground' :
                        'bg-muted text-muted-foreground'
                      } font-mono`}
                    >
                      {project.status}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="border-terminal/30 font-mono text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.link && (
                      <Button 
                        size="sm"
                        className="bg-terminal hover:bg-terminal-dim text-primary-foreground"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                    )}
                    {project.github && (
                      <Button 
                        size="sm"
                        variant="outline"
                        className="border-terminal text-terminal hover:bg-terminal/10"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Current Projects */}
        <div className="mb-16 fade-up">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-terminal">Currently</span> Working On
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {currentProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className="border-terminal/20 hover:border-terminal/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-terminal/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-terminal" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{project.title}</h4>
                        <Badge className="bg-code-highlight/20 text-code-highlight font-mono text-xs">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="border-terminal/30 font-mono text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-terminal rounded-full h-2 transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Project Types Overview */}
        <div className="fade-up">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Project <span className="text-terminal">Categories</span>
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((type, index) => (
              <Card key={index} className="text-center border-terminal/20 hover:border-terminal/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-terminal mb-2">{type.count}</div>
                  <div className="font-semibold mb-1">{type.type}</div>
                  <div className="text-sm text-muted-foreground">{type.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center fade-up">
          <Card className="bg-terminal/5 border-terminal/30 inline-block">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">
                Want to see more projects?
              </h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub for more repositories and contributions to open source projects.
              </p>
              <Button 
                className="bg-terminal hover:bg-terminal-dim text-primary-foreground"
                onClick={() => window.open("https://github.com/guruorgoru", "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                Visit GitHub Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;