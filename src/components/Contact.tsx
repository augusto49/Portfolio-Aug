import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
const Contact = () => {
  return (
    <section id="contato" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Contato</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Vamos Trabalhar Juntos
            </h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estou disponível para novos projetos e oportunidades. Entre em
              contato!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-card transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:ferreiraaugusto918@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      ferreiraaugusto918@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-card transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Telefone</h3>
                    <a
                      href="tel:+5592992107783"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      + 55 (92) 9 9210-7783
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-card transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Localização</h3>
                    <p className="text-muted-foreground">Manaus, Amazonas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-secondary p-8 rounded-xl flex flex-col justify-center items-center text-center space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Pronto para começar?</h3>
                <p className="text-lg opacity-90">
                  Entre em contato para discutir seu projeto ou oportunidade
                </p>
              </div>

              <div className="space-y-4 w-full max-w-sm">
                <a href="mailto:ferreiraaugusto918@gmail.com" className="block">
                  <Button
                    size="lg"
                    className="w-full bg-background text-primary hover:bg-background/90"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Enviar Email
                  </Button>
                </a>

                <a
                  href="https://www.linkedin.com/in/augusto-ferreira-76810b190"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Button>
                </a>
              </div>

              <div className="pt-6 text-sm opacity-75">
                <p>24 anos • CNH B</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
