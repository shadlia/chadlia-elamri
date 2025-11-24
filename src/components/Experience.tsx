import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const Experience = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const experiences = [
    {
      position: t('experience.choose.position'),
      company: t('experience.choose.company'),
      location: t('experience.choose.location'),
      duration: t('experience.choose.duration'),
      country: "France",
      flag: "🇫🇷",
      city: "Paris",
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
      country: "Netherlands",
      flag: "🇳🇱",
      city: "Remote",
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
      country: "Tunisia",
      flag: "🇹🇳",
      city: "Sousse",
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
      country: "Tunisia",
      flag: "🇹🇳",
      city: "Sousse",
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
      country: "Tunisia",
      flag: "🇹🇳",
      city: "Sousse",
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
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center gradient-text">
            {t('experience.title')}
          </h2>

          {/* Timeline Container */}
          <div className="relative">
            {/* Animated Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20 transform md:-translate-x-1/2" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${index}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Outer Ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-4 border-primary"
                        animate={{
                          scale: hoveredIndex === index ? [1, 1.3, 1] : 1,
                          opacity: hoveredIndex === index ? [0.5, 0, 0.5] : 0.5,
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        style={{ width: '60px', height: '60px', marginLeft: '-30px', marginTop: '-30px' }}
                      />
                      
                      {/* Node Circle */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl shadow-lg border-4 border-background transform -translate-x-8 -translate-y-8">
                        {exp.flag}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-4rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mt-16 md:mt-0`}>
                    <Card 
                      className={`glass p-6 transition-all duration-300 ${
                        hoveredIndex === index 
                          ? 'shadow-2xl scale-105 border-primary' 
                          : 'glass-hover'
                      }`}
                    >
                      {/* Location Badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">{exp.flag}</span>
                        <span className="text-sm font-semibold text-primary">
                          {exp.city}, {exp.country}
                        </span>
                      </div>

                      {/* Position & Company */}
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {exp.position}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-3 text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-primary" />
                          <span className="font-semibold text-foreground">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: hoveredIndex === index ? 'auto' : 0,
                          opacity: hoveredIndex === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2 pt-2 border-t border-border/50">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <p className="text-sm text-foreground/90">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Hover Hint */}
                      {hoveredIndex !== index && (
                        <p className="text-xs text-muted-foreground mt-3 italic">
                          Hover to see achievements →
                        </p>
                      )}
                    </Card>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-[calc(50%-4rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
