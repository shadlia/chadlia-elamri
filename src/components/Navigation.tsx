import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useTranslation } from "react-i18next";
import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/ce.png";

const navLinks = [
  { id: "about", labelEn: "About", labelFr: "À Propos" },
  { id: "skills", labelEn: "Skills", labelFr: "Compétences" },
  { id: "education", labelEn: "Education", labelFr: "Éducation" },
  { id: "projects", labelEn: "Projects", labelFr: "Projets" },
  { id: "experience", labelEn: "Experience", labelFr: "Expérience" },
  { id: "contact", labelEn: "Contact", labelFr: "Contact" },
];

export const Navigation = () => {
  const { i18n, t } = useTranslation();
  const isFrench = i18n.language === "fr";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = (version: string) => {
    const cvFiles: { [key: string]: string } = {
      en: "/src/data/cvs/chadlia-elamri-ia.pdf",
      fr: "/src/data/cvs/chadlia-elamri-fr.pdf",
    };
    
    const link = document.createElement('a');
    link.href = cvFiles[version];
    link.download = `Chadlia_Elamri_CV_${version.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/20 backdrop-blur-xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </motion.div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground/80 hover:text-primary font-medium transition-colors cursor-pointer relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isFrench ? link.labelFr : link.labelEn}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* CV Download, Theme & Language Toggles */}
          <div className="flex items-center gap-2">
            {/* CV Download Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="gap-2 glass glass-hover"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">CV</span>
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="glass">
                <DropdownMenuItem 
                  onClick={() => downloadCV('en')}
                  className="cursor-pointer"
                >
                  English Version
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => downloadCV('fr')}
                  className="cursor-pointer"
                >
                  Version Française
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
