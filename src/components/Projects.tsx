import { ExternalLink, Github, Bone, MessageSquare, Wine } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    icon: Bone,
    title: "Bone Fracture Detection",
    description: "Bone fracture detection uses XGBoost on extracted X-ray features, combining multiple decision trees to accurately classify fractured and normal bones.",
    tags: ["XGBoost", "Computer Vision", "Medical AI"],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    icon: MessageSquare,
    title: "Sentiment Analysis",
    description: "Sentiment analysis in Nepali using SVM classifies text as positive, negative, or neutral by training on labeled Nepali data with features like TF-IDF for accurate predictions.",
    tags: ["NLP", "SVM", "TF-IDF", "Nepali"],
    gradient: "from-accent/20 to-primary/20",
  },
  {
    icon: Wine,
    title: "Wine Quality Analysis",
    description: "Using K-Means and PCA on the Red Wine Quality dataset to discover hidden patterns and naturally cluster wines based on chemical features without using quality labels.",
    tags: ["K-Means", "PCA", "Clustering"],
    gradient: "from-primary/20 to-accent/20",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my data science and machine learning projects, demonstrating practical problem-solving skills.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="card-glass rounded-2xl overflow-hidden h-full flex flex-col hover:border-primary/40 transition-all duration-500 hover:-translate-y-2">
                {/* Card Header with Gradient */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.3),transparent_60%)]" />
                  <project.icon className="w-16 h-16 text-primary relative z-10 group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1 border-border hover:border-primary/50 hover:bg-secondary">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
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

export default Projects;
