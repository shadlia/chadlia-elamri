import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import { projects } from "@/data/projects";
import { useState, useEffect, useRef } from "react";

export const Projects = () => {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Helper to map the data structure to the component's expected format
  const projectList = projects.map(p => ({
    ...p,
    title: t(p.titleKey),
    description: t(p.descriptionKey),
    features: p.featuresKeys.map(key => t(key))
  }));

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused || !scrollRef.current) return;
    
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    
    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollAmount += 1;
      scrollContainer.scrollLeft = scrollAmount;
      
      // Reset when reaching the end
      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0;
      }
    };
    
    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section 
      id="projects" 
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center gradient-text">
            {t('projects.title')}
          </h2>

          {/* Scrolling Container */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Duplicate projects for infinite scroll effect */}
            {[...projectList, ...projectList].map((project, index) => (
              <motion.div
                key={`${project.id}-${index}`}
                className="flex-shrink-0 w-[380px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % projectList.length) * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass glass-hover p-6 h-full flex flex-col shadow-lg min-h-[420px]">
                  {/* Category Badges */}
                  <div className="flex gap-2 mb-3">
                    {project.categories.map((category: string) => (
                      <Badge 
                        key={category}
                        className={`${
                          category === 'AI' 
                            ? 'bg-primary/20 text-primary border-primary/30' 
                            : 'bg-secondary/20 text-secondary border-secondary/30'
                        } border text-xs px-2 py-0.5`}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-primary mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="bg-background/50 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4 flex-grow">
                    <p className="text-xs font-semibold text-primary mb-2">
                      {t('projects.features')}
                    </p>
                    <ul className="space-y-1.5">
                      {project.features.map((feature) => (
                        <li 
                          key={feature} 
                          className="text-xs text-muted-foreground flex items-start"
                        >
                          <span className="text-primary mr-2">✓</span>
                          <span className="line-clamp-2">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <Button 
                      variant="default" 
                      size="sm"
                      className="flex-1 text-xs"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      {t('projects.demo')}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 text-xs"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-3 h-3 mr-1" />
                      {t('projects.code')}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Hint text */}
        
        </motion.div>
      </div>

      {/* Add custom scrollbar hiding */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
