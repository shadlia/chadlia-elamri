import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Experience = () => {
  const { t } = useTranslation();
  
  const experiences = [
    {
      position: t('experience.choose.position'),
      company: t('experience.choose.company'),
      location: t('experience.choose.location'),
      duration: t('experience.choose.duration'),
      achievements: [
        t('experience.choose.achievement1'),
        t('experience.choose.achievement2'),
        t('experience.choose.achievement3'),
        t('experience.choose.achievement4'),
        t('experience.choose.achievement5')
      ]
    },
    {
      position: t('experience.niron.position'),
      company: t('experience.niron.company'),
      location: t('experience.niron.location'),
      duration: t('experience.niron.duration'),
      achievements: [
        t('experience.niron.achievement1'),
        t('experience.niron.achievement2'),
        t('experience.niron.achievement3'),
        t('experience.niron.achievement4')
      ]
    },
    {
      position: t('experience.latech.position'),
      company: t('experience.latech.company'),
      location: t('experience.latech.location'),
      duration: t('experience.latech.duration'),
      achievements: [
        t('experience.latech.achievement1'),
        t('experience.latech.achievement2'),
        t('experience.latech.achievement3'),
        t('experience.latech.achievement4')
      ]
    },
    {
      position: t('experience.latech2.position'),
      company: t('experience.latech2.company'),
      location: t('experience.latech2.location'),
      duration: t('experience.latech2.duration'),
      achievements: [
        t('experience.latech2.achievement1'),
        t('experience.latech2.achievement2'),
        t('experience.latech2.achievement3'),
        t('experience.latech2.achievement4')
      ]
    },
    {
      position: t('experience.issatso.position'),
      company: t('experience.issatso.company'),
      location: t('experience.issatso.location'),
      duration: t('experience.issatso.duration'),
      achievements: [
        t('experience.issatso.achievement1'),
        t('experience.issatso.achievement2'),
        t('experience.issatso.achievement3'),
        t('experience.issatso.achievement4')
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center gradient-text">
            {t('experience.title')}
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="glass glass-hover p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {exp.position}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-2">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-primary" />
                          <span className="font-semibold text-foreground">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="whitespace-nowrap">{exp.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-foreground/90">{achievement}</p>
                      </div>
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
