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
              Sou desenvolvedor Full Stack com ênfase em Mobile, com{" "}
              <span className="text-primary font-semibold">
                3+ anos de experiência prática
              </span>{" "}
              em Flutter/Dart e projetos web, atuando também com React.js e
              React Native, Next.js e backend com Python/Django e Node.js.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-6">
              Tenho vivência em projetos completos, desde o desenvolvimento até
              o deploy, incluindo{" "}
              <span className="text-secondary font-semibold">
                publicação nas lojas
              </span>{" "}
              (Play Store e App Store), consumo de APIs REST e GraphQL,
              versionamento com Git, integração com Firebase e uso de bancos
              relacionais.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                value: "3+",
                label: "Anos de Experiência",
                color: "text-primary",
                delay: 0.5,
              },
              {
                value: "15+",
                label: "Tecnologias",
                color: "text-secondary",
                delay: 0.6,
              },
              {
                value: "2+",
                label: "Projetos Entregues",
                color: "text-accent",
                delay: 0.7,
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
