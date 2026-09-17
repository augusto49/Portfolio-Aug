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

const calculateDuration = (startDate: Date) => {
  const now = new Date();
  let months = (now.getFullYear() - startDate.getFullYear()) * 12;
  months -= startDate.getMonth();
  months += now.getMonth();
  
  // Contagem inclusiva (ex: Abril a Setembro = 6 meses)
  months += 1;

  if (months < 1) return "Menos de 1 mês";
  if (months === 1) return "1 mês";
  if (months < 12) return `${months} meses`;
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  let result = years === 1 ? "1 ano" : `${years} anos`;
  if (remainingMonths === 1) result += " e 1 mês";
  else if (remainingMonths > 1) result += ` e ${remainingMonths} meses`;
  
  return result;
};

const experiences = [
  {
    title: "Desenvolvedor Mobile (PJ)",
    company: "Hammer Consult",
    period: "Abr/2026 - o momento",
    duration: calculateDuration(new Date(2026, 3, 1)), // 3 = Abril
    location: "Remoto",
    description: "Atuação principal no desenvolvimento e evolução do ecossistema mobile do projeto Samae, com interações e suporte esporádico ao backend e DevOps.",
    sections: [
      {
        title: "Desenvolvimento Mobile",
        icon: Smartphone,
        items: [
          "Construção de aplicativo multiplataforma (Android, iOS, Web e Desktop) para gestão de Ordens de Serviço utilizando Flutter e Dart",
          "Desenvolvimento de aplicativos híbridos para atendimento digital e coleta de dados utilizando TypeScript, Angular, Ionic e Capacitor"
        ],
      },
      {
        title: "Suporte Backend & DevOps",
        icon: Code2,
        items: [
          "Atuação pontual na manutenção de portais corporativos e APIs utilizando C#, .NET Framework e ASP.NET MVC",
          "Suporte esporádico na modelagem e consumo de dados utilizando Oracle (ODP.NET) e SQL Server",
          "Acompanhamento e suporte nas esteiras de CI/CD (Azure DevOps e Codemagic) para automação de builds e deploys"
        ],
      }
    ],
  },
  {
    title: "Desenvolvedor Full Stack & Mobile",
    company: "Grupo Rede Amazônica",
    period: "Nov/2022 - Nov/2024",
    duration: "2 anos",
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
          "Responsável pela publicação e atualização nas lojas Play Store e App Store",
        ],
      },
      {
        title: "Desenvolvimento Full Stack",
        icon: Code2,
        items: [
          "Desenvolvimento de backend robusto utilizando Django com arquitetura MVT",
          "Criação de APIs REST para integração com aplicativos mobile e frontend",
          "Desenvolvimento de frontend responsivo com React.js e Next.js",
          "Automação de relatórios gerenciais utilizando Pandas e exportação para Excel",
        ],
      },
    ],
  },
  {
    title: "Estagiário de Suporte T.I",
    company: "Grupo Rede Amazônica",
    period: "Dez/2021 - Nov/2022",
    duration: "1 ano",
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
        ],
      },
    ],
  },
  {
    title: "Desenvolvedor Web - Estagiário",
    company: "Agência de Defesa Agropecuária e Florestal (ADAF)",
    period: "Nov/2021 - Dez/2021",
    duration: "2 meses",
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
        ],
      },
    ],
  },
  {
    title: "Desenvolvedor Full Stack & Consultor de TI",
    company: "Autônomo (Empresa Própria)",
    period: "Jan/2019 - Mai/2022",
    duration: "3 anos e 5 meses",
    location: "Manaus - AM",
    description:
      "Atuação autônoma oferecendo soluções completas em TI, gerenciando todo o ciclo de vida dos projetos, desde a prospecção até o suporte pós-venda.",
    sections: [
      {
        title: "Serviços de Desenvolvimento",
        icon: Code2,
        items: [
          "Desenvolvimento de sistemas web (full stack) com Python/Django, React.js, Next.js e TypeScript",
          "Desenvolvimento de aplicativos mobile híbridos com Flutter/Dart para Android e iOS",
          "Criação de sites institucionais, e-commerces e integração com APIs REST e meios de pagamento",
          "Modelagem de banco de dados e arquitetura de soluções escaláveis",
          "Projeto destaque: Site Ndutra Imobiliária (desenvolvimento full stack completo até deploy em produção)",
        ],
      },
      {
        title: "Infraestrutura & Suporte",
        icon: Server,
        items: [
          "Consultoria técnica em infraestrutura de TI para pequenas e médias empresas",
          "Montagem, configuração e manutenção de redes, computadores e servidores (Windows e Linux)",
          "Suporte técnico presencial/remoto, backup, recuperação de dados e migração de sistemas",
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
            {/* Timeline line - Desktop */}
            <motion.div
              className="absolute left-[39px] top-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
            />

            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.2 + 0.6 }}
                >
                  {/* Timeline node with year - Desktop */}
                  <div className="hidden md:flex absolute left-0 top-0 flex-col items-center">
                    {/* Year badge */}
                    <motion.div
                      className="absolute -left-16 top-4 text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: idx * 0.2 + 0.9 }}
                    >
                      {exp.period.split(" - ")[0].split("/")[1]}
                    </motion.div>

                    {/* Node circle */}
                    <motion.div
                      className="relative w-10 h-10 rounded-full bg-card border-4 border-primary flex items-center justify-center z-10"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: idx * 0.2 + 0.8, type: "spring" }}
                    >
                      <Briefcase className="h-4 w-4 text-primary" />
                      {/* Pulse effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: idx * 0.3,
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Experience card */}
                  <motion.div
                    className="md:ml-20 glass-card card-rainbow rounded-xl p-5 md:p-6 radar-pulse transition-all"
                    whileHover={{ y: -5, x: 5 }}
                  >
                    <div className="space-y-4">
                      {/* Header */}
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-xl md:text-2xl font-bold">
                            {exp.title}
                          </h3>
                          <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs font-medium rounded-full">
                            {exp.duration}
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                          <span className="font-semibold text-primary">
                            {exp.company}
                          </span>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Sections */}
                      {exp.sections.map((section, sIdx) => {
                        const Icon = section.icon;
                        return (
                          <div key={sIdx} className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Icon className="h-4 w-4 text-secondary" />
                              <h4 className="font-semibold text-secondary">
                                {section.title}
                              </h4>
                            </div>
                            <div className="grid gap-1.5 pl-6">
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
