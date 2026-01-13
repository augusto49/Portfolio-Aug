import {
  Briefcase,
  Calendar,
  MapPin,
  Smartphone,
  Code2,
  Server,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    title: "Desenvolvedor Full Stack & Mobile",
    company: "Grupo Rede Amazônica",
    period: "Nov/2022 - Nov/2024",
    location: "Manaus - AM",
    description:
      "Desenvolvimento de aplicativo híbrido Flutter/Dart com arquitetura MVC, integrando plataforma de notícias colaborativa com funcionalidades de rede social.",
    sections: [
      {
        title: "Desenvolvimento Mobile",
        icon: Smartphone,
        items: [
          "Desenvolvimento de aplicativo híbrido com Flutter/Dart, integrando plataforma de notícias colaborativa com funcionalidades de rede social",
          "Implementação de arquitetura MVC com gerenciamento de estado GetX",
          "Integração com API GraphQL para consumo de dados dinâmicos",
          "Configuração e integração do Firebase para notificações push e analytics",
          "Integração com Google Maps API para funcionalidades de geolocalização",
          "Desenvolvimento de funcionalidades completas: sistema de cadastro, upload de mídia, sistema de denúncias, WebView embarcado, bloqueio de usuários",
          "Responsável pela publicação e atualização nas lojas Play Store e App Store",
          "Desenvolvimento paralelo em React Native para projetos específicos",
        ],
      },
      {
        title: "Desenvolvimento Full Stack",
        icon: Code2,
        items: [
          "Desenvolvimento de backend robusto utilizando Django com arquitetura MVT",
          "Criação de APIs REST para integração com aplicativos mobile e frontend",
          "Desenvolvimento de frontend responsivo com React.js e Next.js",
          "Implementação de requisições AJAX e Bootstrap para interfaces dinâmicas",
          "Desenvolvimento de funcionalidades web: sistema de denúncias, enquetes interativas, painel administrativo de notícias",
          "Automação de relatórios gerenciais utilizando Pandas e exportação para Excel",
          "Manutenção e evolução de sistemas legados",
        ],
      },
    ],
  },
  {
    title: "Estagiário de Suporte T.I",
    company: "Grupo Rede Amazônica",
    period: "Dez/2021 - Nov/2022",
    location: "Manaus - AM",
    description:
      "Suporte técnico, manutenção de equipamentos e sistemas, uso de GLPI e Active Directory.",
    sections: [
      {
        title: "Responsabilidades",
        icon: Server,
        items: [
          "Suporte técnico presencial e remoto aos colaboradores",
          "Manutenção preventiva e corretiva de equipamentos de informática",
          "Gestão de chamados através do sistema GLPI",
          "Administração de usuários e permissões no Active Directory",
          "Montagem, configuração e reparo de computadores e periféricos",
          "Suporte em infraestrutura de rede e telecomunicações",
        ],
      },
    ],
  },
  {
    title: "Desenvolvedor Web - Estagiário",
    company: "Agência de Defesa Agropecuária e Florestal (ADAF)",
    period: "Nov/2021 - Dez/2021",
    location: "Manaus - AM",
    description:
      "Desenvolvimento e manutenção do site institucional, configuração de hospedagem e back-end.",
    sections: [
      {
        title: "Responsabilidades",
        icon: Code2,
        items: [
          "Desenvolvimento e manutenção do site institucional da ADAF",
          "Atualização de conteúdo e implementação de novas funcionalidades",
          "Configuração de hospedagem web e manutenção de back-end",
          "Otimização de performance e responsividade do site",
        ],
      },
    ],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experiencia" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          className="space-y-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center space-y-4">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Briefcase className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Trajetória
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              Trajetória Profissional
            </motion.h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Animated Timeline line */}
            <motion.div
              className="absolute left-8 top-0 w-0.5 bg-gradient-primary hidden md:block"
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
            />

            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.2 + 0.6 }}
                >
                  {/* Pulsing Timeline dot */}
                  <motion.div
                    className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: idx * 0.2 + 0.8, type: "spring" }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.3,
                      }}
                    />
                  </motion.div>

                  <motion.div
                    className="md:ml-20 glass-card card-rainbow rounded-xl p-6 md:p-8 radar-pulse transition-all"
                    whileHover={{ y: -5, x: 5 }}
                  >
                    <div className="space-y-6">
                      {/* Header */}
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                          <span className="font-semibold text-primary">
                            {exp.company}
                          </span>
                          <span className="hidden sm:inline">•</span>
                          <span className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </span>
                          <span className="hidden sm:inline">•</span>
                          <span className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Sections */}
                      {exp.sections.map((section, sIdx) => {
                        const Icon = section.icon;
                        return (
                          <div key={sIdx} className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Icon className="h-5 w-5 text-secondary" />
                              <h4 className="font-semibold text-lg text-secondary">
                                {section.title}
                              </h4>
                            </div>
                            <div className="space-y-2 pl-7">
                              {section.items.map((item, iIdx) => (
                                <motion.div
                                  key={iIdx}
                                  className="flex items-start gap-2"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={inView ? { opacity: 1, x: 0 } : {}}
                                  transition={{
                                    delay:
                                      idx * 0.2 + sIdx * 0.1 + iIdx * 0.03 + 1,
                                  }}
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">
                                    {item}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
