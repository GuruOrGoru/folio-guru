import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Cloud, Terminal as TerminalIcon, Wrench, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      description: "My weapons of choice for building robust applications",
      skills: [
        { name: "Go", level: "Expert", isMain: true },
        { name: "React", level: "Intermediate" },
        { name: "Ruby on Rails", level: "Intermediate" },
        { name: "C#/.NET", level: "Intermediate" },
        { name: "C", level: "Foundation" },
        { name: "Elixir", level: "Learning" }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Native & DevOps",
      description: "Building and deploying scalable cloud applications",
      skills: [
        { name: "Docker", level: "Advanced" },
        { name: "Kubernetes", level: "Advanced" },
        { name: "CI/CD", level: "Advanced" },
        { name: "Microservices", level: "Advanced" },
        { name: "Cloud Architecture", level: "Intermediate" }
      ]
    },
    {
      icon: TerminalIcon,
      title: "Developer Experience",
      description: "Tools and environments that make me productive",
      skills: [
        { name: "Neovim", level: "Expert", isMain: true },
        { name: "Git", level: "Advanced" },
        { name: "Arch Linux", level: "Advanced" },
        { name: "Tiling WM", level: "Advanced" },
        { name: "Shell Scripting", level: "Intermediate" }
      ]
    },
    {
      icon: Server,
      title: "Backend & APIs",
      description: "Creating robust server-side applications and services",
      skills: [
        { name: "REST APIs", level: "Expert" },
        { name: "Web Scraping", level: "Advanced" },
        { name: "Concurrency", level: "Advanced" },
        { name: "Database Design", level: "Intermediate" },
        { name: "System Design", level: "Intermediate" }
      ]
    }
  ];

  const achievements = [
    { 
      icon: "🏆", 
      title: "3 Hackathon Wins", 
      description: "Including Inclusiv - job platform for disabled people" 
    },
    { 
      icon: "💼", 
      title: "Internship Completed", 
      description: "Hands-on experience in professional development" 
    },
    { 
      icon: "🌟", 
      title: "Open Source Contributor", 
      description: "Active in the Go and open source community" 
    },
    { 
      icon: "🚀", 
      title: "100+ Projects", 
      description: "Built countless applications across different domains" 
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-terminal text-primary-foreground";
      case "Advanced": return "bg-accent text-accent-foreground";
      case "Intermediate": return "bg-secondary text-secondary-foreground";
      case "Foundation": return "bg-muted text-muted-foreground";
      case "Learning": return "bg-code-highlight/20 text-code-highlight";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-terminal">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            3+ years of programming experience with a focus on Go and cloud-native technologies. 
            Here's what I bring to the table.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="border-terminal/20 hover:border-terminal/50 transition-all duration-300 fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-terminal/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-terminal" />
                    </div>
                    <div>
                      <div className="text-xl font-semibold">{category.title}</div>
                      <div className="text-sm text-muted-foreground font-normal">
                        {category.description}
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center gap-2"
                      >
                        <Badge 
                          className={`${getLevelColor(skill.level)} ${
                            skill.isMain ? 'pulse-glow' : ''
                          } font-mono`}
                        >
                          {skill.name}
                          {skill.isMain && " ⭐"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievements */}
        <div className="fade-up">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-terminal">Achievements</span> & Milestones
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="text-center border-terminal/20 hover:border-terminal/50 transition-all duration-300 hover:shadow-lg hover:shadow-terminal/20"
              >
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{achievement.icon}</div>
                  <h4 className="font-semibold mb-2 text-terminal">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fun Fact */}
        <div className="mt-16 text-center fade-up">
          <Card className="bg-terminal/5 border-terminal/30 inline-block">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Cpu className="w-6 h-6 text-terminal" />
                <span className="font-mono text-terminal">
                  $ echo "Most projects lost during OS changes, but the experience remains compiled in memory"
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;