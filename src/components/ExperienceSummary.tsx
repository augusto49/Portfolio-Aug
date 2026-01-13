import { Briefcase, Smartphone, Layout, Server, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experienceCategories = [
  {
    title: "Desenvolvimento Full Stack",
    icon: Briefcase,
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
    iconColor: "text-primary",
    items: [
      "Experiência completa no ciclo de desenvolvimento de software, desde o planejamento até o deploy",
      "Desenvolvimento de soluções end-to-end integrando frontend, backend e mobile",
      "Arquitetura e implementação de APIs REST para comunicação entre sistemas",
      "Integração entre aplicativos mobile (Flutter/React Native) e backends (Django/Node.js)",
      "Gerenciamento de bancos de dados relacionais (MySQL, PostgreSQL, SQL Server)",
      "Versionamento de código e trabalho colaborativo com Git (GitHub)",
      "Experiência em deploy e manutenção de aplicações em produção",
    ],
  },
  {
    title: "Desenvolvimento Mobile",
    icon: Smartphone,
    color: "from-secondary/20 to-secondary/5",
    borderColor: "border-secondary/30",
    iconColor: "text-secondary",
    items: [
      "Desenvolvimento de aplicativos híbridos com Flutter/Dart e React Native para Android e iOS",
      "Arquitetura MVC e gerenciamento de estado (GetX, MobX, Modular)",
      "Integração com APIs REST e GraphQL",
      "Implementação de Firebase (autenticação, notificações push, analytics)",
      "Publicação e gestão de aplicativos na Play Store e App Store",
      "Integração com Google Maps API e serviços de geolocalização",
      "Desenvolvimento de funcionalidades: cadastro de usuários, sistema de denúncias, WebView, mídia",
    ],
  },
  {
    title: "Desenvolvimento Frontend",
    icon: Layout,
    color: "from-accent/20 to-accent/5",
    borderColor: "border-accent/30",
    iconColor: "text-accent",
    items: [
      "Desenvolvimento de interfaces responsivas com React.js, Next.js e Angular",
      "Conhecimento em HTML5, CSS, JavaScript, TypeScript e Bootstrap",
      "Implementação de requisições AJAX e consumo de APIs REST",
      "Desenvolvimento de painéis administrativos e dashboards",
      "Clean Architecture no desenvolvimento de interfaces",
      "Experiência com UI/UX e design de interfaces",
    ],
  },
  {
    title: "Desenvolvimento Backend",
    icon: Server,
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
    iconColor: "text-primary",
    items: [
      "Desenvolvimento de APIs REST com Django Rest Framework (Python)",
      "Arquitetura MVT (Model-View-Template) com Django",
      "Desenvolvimento backend com Node.js",
      "Integração e manipulação de bancos de dados relacionais",
      "Automação de relatórios com Pandas e Excel",
      "Sistema de enquetes, denúncias e gestão de conteúdo",
    ],
  },
  {
    title: "Competências e Contribuições",
    icon: Award,
    color: "from-secondary/20 to-secondary/5",
    borderColor: "border-secondary/30",
    iconColor: "text-secondary",
    items: [
      "Vivência com metodologias ágeis (Scrum, Kanban)",
      "Conhecimento em DevOps e processos de integração contínua",
      "Linguagem Python para automação e análise",
      "Suporte técnico e infraestrutura de TI (GLPI, Active Directory)",
      "Desenvolvimento de plataformas colaborativas",
      "Capacidade analítica, resolução de problemas e comunicação eficaz",
    ],
  },
];

const ExperienceSummary = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="resumo-experiencia" className="py-20 px-6">
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
              <span className="text-sm font-medium text-primary">
                Experiência
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              Resumo da Experiência Profissional
            </motion.h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Experience Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {experienceCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={idx}
                  className={`glass-card rounded-xl p-6 border ${category.borderColor} bg-gradient-to-br ${category.color} radar-pulse transition-all`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.1 + 0.4 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className={`p-3 rounded-lg bg-background/50 backdrop-blur-sm ${category.iconColor}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  {/* Items */}
                  <ul className="space-y-2">
                    {category.items.map((item, itemIdx) => (
                      <motion.li
                        key={itemIdx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: idx * 0.1 + itemIdx * 0.05 + 0.5 }}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${category.iconColor} bg-current mt-2 flex-shrink-0`}
                        />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSummary;
