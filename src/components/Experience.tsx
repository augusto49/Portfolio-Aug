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
    title: "Desenvolvedor Full Stack JR",
    company: "Innova Plano de Saúde",
    period: "Fev/2026 - Atual",
    duration: "Cargo Atual",
    location: "Manaus - AM",
    description:
      "Desenvolvimento de soluções digitais com foco em experiência, automação e integração de sistemas, com forte atuação em frontend, backend e IA aplicada a produtos reais.",
    sections: [
    
      {
        title: "Desenvolvimento Full Stack JR",
        icon: Code2,
        items: [
          "Resgate e reconstrução do portal Nativa Fácil 2.0 com React, TypeScript, Tailwind e Supabase (PostgreSQL), com deploy na Vercel",
          "Criação de APIs REST para integração entre sistemas e frontend",
          "Reconstrução do site institucional de WordPress para React, Vite e Supabase",
          "Automação de relatórios gerenciais utilizando Pandas e exportação para Excel",
        ],
      },
    ],
  },
  
    
  {
    title: "Professor de Programação",
    company: "CETAM - Centro de Educação Tecnológica do Amazonas",
    period: "Jan/2025 - Dez/2025",
    duration: "12 meses",
    location: "Manaus - AM",
    description:
      "Atuação no planejamento pedagógico e na ministração de aulas teóricas e práticas na área de tecnologia.",
    sections: [
      {
        title: "Responsabilidades",
        icon: Code2,
        items: [
          "Lógica de Programação I e II (Python): Ensino estruturado dos fundamentos do pensamento computacional, algoritmos, estruturas de controle/repetição, funções, manipulação de dados e introdução à resolução de problemas reais com Python.",
          "Montagem e Manutenção de Computadores: Condução de laboratórios práticos focados em arquitetura de hardware, diagnóstico e reparo de defeitos, substituição de componentes, montagem de periféricos, formatação e configuração de sistemas operacionais.",
          "Informática Básica e Produtividade: Treinamento em sistemas operacionais, navegação segura, conceitos de rede e uso das principais ferramentas de escritório e produtividade digital.",
        ],
      },
    ],
  },
  {
    title: "UX UI Designer",
    company: "CERTI AMAZONAS",
    period: "Jan/2020 - Dez/2024",
    duration: "4 anos",
    location: "Manaus - AM",
    description:
      "Atuação no planejamento pedagógico e na ministração de aulas teóricas e práticas na área de tecnologia.",
    sections: [
      {
        title: "Responsabilidades",
        icon: Code2,
        items: [
          "Liderar projetos de design para plataformas web e mobile, impactando no aumento de conversões.",
          "Conduzir pesquisas de usuários, incluindo entrevistas e testes de usabilidade, resultando em melhorias significativas no fluxo de navegação.",
          "Criar wireframes, protótipos e interfaces completas para produtos digitais, garantindo conformidade com as melhores práticas de acessibilidade (WCAG).",
          "Colaborar com equipes de desenvolvimento e produto em um ambiente ágil para implementar soluções otimizadas.",
          "Desenvolver design systems escaláveis para diferentes produtos, melhorando a consistência visual em 100% das interfaces.",
          "Participar de workshops de co-criação com clientes e stakeholders, aumentando a eficiência no alinhamento de requisitos.",
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
