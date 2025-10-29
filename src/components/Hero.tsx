import { Button } from "@/components/ui/button";
import { Download, Phone, Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import TypewriterText from "./TypewriterText";
import AvailableStatus from "./AvailableStatus";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Hero = () => {
  return (
    <TooltipProvider>
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        {/* Animated floating elements with motion */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl"
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"
            animate={{ y: [0, -40, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-3xl"
            animate={{ y: [0, -35, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 container mx-auto max-w-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Mobile Layout - Vertical */}
          <div className="md:hidden flex flex-col items-center text-center space-y-8">
            {/* Profile Picture with Holographic Border */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-conic animate-spin-slow blur-md opacity-75" />
              <div className="absolute inset-0 rounded-full bg-gradient-primary blur-xl opacity-50 animate-pulse-glow" />
              <img
                src={profileImg}
                alt="Augusto Ferreira da Silva"
                className="relative w-32 h-32 rounded-full border-4 border-primary/50 shadow-primary-glow object-cover"
              />
            </motion.div>

            {/* Status Badge */}
            <AvailableStatus />

            {/* Name and Title with Glitch Effect */}
            <div className="space-y-4">
              <motion.h1
                className="text-4xl font-bold leading-tight text-glitch"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                AUGUSTO FERREIRA DA SILVA
              </motion.h1>
              <div className="h-1 w-32 bg-gradient-primary mx-auto rounded-full" />
              <p className="text-xl text-secondary">
                <TypewriterText
                  text="Desenvolvedor Full Stack & Mobile"
                  delay={80}
                />
              </p>
            </div>

            {/* Description */}
            <p className="text-base text-muted-foreground max-w-md">
              3+ anos de experiência em Flutter, React.js e React Native,
              Python/Django e desenvolvimento web. Especializado em criar
              aplicações completas desde o conceito até o deploy.
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-3 justify-center pt-4">
              {[
                "Flutter/Dart",
                "React.js",
                "React Native",
                "Python/Django",
                "Node.js",
              ].map((tech) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover-scale"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Action Buttons - Icon only except CV */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#contato">
                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        className="gap-2 shadow-primary-glow hover:shadow-accent-glow transition-shadow"
                      >
                        <Mail className="h-5 w-5" />
                      </Button>
                    </motion.div>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Entrar em Contato</p>
                </TooltipContent>
              </Tooltip>

              <a
                href="/Augusto_Ferreira_da_Silva_CV.pdf"
                download="Augusto_Ferreira_Silva_CV.pdf"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 border-accent/50 hover:bg-accent/10"
                  >
                    <Download className="h-5 w-5" />
                    <span className="hidden sm:inline">Baixar CV</span>
                    <span className="sm:hidden">CV</span>
                  </Button>
                </motion.div>
              </a>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.linkedin.com/in/augusto-ferreira-76810b190"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        variant="secondary"
                        className="gap-2 shadow-secondary-glow"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </motion.div>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://github.com/augusto49"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="gap-2 border-primary/50 hover:bg-primary/10"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                    </motion.div>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* Desktop/Tablet Layout - Horizontal */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {/* Profile Picture with Holographic Border */}
            <motion.div
              className="relative group flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-conic animate-spin-slow blur-md opacity-75" />
              <div className="absolute inset-0 rounded-full bg-gradient-primary blur-xl opacity-50 animate-pulse-glow" />
              <img
                src={profileImg}
                alt="Augusto Ferreira da Silva"
                className="relative w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full border-4 border-primary/50 shadow-primary-glow object-cover"
              />
            </motion.div>

            {/* Content */}
            <div className="flex-1 space-y-6 text-left">
              {/* Status Badge */}
              <AvailableStatus />

              {/* Name and Title with Glitch Effect */}
              <div className="space-y-3">
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-glitch"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  AUGUSTO FERREIRA DA SILVA
                </motion.h1>
                <div className="h-1 w-32 bg-gradient-primary rounded-full" />
                <p className="text-xl md:text-2xl text-secondary">
                  <TypewriterText
                    text="Desenvolvedor Full Stack & Mobile"
                    delay={80}
                  />
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground max-w-2xl">
                3+ anos de experiência em Flutter, React.js e React Native,
                Python/Django e desenvolvimento web. Especializado em criar
                aplicações completas desde o conceito até o deploy.
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  "Flutter/Dart",
                  "React.js",
                  "React Native",
                  "Python/Django",
                  "Node.js",
                ].map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover-scale"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Action Buttons - Icon only except CV */}
              <div className="flex flex-wrap gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="#contato">
                      <motion.div
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="lg"
                          className="gap-2 shadow-primary-glow hover:shadow-accent-glow transition-shadow"
                        >
                          <Mail className="h-5 w-5" />
                        </Button>
                      </motion.div>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Entrar em Contato</p>
                  </TooltipContent>
                </Tooltip>

                <a
                  href="/Augusto_Ferreira_da_Silva_CV.pdf"
                  download="Augusto_Ferreira_Silva_CV.pdf"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="gap-2 border-accent/50 hover:bg-accent/10"
                    >
                      <Download className="h-5 w-5" />
                      Baixar CV
                    </Button>
                  </motion.div>
                </a>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.linkedin.com/in/augusto-ferreira-76810b190"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="lg"
                          variant="secondary"
                          className="gap-2 shadow-secondary-glow"
                        >
                          <Linkedin className="h-5 w-5" />
                        </Button>
                      </motion.div>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://github.com/augusto49"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="lg"
                          variant="outline"
                          className="gap-2 border-primary/50 hover:bg-primary/10"
                        >
                          <Github className="h-5 w-5" />
                        </Button>
                      </motion.div>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              {/* Contact Info */}
              <div className="flex gap-6 pt-4 text-muted-foreground">
                <a
                  href="tel:+5592992107783"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">(92) 9 9210-7783</span>
                </a>
                <a
                  href="mailto:ferreiraaugusto918@gmail.com"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">ferreiraaugusto918@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
            <motion.div
              className="w-1.5 h-3 bg-primary rounded-full mx-auto"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>
    </TooltipProvider>
  );
};

export default Hero;
