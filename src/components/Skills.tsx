import { Code2, Database, Smartphone, Server } from "lucide-react";
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
    title: "Mobile",
    icon: Smartphone,
    color: "text-primary",
    skills: [
      { name: "Flutter/Dart", level: 90 },
      { name: "React Native", level: 75 },
      { name: "Firebase", level: 80 },
      { name: "GetX", level: 85 },
      { name: "MobX", level: 75 },
      { name: "Modular", level: 80 },
    ],
  },
  {
    title: "Frontend",
    icon: Code2,
    color: "text-secondary",
    skills: [
      { name: "React", level: 88 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "Next.js", level: 67 },
      { name: "HTML/CSS", level: 92 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-accent",
    skills: [
      { name: "Python", level: 88 },
      { name: "Django REST", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "GraphQL", level: 55 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "text-primary",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "SQL Server", level: 80 },
      { name: "Firebase", level: 88 },
    ],
  },
];

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
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {IconComponent && (
            <IconComponent
              className="h-4 w-4"
              style={{ color: skillIcon.color }}
            />
          )}
          <span className="text-sm font-medium">{name}</span>
        </div>
        <span className="text-sm font-bold text-primary">{count}%</span>
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
              Skills Técnicas
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
                "Docker",
                "Deploy",
                "Pandas",
                "UI/UX",
                "GLPI",
                "Active Directory",
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
