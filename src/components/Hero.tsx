import { Github, Linkedin, Mail, Phone, Globe } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text">Sabin Sapkota</span>
          </h1>
          
          {/* Title */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Data Science & Machine Learning Enthusiast
          </p>
          
          {/* Summary */}
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Motivated Computer Science student specializing in Data Science and Machine Learning. 
            Skilled in Python, data preprocessing, visualization, and building predictive models.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary transition-all duration-300">
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary hover:border-primary/50 transition-all duration-300">
              <Github className="w-4 h-4 mr-2" />
              View Projects
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="https://github.com/Sabin105" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/sabin-sapkota-932034348" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://sabinsapkota11.com.np" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300"
            >
              <Globe className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a 
              href="mailto:sabinsapkota239@gmail.com"
              className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a 
              href="tel:+9779813186393"
              className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300"
            >
              <Phone className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
