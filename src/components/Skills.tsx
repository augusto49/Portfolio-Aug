import { Code2, Database, Smartphone, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Mobile",
    icon: Smartphone,
    color: "text-primary",
    skills: ["Flutter/Dart", "React Native", "Firebase", "GetX", "MobX", "Modular"]
  },
  {
    title: "Frontend",
    icon: Code2,
    color: "text-secondary",
    skills: ["React", "React Native", "TypeScript", "JavaScript", "Next.js", "HTML/CSS", "Bootstrap"]
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-accent",
    skills: ["Python", "Django REST", "Node.js", "GraphQL", "REST APIs"]
  },
  {
    title: "Database",
    icon: Database,
    color: "text-primary",
    skills: ["MySQL", "PostgreSQL", "SQL Server", "Firebase"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Competências</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Skills Técnicas</h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div 
                  key={idx}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-card space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-primary/10 ${category.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIdx) => (
                      <div 
                        key={skillIdx}
                        className="px-3 py-2 bg-muted/50 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-primary p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Outras Competências</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Git/GitHub", "Docker", "Deploy", "Pandas", "UI/UX", "GLPI", "Active Directory"].map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-background/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
