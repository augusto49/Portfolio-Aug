import { Info, Languages, Car, Briefcase, Palette } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const additionalInfo = [
  {
    icon: Languages,
    title: "Idiomas",
    items: [
      { label: "Português", value: "Nativo" },
      { label: "Inglês", value: "Leitura e escrita" },
      { label: "Espanhol", value: "Leitura e escrita" },
    ],
  },
  {
    icon: Car,
    title: "Mobilidade",
    items: [
      { label: "CNH", value: "Categoria B" },
      { label: "Disponibilidade", value: "Para viagens" },
    ],
  },
  {
    icon: Briefcase,
    title: "Disponibilidade",
    items: [
      { label: "Trabalho", value: "Presencial, híbrido ou remoto" },
      { label: "Regime", value: "CLT, PJ ou Freelancer" },
    ],
  },
  {
    icon: Palette,
    title: "Ferramentas",
    items: [
      { label: "Design", value: "Figma, Adobe XD" },
      { label: "Prototipação", value: "Experiência com UI/UX" },
    ],
  },
];

const AdditionalInfo = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="info-adicionais" className="py-20 px-6">
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
              <Info className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Informações
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              Informações Adicionais
            </motion.h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  className="glass-card card-rainbow rounded-xl p-6 radar-pulse transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.1 + 0.4 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="p-3 rounded-lg bg-primary/10 text-primary"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>
                    <h3 className="text-lg font-bold">{info.title}</h3>
                  </div>

                  {/* Items */}
                  <div className="space-y-3">
                    {info.items.map((item, iIdx) => (
                      <motion.div
                        key={iIdx}
                        className="flex justify-between items-start text-sm gap-4"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: idx * 0.1 + iIdx * 0.05 + 0.5 }}
                      >
                        <span className="text-muted-foreground shrink-0 mt-0.5">
                          {item.label}
                        </span>
                        <span className="font-medium text-primary text-right">
                          {item.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
