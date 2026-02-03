import { ExternalLink, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import {
  SiReact,
  SiTypescript,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiGraphql,
  SiGooglemaps,
} from "react-icons/si";
import ndutratImobiliaria from "@/assets/ndutra-imobiliaria.png";
import euAmazonia from "@/assets/eu-amazonia.png";

// Map technology names to their icons and colors
const techIcons: Record<string, { icon: React.ElementType; color: string }> = {
  React: { icon: SiReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Python: { icon: SiPython, color: "#3776AB" },
  Django: { icon: SiDjango, color: "#092E20" },
  "Django REST": { icon: SiDjango, color: "#092E20" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  Flutter: { icon: SiFlutter, color: "#02569B" },
  Dart: { icon: SiDart, color: "#0175C2" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  GraphQL: { icon: SiGraphql, color: "#E10098" },
  "Google Maps": { icon: SiGooglemaps, color: "#4285F4" },
};

const projects = [
  {
    title: "Ndutra Imobiliária",
    subtitle: "Sistema Imobiliário Completo",
    description:
      "Plataforma completa para imobiliária com listagem de imóveis, busca avançada, dashboard administrativo, gestão de clientes e integração de contato.",
    image: ndutratImobiliaria,
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
  {
    title: "EU Amazônia",
    subtitle: "Rede Social de Jornalismo Colaborativo",
    description:
      "Aplicativo híbrido que conecta telespectadores ao jornalismo, permitindo compartilhar notícias, criar relatos e participar de enquetes. Desenvolvido para a Rede Amazônica de Televisão.",
    image: euAmazonia,
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.redeamazonica.euamazonia",
    technologies: ["Flutter", "Dart", "Firebase", "GraphQL", "Google Maps"],
    features: [
      "Sistema de cadastro completo",
      "Upload de mídia (fotos/vídeos)",
      "Notificações push com Firebase",
      "Geolocalização com Google Maps",
      "Sistema de denúncias",
      "WebView embarcado",
      "Sistema de enquetes",
      "Bloqueio de usuários",
    ],
    type: "Emprego",
    year: "2023",
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="glass-card card-rainbow rounded-xl overflow-hidden radar-pulse transition-all flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.2 + 0.5 }}
                whileHover={{ y: -5 }}
              >
                {/* Project Image/Preview */}
                <div className="relative h-56 w-full overflow-hidden group flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to gradient if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement?.classList.add(
                        "bg-gradient-to-br",
                        "from-primary/30",
                        "to-secondary/30",
                      );
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  {/* Type Badge */}
                  <motion.div
                    className="absolute top-3 right-3 px-2.5 py-1 bg-accent/20 backdrop-blur-sm rounded-full text-[10px] font-medium text-accent border border-accent/30"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 }}
                  >
                    {project.type} • {project.year}
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Title */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold line-clamp-1">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies with Icons */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-secondary mb-2">
                      Tecnologias
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech, tIdx) => {
                        const techIcon = techIcons[tech];
                        const IconComponent = techIcon?.icon;
                        return (
                          <motion.span
                            key={tIdx}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-medium"
                            whileHover={{ scale: 1.05 }}
                          >
                            {IconComponent && (
                              <IconComponent
                                className="h-3 w-3"
                                style={{ color: techIcon.color }}
                              />
                            )}
                            {tech}
                          </motion.span>
                        );
                      })}
                      {project.technologies.length > 5 && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/5 border border-primary/10 rounded-full text-[10px] font-medium text-muted-foreground">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6 flex-grow">
                    <h4 className="text-xs font-semibold text-secondary mb-2">
                      Principais Funcionalidades
                    </h4>
                    <div className="grid grid-cols-1 gap-1">
                      {project.features.slice(0, 4).map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2 text-[11px] text-muted-foreground"
                        >
                          <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-auto pt-2">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full gap-2 bg-gradient-primary hover:opacity-90 h-9 text-sm">
                        <ExternalLink className="h-3.5 w-3.5" />
                        Ver Projeto
                      </Button>
                    </motion.a>
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
