import { Card, CardContent } from "@/components/ui/card";
import { Code, Heart, Trophy, Lightbulb } from "lucide-react";

const Story = () => {
  const milestones = [
    {
      icon: Code,
      year: "Grade 9-10",
      title: "The C Beginning",
      description: "My brother suggested I learn C for academics. Little did we know it would spark a passion that would change my entire trajectory.",
      highlight: "First line of code"
    },
    {
      icon: Lightbulb,
      year: "Early Days",
      title: "Ruby & Rails Adventure",
      description: "Discovered Ruby and fell in love with Rails. Built a hell lot of projects, exploring web development and learning the fundamentals.",
      highlight: "Countless projects"
    },
    {
      icon: Trophy,
      year: "Expansion Phase",
      title: "C# & Unity Games",
      description: "Ventured into game development with C# and Unity. Created several games but still felt like I was searching for 'the one' language.",
      highlight: "Game development skills"
    },
    {
      icon: Heart,
      year: "Present",
      title: "Finding Go",
      description: "Then I saw Go. Everything clicked. The simplicity, performance, and cloud-native capabilities. Rest is history - 2 years deep and loving every moment.",
      highlight: "Found my language"
    }
  ];

  return (
    <section id="story" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-terminal">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From a regular academic guy scoring 4.00s to a passionate Go developer. 
            Here's how a simple suggestion from my brother changed everything.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-terminal/30 hidden lg:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div key={index} className="relative slide-in-right" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute left-6 w-4 h-4 bg-terminal rounded-full border-4 border-background"></div>
                  
                  <div className="lg:ml-20">
                    <Card className="border-terminal/20 hover:border-terminal/50 transition-all duration-300 hover:shadow-lg hover:shadow-terminal/20">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-terminal/10 rounded-lg flex items-center justify-center">
                              <Icon className="w-6 h-6 text-terminal" />
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-sm font-mono text-terminal bg-terminal/10 px-2 py-1 rounded">
                                {milestone.year}
                              </span>
                              <h3 className="text-xl font-semibold">{milestone.title}</h3>
                            </div>
                            
                            <p className="text-muted-foreground leading-relaxed mb-3">
                              {milestone.description}
                            </p>
                            
                            <div className="inline-flex items-center gap-2 text-sm text-terminal font-mono">
                              <div className="w-2 h-2 bg-terminal rounded-full"></div>
                              {milestone.highlight}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-16 fade-up">
          <Card className="bg-terminal/5 border-terminal/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                What Drives Me <span className="text-terminal">Today</span>
              </h3>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl mb-2">🐹</div>
                  <div className="font-mono text-terminal font-semibold">Go Programming</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📝</div>
                  <div className="font-mono text-terminal font-semibold">Poetry</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🧩</div>
                  <div className="font-mono text-terminal font-semibold">Problem Solving</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="font-mono text-terminal font-semibold">Ricing Dev Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Story;