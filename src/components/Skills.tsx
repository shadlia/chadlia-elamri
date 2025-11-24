import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Server, Palette, Database, Cloud, Wand2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface Skill {
  name: string;
  proficiency: number; // 1-5
}

const skillData: Record<string, Skill[]> = {
  ai: [
    { name: "Python", proficiency: 5 },
    { name: "LangChain", proficiency: 5 },
    { name: "LangGraph", proficiency: 4 },
    { name: "Langfuse", proficiency: 4 },
    { name: "OpenAI", proficiency: 5 },
    { name: "Gemini", proficiency: 5 },
    { name: "Hugging Face", proficiency: 4 },
    { name: "RAG Systems", proficiency: 5 },
    { name: "Prompt Engineering", proficiency: 5 },
    { name: "LlamaIndex", proficiency: 4 }
  ],
  backend: [
    { name: "FastAPI", proficiency: 5 },
    { name: "Flask", proficiency: 4 },
    { name: "Node.js", proficiency: 4 },
    { name: "Express", proficiency: 4 },
    { name: "NestJS", proficiency: 5 },
    { name: "REST APIs", proficiency: 5 },
    { name: "GraphQL", proficiency: 4 },
    { name: "WebSockets", proficiency: 4 },
    { name: "Domain-Driven Design", proficiency: 4 }
  ],
  frontend: [
    { name: "React", proficiency: 5 },
    { name: "Next.js", proficiency: 5 },
    { name: "Redux", proficiency: 4 },
    { name: "TypeScript", proficiency: 5 },
    { name: "Tailwind CSS", proficiency: 5 },
    { name: "JavaScript", proficiency: 5 },
    { name: "HTML", proficiency: 5 },
    { name: "CSS", proficiency: 5 }
  ],
  database: [
    { name: "PostgreSQL", proficiency: 5 },
    { name: "MongoDB", proficiency: 4 },
    { name: "Redis", proficiency: 4 },
    { name: "Vector Databases", proficiency: 4 },
    { name: "Chromadb", proficiency: 4 }
  ],
  cloud: [
    { name: "GCP Cloud Run", proficiency: 4 },
    { name: "Docker", proficiency: 5 },
    { name: "GitHub Actions", proficiency: 4 },
    { name: "CI/CD", proficiency: 4 }
  ],
  automation: [
    { name: "Puppeteer", proficiency: 4 },
    { name: "Selenium", proficiency: 4 },
    { name: "BeautifulSoup", proficiency: 4 },
    { name: "n8n", proficiency: 3 }
  ]
};

const categoryColors = {
  ai: "hsl(270, 80%, 60%)",
  backend: "hsl(200, 80%, 60%)",
  frontend: "hsl(340, 80%, 60%)",
  database: "hsl(120, 60%, 50%)",
  cloud: "hsl(30, 80%, 60%)",
  automation: "hsl(280, 70%, 60%)"
};

const proficiencyLabels = {
  5: "Expert",
  4: "Advanced",
  3: "Intermediate",
  2: "Familiar",
  1: "Beginner"
};

export const Skills = () => {
  const { t } = useTranslation();
  const [hoveredSkill, setHoveredSkill] = useState<{ name: string; proficiency: number; color: string } | null>(null);
  
  const skillCategories = [
    { icon: Brain, title: t('skills.ai'), skills: skillData.ai, color: categoryColors.ai },
    { icon: Server, title: t('skills.backend'), skills: skillData.backend, color: categoryColors.backend },
    { icon: Palette, title: t('skills.frontend'), skills: skillData.frontend, color: categoryColors.frontend },
    { icon: Database, title: t('skills.database'), skills: skillData.database, color: categoryColors.database },
    { icon: Cloud, title: t('skills.cloud'), skills: skillData.cloud, color: categoryColors.cloud },
    { icon: Wand2, title: t('skills.automation'), skills: skillData.automation, color: categoryColors.automation }
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
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="glass glass-hover p-6 h-full group">
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="p-2 rounded-lg transition-all duration-300"
                      style={{ 
                        backgroundColor: `${category.color}20`,
                      }}
                    >
                      <category.icon 
                        className="w-5 h-5 transition-all duration-300" 
                        style={{ color: category.color }}
                      />
                    </div>
                    <h3 
                      className="text-xl font-bold transition-all duration-300"
                      style={{ color: category.color }}
                    >
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: categoryIndex * 0.1 + skillIndex * 0.03,
                          duration: 0.4 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.05,
                          y: -2,
                        }}
                        className="relative"
                      >
                        <Badge 
                          variant="secondary" 
                          className="glass px-3 py-1.5 text-sm font-medium cursor-default transition-all duration-300 hover:shadow-lg"
                          style={{
                            '--hover-glow': `0 0 20px ${category.color}40`,
                            borderColor: `${category.color}30`,
                          } as React.CSSProperties}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = `0 0 20px ${category.color}40`;
                            e.currentTarget.style.borderColor = category.color;
                            e.currentTarget.style.backgroundColor = `${category.color}15`;
                            setHoveredSkill({ name: skill.name, proficiency: skill.proficiency, color: category.color });
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = '';
                            e.currentTarget.style.borderColor = `${category.color}30`;
                            e.currentTarget.style.backgroundColor = '';
                            setHoveredSkill(null);
                          }}
                        >
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Proficiency Tooltip */}
          {hoveredSkill && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
            >
              <div 
                className="glass px-6 py-3 rounded-lg shadow-2xl border-2"
                style={{ borderColor: hoveredSkill.color }}
              >
                <div className="flex items-center gap-3">
                  <span className="font-bold text-foreground">{hoveredSkill.name}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span 
                    className="text-sm font-medium"
                    style={{ color: hoveredSkill.color }}
                  >
                    {proficiencyLabels[hoveredSkill.proficiency as keyof typeof proficiencyLabels]}
                  </span>
                  <div className="flex gap-1 ml-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: i < hoveredSkill.proficiency
                            ? hoveredSkill.color
                            : 'hsl(var(--muted))',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
