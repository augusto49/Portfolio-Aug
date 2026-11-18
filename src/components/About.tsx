import { User } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="sobre" className="py-20 px-6">
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
              <User className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Sobre Mim
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              Perfil Profissional
            </motion.h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <motion.div
            className="glass-card card-rainbow rounded-2xl p-8 md:p-12 radar-pulse transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
           <p className="text-lg leading-relaxed text-muted-foreground">
  Minha jornada na tecnologia começou no{" "}
  <span className="text-primary font-semibold">design</span>. Formado em
  Design Gráfico, passei 5 anos em UX/UI, onde aprendi a pensar em quem usa o
  produto, e foi trabalhando ao lado de equipes de engenharia que descobri
  minha paixão por transformar ideias em soluções digitais. Hoje, curso
  Análise e Desenvolvimento de Sistemas e atuo como{" "}
  <span className="text-secondary font-semibold">
    desenvolvedor Full Stack
  </span>
  , com foco em <span className="text-primary font-semibold">IA</span>, integração de sistemas e automação de processos que
  entregam valor real para usuários e negócios.
</p>
<p className="text-lg leading-relaxed text-muted-foreground mt-6">
  Nos últimos anos, trabalhei em projetos desafiadores, como o resgate e a
  reconstrução do portal{" "}
  <span className="text-primary font-semibold">Nativa Fácil</span>, de uma
  operadora de saúde, com React, TypeScript e Supabase, além de integrações
  com <span className="text-secondary font-semibold">ERPs por API</span> e automações com Python. Também fui instrutor de
  programação, o que me ensinou a explicar e documentar o que construo. Essa
  vivência me deu uma visão completa do ciclo de criação de software, do
  design ao deploy.
</p>
<p className="text-lg leading-relaxed text-muted-foreground mt-6">
  Busco sempre{" "}
  <span className="text-accent font-semibold">
    código limpo, interfaces claras
  </span>{" "}
  e soluções que unam tecnologia, boa experiência de uso e impacto. Estou
  aberto a novos desafios que envolvam IA, automação e desenvolvimento de
  produtos digitais com propósito.
</p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                value: "1+",
                label: "Ano de Experiência com FullStack",
                color: "text-primary",
                delay: 0.5,
              },
              {
                value: "5+",
                label: "Anos de Experiência com UX/UI",
                color: "text-secondary",
                delay: 0.6,
              },
              {
                value: "15+",
                label: "Tecnologias",
                color: "text-accent",
                delay: 0.7,
              },
              {
                value: "3+",
                label: "Projetos Entregues",
                color: "text-primary",
                delay: 0.8,
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="glass-card card-rainbow rounded-xl p-6 radar-pulse transition-all text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: stat.delay }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <motion.div
                  className={`text-3xl font-bold ${stat.color} mb-2`}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: stat.delay + 0.2, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
