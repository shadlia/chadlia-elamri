import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Education = () => {
  const { t } = useTranslation();
  
  const education = [
    {
      degree: t('education.engineering.degree'),
      school: t('education.engineering.school'),
      location: t('education.engineering.location'),
      duration: t('education.engineering.duration'),
      honors: t('education.engineering.honors'),
    },
    {
      degree: t('education.bachelor.degree'),
      school: t('education.bachelor.school'),
      location: t('education.bachelor.location'),
      duration: t('education.bachelor.duration'),
      honors: t('education.bachelor.honors'),
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center gradient-text">
            {t('education.title')}
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="glass glass-hover p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-foreground">{edu.school}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-4">
                      <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                        {edu.honors}
                      </span>
                    </div>
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
