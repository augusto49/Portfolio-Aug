import { ExternalLink, Github, Briefcase, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Ndutra Imobiliária",
    subtitle: "Sistema Imobiliário Completo",
    description:
      "Plataforma completa para imobiliária com listagem de imóveis, busca avançada, dashboard administrativo, gestão de clientes e integração de contato.",
    image: "https://ndutraimobiliaria.com/og-image.jpg", // You can replace with actual screenshot
    liveUrl: "https://ndutraimobiliaria.com",
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "Django",
      "Django REST",
      "PostgreSQL",
    ],
    features: [
      "Listagem de imóveis para venda e aluguel",
      "Busca avançada com filtros",
      "Dashboard administrativo completo",
      "Gestão de clientes e leads",
      "Sistema de favoritos",
      "Integração com WhatsApp",
      "API REST para comunicação",
      "Design responsivo",
    ],
    type: "Freelancer",
    year: "2024",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projetos" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          className="space-y-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Briefcase className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Projetos</span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              Projetos Freelancer
            </motion.h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Projetos desenvolvidos de forma independente para clientes
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="glass-card card-rainbow rounded-2xl overflow-hidden radar-pulse transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.2 + 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Project Image/Preview */}
                  <div className="relative h-64 md:h-auto overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <Globe className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                        <p className="text-lg font-semibold text-primary">
                          {project.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <motion.div
                      className="absolute top-4 right-4 px-3 py-1 bg-accent/20 backdrop-blur-sm rounded-full text-xs font-medium text-accent border border-accent/30"
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 }}
                    >
                      {project.type}
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 md:p-8 space-y-6">
                    {/* Title */}
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <span className="text-sm text-muted-foreground">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-secondary mb-2">
                        Tecnologias
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, tIdx) => (
                          <motion.span
                            key={tIdx}
                            className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: tIdx * 0.05 + 0.7 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-secondary mb-2">
                        Principais Funcionalidades
                      </h4>
                      <div className="grid grid-cols-2 gap-1">
                        {project.features.slice(0, 6).map((feature, fIdx) => (
                          <motion.div
                            key={fIdx}
                            className="flex items-start gap-2 text-xs text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: fIdx * 0.05 + 0.9 }}
                          >
                            <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button className="gap-2 bg-gradient-primary hover:opacity-90">
                          <ExternalLink className="h-4 w-4" />
                          Ver Projeto
                        </Button>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
