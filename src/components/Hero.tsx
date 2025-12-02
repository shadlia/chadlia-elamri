import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import profileImgNoBackground from "@/assets/pic-no-bg.png";
import { HeroTerminal } from "@/components/HeroTerminal";

export const Hero = () => {
  const { t } = useTranslation();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Column: Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Profile Image */}
            <motion.div
              className="mb-6 flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-2 ring-primary/30 shadow-lg shadow-primary/20">
                <img 
                  src={profileImgNoBackground} 
                  alt={t('hero.name')}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Name - Slightly Bigger */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {t('hero.name')}
            </motion.h1>
            
            {/* Title */}
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t('hero.title')}
            </motion.h2>
            
            {/* Subtitle */}
            <motion.p 
              className="text-base sm:text-lg text-muted-foreground max-w-lg mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button 
                size="default" 
                className="px-6 py-5 glow cursor-pointer"
                onClick={() => scrollToSection('projects')}
              >
                {t('hero.cta1')}
              </Button>
              <Button 
                size="default" 
                variant="outline" 
                className="px-6 py-5 glass glass-hover cursor-pointer"
                onClick={() => scrollToSection('contact')}
              >
                {t('hero.cta2')}
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <HeroTerminal />
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

