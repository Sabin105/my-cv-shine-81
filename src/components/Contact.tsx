import { Mail, Phone, MapPin, Send, Github, Linkedin, Globe } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Interested in collaborating or have a project in mind? I'd love to hear from you.
            </p>
          </div>
          
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:sabinsapkota239@gmail.com"
              className="card-glass rounded-xl p-6 text-center hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <p className="text-sm text-muted-foreground break-all">sabinsapkota239@gmail.com</p>
            </a>
            
            <a
              href="tel:+9779813186393"
              className="card-glass rounded-xl p-6 text-center hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Phone</h3>
              <p className="text-sm text-muted-foreground">+977 9813186393</p>
            </a>
            
            <a
              href="https://sabinsapkota11.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass rounded-xl p-6 text-center hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Website</h3>
              <p className="text-sm text-muted-foreground">sabinsapkota11.com.np</p>
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/Sabin105"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300"
            >
              <Github className="w-5 h-5 text-primary" />
              <span className="text-foreground">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/sabin-sapkota-932034348"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              <span className="text-foreground">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
