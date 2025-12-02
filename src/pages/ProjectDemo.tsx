import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const ProjectDemo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const project = projects.find((p) => p.id === id);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const currentMedia = project.media[currentMediaIndex];

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Button 
          onClick={() => navigate("/")} 
          variant="ghost" 
          className="mb-8 hover:bg-secondary/20"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> {t('common.back', 'Back to Portfolio')}
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area (Left/Top) */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl overflow-hidden border border-border/50 shadow-2xl bg-card"
            >
              {/* Main Media Player */}
              <div className="aspect-video bg-black relative">
                {currentMedia.type === 'video' ? (
                  currentMedia.url.includes('drive.google.com') ? (
                    <iframe
                      src={currentMedia.url}
                      className="w-full h-full"
                      allow="autoplay"
                      style={{ border: 'none' }}
                    />
                  ) : (
                    <video
                      src={currentMedia.url}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    />
                  )
                ) : (
                  <img
                    src={currentMedia.url}
                    alt={project.titleKey}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </motion.div>

            {/* Media Selector (Thumbnails) */}
            {project.media.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {project.media.map((media, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMediaIndex(index)}
                    className={`flex-shrink-0 w-32 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                      currentMediaIndex === index 
                        ? 'border-primary ring-2 ring-primary/20' 
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    {media.type === 'video' ? (
                      <video src={media.url} className="w-full h-full object-cover" muted />
                    ) : (
                      <img src={media.url} alt="" className="w-full h-full object-cover" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Sidebar (Right/Bottom) */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold mb-4 gradient-text">{t(project.titleKey)}</h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.categories.map((cat) => (
                  <Badge key={cat} variant="secondary">{cat}</Badge>
                ))}
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t(project.descriptionKey)}
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-background/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {project.featuresKeys.map((key) => (
                      <li key={key} className="flex items-start text-sm text-muted-foreground">
                        <span className="text-primary mr-2">•</span>
                        {t(key)}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-6 border-t border-border/50">
                  <Button 
                    className="flex-1" 
                    onClick={() => window.open(project.demoUrl, '_blank')}
                    disabled={project.demoUrl === '#'}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    disabled={project.isPrivate}
                  >
                    <Github className="mr-2 h-4 w-4" /> 
                    {project.isPrivate ? 'Private Repo' : 'View Code'}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDemo;
