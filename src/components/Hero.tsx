import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{
      animationDelay: "1s"
    }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-md opacity-50 animate-glow" />
              <img src={profileImg} alt="Augusto Ferreira da Silva" className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/50 shadow-glow" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Augusto Ferreira da Silva
            </h1>
            <div className="h-1 w-32 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">
            Desenvolvedor Full Stack & Mobile
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">3+ anos de experiência em Flutter, React.js e React Native, Python/Django e desenvolvimento web. Especializado em criar aplicações completas desde o conceito até o deploy.</p>

          <div className="flex flex-wrap gap-3 justify-center pt-4">
            <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium">Flutter/Dart</span>
            <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium">React.js</span>
            <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium">React Native</span>
            <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium">Python/Django</span>
            <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium">Node.js</span>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <a href="#contato">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all">
                <Mail className="mr-2 h-5 w-5" />
                Entrar em Contato
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/augusto-ferreira-76810b190" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </a>
          </div>

          <div className="flex gap-6 justify-center pt-8 text-muted-foreground">
            <a href="tel:+5592992107783" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-sm">(92) 9 9210-7783</span>
            </a>
            <a href="mailto:ferreiraaugusto918@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              <span className="text-sm">ferreiraaugusto918@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-glow" />
        </div>
      </div>
    </section>;
};
export default Hero;