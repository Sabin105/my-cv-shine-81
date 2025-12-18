import { Code, Database, BarChart3, Brain, GitBranch, Terminal } from "lucide-react";

const skills = [
  {
    icon: Code,
    name: "Python",
    description: "Data analysis, visualization, and machine learning",
    level: 90,
  },
  {
    icon: Database,
    name: "NumPy & Pandas",
    description: "Data manipulation and preprocessing",
    level: 85,
  },
  {
    icon: BarChart3,
    name: "Matplotlib & Seaborn",
    description: "Data visualization and insights",
    level: 80,
  },
  {
    icon: Brain,
    name: "Scikit-learn",
    description: "Machine learning model development",
    level: 75,
  },
  {
    icon: Terminal,
    name: "Jupyter / Colab",
    description: "Interactive analysis and experimentation",
    level: 85,
  },
  {
    icon: GitBranch,
    name: "Git & GitHub",
    description: "Version control and collaboration",
    level: 80,
  },
  {
    icon: Database,
    name: "SQL",
    description: "Data extraction and querying",
    level: 70,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern data science tools and technologies for building end-to-end machine learning solutions.
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="card-glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-foreground mb-1">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{skill.description}</p>
                  
                  {/* Progress bar */}
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        background: 'var(--gradient-primary)'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
