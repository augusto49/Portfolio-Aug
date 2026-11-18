import {
  BrainCircuit,
  Code2,
  Database,
  Palette,
  PlugZap,
  Server,
  Sparkles,
  UsersRound,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import {
  SiFlutter,
  SiReact,
  SiFirebase,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiHtml5,
  SiBootstrap,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiGraphql,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandReactNative, TbApi } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";

// Map skill names to their icons and colors
const skillIcons: Record<string, { icon: React.ElementType; color: string }> = {
  "Prompt Engineering": { icon: Sparkles, color: "#A78BFA" },
  "IA no desenvolvimento": { icon: BrainCircuit, color: "#8B5CF6" },
  "Integração com API de IA": { icon: PlugZap, color: "#38BDF8" },
  "Automação com IA": { icon: Workflow, color: "#34D399" },
  "UX/UI e Design System": { icon: Palette, color: "#F472B6" },
  "Pesquisa com usuários": { icon: UsersRound, color: "#FBBF24" },
  "Flutter/Dart": { icon: SiFlutter, color: "#02569B" },
  "React Native": { icon: TbBrandReactNative, color: "#61DAFB" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  GetX: { icon: SiFlutter, color: "#8B5CF6" },
  MobX: { icon: SiReact, color: "#FF9955" },
  Modular: { icon: SiFlutter, color: "#02569B" },
  React: { icon: SiReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  "HTML/CSS": { icon: SiHtml5, color: "#E34F26" },
  Bootstrap: { icon: SiBootstrap, color: "#7952B3" },
  Python: { icon: SiPython, color: "#3776AB" },
  "Django REST": { icon: SiDjango, color: "#092E20" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  GraphQL: { icon: SiGraphql, color: "#E10098" },
  "REST APIs": { icon: TbApi, color: "#6366F1" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  "SQL Server": { icon: DiMsqlServer, color: "#CC2927" },
};

const skillCategories = [
 
  {
    title: "Frontend",
    icon: Code2,
    color: "text-secondary",
    skills: [
      { name: "React", level: 60 },
      { name: "TypeScript", level: 60 },
      { name: "JavaScript", level: 60 },
      { name: "Next.js", level: 40 },
      { name: "HTML/CSS", level: 95 },
      { name: "Bootstrap", level: 90 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-accent",
    skills: [
      { name: "Python", level: 60 },
      { name: "Django REST", level: 0 },
      { name: "Node.js", level: 50 },
      
      { name: "REST APIs", level: 40 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "text-primary",
    skills: [
      { name: "MySQL", level: 50 },
      { name: "PostgreSQL", level: 50 },
      { name: "SQL Server", level: 50 },
      { name: "Firebase", level: 50 },
    ],
  },

   {
    title: "IA & Produto",
    icon: BrainCircuit,
    color: "text-primary",
    skills: [
      { name: "Prompt Engineering", level: 0 },
      { name: "IA no desenvolvimento", level: 0 },
      { name: "Integração com API de IA", level: 0 },
      { name: "Automação com IA", level: 0 },
      { name: "UX/UI e Design System", level: 70 },
      { name: "Pesquisa com usuários", level: 70 },
    ],
  },
];

const getSkillLevelLabel = (level: number) => {
  if (level === 0) return "ESTAGIÁRIO";
  if (level >= 85) return "SENIOR";
  if (level >= 70) return "PLENO";
  return "JR";
};

const getSkillLevelStyle = (level: number) => {
  if (level === 0) return "bg-sky-500/15 text-sky-300 border-sky-500/30";
  if (level >= 85) return "bg-emerald-500/15 text-emerald-400 border-emerald-500/30";
  if (level >= 70) return "bg-violet-500/15 text-violet-300 border-violet-500/30";
  return "bg-amber-500/15 text-amber-300 border-amber-500/30";
};

const SkillProgress = ({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [count, setCount] = useState(0);

  const skillIcon = skillIcons[name];
  const IconComponent = skillIcon?.icon;
  const levelLabel = getSkillLevelLabel(level);
  const levelStyle = getSkillLevelStyle(level);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = level;
      const duration = 1500;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, level]);

  return (
    <motion.div
      ref={ref}
      className="space-y-2"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex justify-between items-center gap-3">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          {IconComponent && (
            <IconComponent
              className="h-4 w-4 flex-shrink-0"
              style={{ color: skillIcon.color }}
            />
          )}
          <span className="text-sm font-medium truncate">{name}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-sm font-bold text-primary">{count}%</span>
          <span
            className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${levelStyle}`}
          >
            {levelLabel}
          </span>
        </div>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-primary rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ delay, duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
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
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Competências
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              Stack para IA e Produtos Digitais
            </motion.h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={idx}
                  className="glass-card card-rainbow rounded-xl p-6 space-y-4 radar-pulse transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.1 + 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      className={`p-3 rounded-lg bg-primary/10 ${category.color}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIdx) => (
                      <SkillProgress
                        key={skillIdx}
                        name={skill.name}
                        level={skill.level}
                        delay={idx * 0.1 + skillIdx * 0.05 + 0.5}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="bg-gradient-primary p-8 rounded-xl text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">Outras Competências</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Git/GitHub",                
                "Deploy",
                "Copilot",
                "UI/UX",                
                "Claude",
              ].map((skill, idx) => (
                <motion.span
                  key={idx}
                  className="px-4 py-2 bg-background/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium radar-pulse-button"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.9 + idx * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
