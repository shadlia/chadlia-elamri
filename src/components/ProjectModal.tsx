import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const { t } = useTranslation();
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  if (!project) return null;

  const currentMedia = project.media[currentMediaIndex];

  // Reset loading state when media changes
  const handleMediaChange = (index: number) => {
    setIsLoading(true);
    setCurrentMediaIndex(index);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl max-h-[90vh] bg-card border-2 border-primary/50 rounded-xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-primary/10 border-b border-primary/30">
              <h2 className="text-2xl font-bold gradient-text">{t(project.titleKey)}</h2>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Media Section */}
                <div className="lg:col-span-2 space-y-4">
                  {/* Main Media Player */}
                  <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                    {/* Loading Spinner */}
                    {isLoading && currentMedia.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    
                    {currentMedia.type === 'video' ? (
                      currentMedia.url.includes('drive.google.com') ? (
                        <iframe
                          src={currentMedia.url}
                          className="w-full h-full"
                          allow="autoplay"
                          style={{ border: 'none' }}
                          onLoad={() => setIsLoading(false)}
                        />
                      ) : (
                        <video
                          src={currentMedia.url}
                          controls
                          autoPlay
                          className="w-full h-full object-contain"
                          onLoadedData={() => setIsLoading(false)}
                        />
                      )
                    ) : (
                      <img
                        src={currentMedia.url}
                        alt={currentMedia.label || t(project.titleKey)}
                        className="w-full h-full object-contain"
                        onLoad={() => setIsLoading(false)}
                      />
                    )}
                  </div>

                  {/* Media Title */}
                  {currentMedia.label && (
                    <div className="text-center">
                      <p className="text-sm font-semibold text-primary">{currentMedia.label}</p>
                    </div>
                  )}

                  {/* Media Thumbnails */}
                  {project.media.length > 1 && (
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {project.media.map((media: any, index: number) => (
                        <button
                          key={index}
                          onClick={() => handleMediaChange(index)}
                          className={`flex-shrink-0 w-32 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                            currentMediaIndex === index
                              ? 'border-primary ring-2 ring-primary/20'
                              : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          {media.type === 'video' ? (
                            <div className="w-full h-full bg-black flex items-center justify-center text-xs text-white">
                              {media.label || `Video ${index + 1}`}
                            </div>
                          ) : (
                            <img src={media.url} alt="" className="w-full h-full object-cover" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Details Section */}
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((cat: string) => (
                      <Badge key={cat} variant="secondary">{cat}</Badge>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(project.descriptionKey)}
                  </p>

                  <div>
                    <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech: string) => (
                        <Badge key={tech} variant="outline" className="bg-background/50 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                      Key Features
                    </h3>
                    <ul className="space-y-1">
                      {project.featuresKeys.map((key: string) => (
                        <li key={key} className="flex items-start text-xs text-muted-foreground">
                          <span className="text-primary mr-2">•</span>
                          {t(key)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-border/50">
                    <Button
                      className="flex-1"
                      size="sm"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                      disabled={project.demoUrl === '#'}
                    >
                      <ExternalLink className="mr-2 h-3 w-3" /> Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      disabled={project.isPrivate}
                    >
                      <Github className="mr-2 h-3 w-3" />
                      {project.isPrivate ? 'Private' : 'Code'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
