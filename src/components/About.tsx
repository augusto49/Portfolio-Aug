import { User } from "lucide-react";
const About = () => {
  return <section id="sobre" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <User className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Sobre Mim</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Perfil Profissional</h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-card hover:shadow-glow transition-all">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Sou desenvolvedor Full Stack com ênfase em Mobile, com <span className="text-primary font-semibold">3+ anos de experiência prática</span> em Flutter/Dart e projetos web, atuando também com React.js e React Native, Next.js e backend com Python/Django e Node.js.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-6">
              Tenho vivência em projetos completos, desde o desenvolvimento até o deploy, incluindo <span className="text-secondary font-semibold">publicação nas lojas</span> (Play Store e App Store), consumo de APIs REST e GraphQL, versionamento com Git, integração com Firebase e uso de bancos relacionais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
              <div className="text-3xl font-bold text-secondary mb-2">15+</div>
              <div className="text-muted-foreground">Tecnologias</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
              <div className="text-3xl font-bold text-accent mb-2">2+</div>
              <div className="text-muted-foreground">Projetos Entregues</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;