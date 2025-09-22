import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Trophy, Wrench, Globe, Lock, Music, Terminal as TerminalIcon } from "lucide-react";

const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Inclusiv",
      description: "Accessibility-focused employment platform designed for inclusive workforce integration. Implemented comprehensive job matching algorithms and won first place in technical competition.",
      tags: ["Go", "Accessibility", "Enterprise Platform", "Competition Winner"],
      icon: Trophy,
      status: "Live",
      link: "https://inclusiv.surge.sh",
      highlight: "🏆 Competition Victory",
      color: "border-terminal bg-terminal/5"
    },
    {
      id: 2,
      title: "Educational Institution Portal",
      description: "Complete institutional management system for Adarsha School with modern architecture and comprehensive functionality for stakeholders.",
      tags: ["Go", "Educational Technology", "Full-Stack Development"],
      icon: Globe,
      status: "Live",
      link: "https://adarshaschool.edu.np",
      highlight: "🎓 Institutional Impact"
    },
    {
      id: 3,
      title: "Grt - URL Shortening Service",
      description: "High-performance URL shortening microservice built with Go. Implements clean architecture patterns with optimized backend performance.",
      tags: ["Go", "Microservice", "RESTful API"],
      icon: TerminalIcon,
      status: "Completed",
      github: "https://github.com/guruorgoru",
      highlight: "⚡ Optimized Performance"
    },
    {
      id: 4,
      title: "ScrapeGuru",
      description: "Distributed web scraping system leveraging Go's goroutine concurrency model for parallel data extraction. Handles multiple target sites simultaneously.",
      tags: ["Go", "Distributed Systems", "Data Processing"],
      icon: Wrench,
      status: "Completed",
      github: "https://github.com/guruorgoru",
      highlight: "🚀 Parallel Processing"
    }
  ];

  const currentProjects = [
    {
      title: "TUI Audio Player",
      description: "Terminal-based multimedia player with advanced interface design. Optimized for command-line workflow integration.",
      tags: ["Go", "Terminal UI", "Audio Processing"],
      icon: Music,
      status: "In Development",
      progress: 70
    },
    {
      title: "Cryptographic Password Manager",
      description: "Privacy-focused credential management system with end-to-end encryption. Designed for security-conscious professionals.",
      tags: ["Go", "Cryptography", "Security"],
      icon: Lock,
      status: "In Development",
      progress: 45
    }
  ];

  const projectTypes = [
    { type: "RESTful APIs", count: "20+", description: "Distributed backend services" },
    { type: "Social Platforms", count: "5+", description: "Using Ruby on Rails framework" },
    { type: "Game Engines", count: "3+", description: "Built with C# and Unity" },
    { type: "CRUD Systems", count: "15+", description: "Full-stack enterprise solutions" }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Production <span className="text-terminal">Systems</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From competition-winning solutions to enterprise applications, these represent my technical capabilities. 
            Most of my 100+ repositories were lost during system migrations, but these showcase my engineering expertise.
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
            Development <span className="text-terminal">In Progress</span>
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
            Technical <span className="text-terminal">Domains</span>
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
                Explore additional repositories?
              </h3>
              <p className="text-muted-foreground mb-6">
                Browse my GitHub for additional repositories and open source contributions.
              </p>
              <Button 
                className="bg-terminal hover:bg-terminal-dim text-primary-foreground"
                onClick={() => window.open("https://github.com/guruorgoru", "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                Explore GitHub Portfolio
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;