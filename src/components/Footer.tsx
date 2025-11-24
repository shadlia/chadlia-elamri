import { Linkedin, Github, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </p>
          
          <p className="text-sm text-muted-foreground text-center">
            {t('footer.tech')}
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com/in/shadlia-el-amri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/shadlia" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:shadliaelamri@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-4">
          {t('footer.tagline')}
        </p>
      </div>
    </footer>
  );
};
