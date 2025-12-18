import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science and Information Technology (BSc.CSIT)",
    institution: "Swastik College, Tribhuvan University",
    period: "2021 - Ongoing",
    status: "current",
  },
  {
    degree: "High School Degree",
    institution: "Cosmic International Academy",
    period: "2019 - 2021",
    status: "completed",
  },
];

const certifications = [
  {
    title: "Data Science",
    organization: "Evolve IT Hub",
    description: "Successfully completed advanced training in Python programming, data analysis, machine learning, and data visualization, including computer vision. Gained practical experience with real-world datasets using popular libraries such as pandas, NumPy, matplotlib, and scikit-learn.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Education Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Background</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                <span className="gradient-text">Education</span>
              </h2>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />
              
              <div className="space-y-8">
                {education.map((item, index) => (
                  <div
                    key={item.degree}
                    className="relative flex gap-6"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:flex items-start">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${item.status === 'current' ? 'bg-primary/20 border-2 border-primary' : 'bg-secondary border border-border'}`}>
                        <GraduationCap className={`w-6 h-6 ${item.status === 'current' ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="flex-1 card-glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-center gap-2 text-sm text-primary mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                        {item.status === 'current' && (
                          <span className="ml-2 px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.degree}</h3>
                      <p className="text-muted-foreground">{item.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Certifications Section */}
          <div>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Achievements</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                Training & <span className="gradient-text">Certifications</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className="card-glass rounded-xl p-8 hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-1">{cert.title}</h3>
                      <p className="text-primary mb-4">{cert.organization}</p>
                      <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
