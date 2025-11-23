import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Briefcase, Layers, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  
  const stats = [
    { icon: Briefcase, label: t('about.stat1'), value: t('about.stat1') },
    { icon: Layers, label: t('about.stat2'), value: t('about.stat2') },
    { icon: MapPin, label: t('about.stat3'), value: t('about.statLabel3') },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center gradient-text">
            {t('about.title')}
          </h2>

          <motion.div 
            className="glass rounded-2xl p-8 sm:p-12 mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed mb-6">
              {t('about.description1')}
            </p>
            <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed">
              {t('about.description2')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="glass glass-hover p-6 text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{stat.label}</h3>
                  <p className="text-muted-foreground">{stat.value}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
