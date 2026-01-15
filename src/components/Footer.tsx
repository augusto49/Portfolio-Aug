import { Github, Linkedin, Mail, Heart, Download } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/augusto49",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/augusto-ferreira-76810b190",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:ferreiraaugusto918@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="py-12 px-6 border-t border-border bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Augusto Ferreira
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Desenvolvedor Full Stack & Mobile
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-full hover:border-primary/50 hover:bg-primary/10 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
            <motion.a
              href="/Augusto Ferreira da Silva.pdf"
              download="Augusto_Ferreira_da_Silva_CV.pdf"
              className="p-3 bg-primary/10 border border-primary/30 rounded-full hover:bg-primary/20 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download CV"
            >
              <Download className="h-5 w-5 text-primary" />
            </motion.a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-muted-foreground">
            <a href="#sobre" className="hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a
              href="#experiencia"
              className="hover:text-primary transition-colors"
            >
              Experiência
            </a>
            <a href="#contato" className="hover:text-primary transition-colors">
              Contato
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Augusto Ferreira da Silva. Todos os
            direitos reservados.
          </p>
          <p className="flex items-center gap-1">
            Feito com <Heart className="h-4 w-4 text-red-500 fill-red-500" /> em
            Manaus, AM
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
