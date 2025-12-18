import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sabin Sapkota. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in Nepal
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-muted-foreground">Languages: </span>
            <span className="text-foreground">Nepali</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-foreground">English</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
