import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Server, Palette, Database, Cloud, Wand2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const skillData = {
  ai: ["Python", "LangChain", "LangGraph", "Langfuse", "OpenAI", "Gemini", "Hugging Face", "RAG Systems", "Prompt Engineering", "LlamaIndex"],
  backend: ["FastAPI", "Flask", "Node.js", "Express", "NestJS", "REST APIs", "GraphQL", "WebSockets", "Domain-Driven Design"],
  frontend: ["React", "Next.js", "Redux", "TypeScript", "Tailwind CSS"],
  database: ["PostgreSQL", "MongoDB", "Redis", "Vector Databases"],
  cloud: ["GCP Cloud Run", "Docker", "GitHub Actions", "CI/CD"],
  automation: ["Puppeteer", "Selenium", "BeautifulSoup", "n8n"]
};

export const Skills = () => {
  const { t } = useTranslation();
  
  const skillCategories = [
    { icon: Brain, title: t('skills.ai'), skills: skillData.ai },
    { icon: Server, title: t('skills.backend'), skills: skillData.backend },
    { icon: Palette, title: t('skills.frontend'), skills: skillData.frontend },
    { icon: Database, title: t('skills.database'), skills: skillData.database },
    { icon: Cloud, title: t('skills.cloud'), skills: skillData.cloud },
    { icon: Wand2, title: t('skills.automation'), skills: skillData.automation }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center gradient-text">
            {t('skills.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="glass glass-hover p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="glass"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
