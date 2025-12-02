import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { projects } from "@/data/projects";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
  const { t } = useTranslation();

  // Helper to map the data structure to the component's expected format
  const projectList = projects.map(p => ({
    ...p,
    title: t(p.titleKey),
    description: t(p.descriptionKey),
    features: p.featuresKeys.map(key => t(key))
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section 
      id="projects" 
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-background/50 to-background"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            {t('projects.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore a collection of my recent work, featuring AI integrations, full-stack applications, and experimental projects.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectList.map((project) => (
            <ProjectCard key={project.id} project={project} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, t }: { project: any, t: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  const currentMedia = project.media[0]; // Use first media for preview

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (currentMedia.type === 'video' && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (currentMedia.type === 'video' && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleClick = () => {
    window.open(`/demo/${project.id}`, '_blank');
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="h-[500px] cursor-pointer"
    >
      <Card className="glass glass-hover h-full flex flex-col overflow-hidden shadow-lg border-border/50 group relative">
        
        {/* Top Section: Media (Expands on Hover) */}
        <motion.div 
          className="w-full relative overflow-hidden bg-black/5"
          initial={{ height: 0 }}
          animate={{ height: isHovered ? "55%" : "0%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 w-full h-full">
            {currentMedia.type === 'video' ? (
              <video
                ref={videoRef}
                src={currentMedia.url}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
              />
            ) : (
              <img 
                src={currentMedia.url} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
            
            {/* Private Badge Overlay (Top Right of Media) */}
            {project.isPrivate && (
              <div className="absolute top-3 right-3 z-20">
                <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm border-border/50 shadow-sm gap-1">
                  <Lock className="w-3 h-3" />
                  Private
                </Badge>
              </div>
            )}
          </div>
        </motion.div>

        {/* Bottom Section: Content (Shrinks on Hover) */}
        <motion.div 
          className="flex flex-col p-6 w-full bg-card relative z-10"
          animate={{ height: isHovered ? "45%" : "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="flex gap-2 mb-2 flex-wrap">
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
              <h3 className="text-2xl font-bold text-foreground line-clamp-1">
                {project.title}
              </h3>
            </div>
          </div>
          
          {/* Description - Fades/Shrinks slightly on hover to make room */}
          <div className="flex-grow overflow-hidden relative">
             <p className={`text-muted-foreground text-sm leading-relaxed transition-all duration-300 ${isHovered ? 'line-clamp-2' : 'line-clamp-[10]'}`}>
              {project.description}
            </p>
          </div>

          {/* Tech Stack - Always visible, full wrap */}
          <div className="mt-4 mb-4">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech: string) => (
                <Badge 
                  key={tech} 
                  variant="outline" 
                  className="bg-background/50 text-[10px] px-1.5 py-0 h-5"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Actions Footer */}
          <div className="mt-auto pt-3 border-t border-border/30 flex items-center justify-between gap-4">
            <span className="text-xs text-muted-foreground flex items-center gap-2">
              <ExternalLink className="w-3 h-3" />
              {isHovered ? "Click video for demo" : "Hover to preview"}
            </span>

            {/* Direct Code Button - Always clickable in this section */}
            {!project.isPrivate && (
              <Button
                variant="outline"
                size="sm"
                className="h-8 text-xs gap-1.5 hover:bg-secondary/20 z-30 relative"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubUrl, '_blank');
                }}
              >
                <Github className="w-3.5 h-3.5" />
                Code
              </Button>
            )}
          </div>
        </motion.div>
        
        {/* Private Badge (Visible when not hovered, top right of card) */}
        {project.isPrivate && !isHovered && (
          <div className="absolute top-6 right-6 z-20">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm border-border/50 shadow-sm gap-1">
              <Lock className="w-3 h-3" />
              Private
            </Badge>
          </div>
        )}

      </Card>
    </motion.div>
  );
};
