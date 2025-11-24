import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  
  const contactLinks = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: "shadliaelamri@gmail.com",
      href: "mailto:shadliaelamri@gmail.com"
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      value: "linkedin.com/in/shadlia-el-amri-aa97211b4",
      href: "https://www.linkedin.com/in/shadlia-el-amri-aa97211b4/"
    },
    {
      icon: Github,
      label: t('contact.github'),
      value: "github.com/shadlia",
      href: "https://github.com/shadlia"
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: t('contact.locationValue'),
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center gradient-text">
            {t('contact.title')}
          </h2>
          
          <motion.p 
            className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t('contact.subtitle')}
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {contactLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="glass glass-hover p-6">
                  <a 
                    href={link.href}
                    target={link.label !== t('contact.location') ? "_blank" : undefined}
                    rel={link.label !== t('contact.location') ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <link.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">{link.label}</p>
                      <p className="text-sm text-muted-foreground break-all group-hover:text-primary transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 glow cursor-pointer"
              asChild
            >
              <a href="mailto:shadliaelamri@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                {t('contact.cta')}
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
