import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Desenvolvedor Full Stack & Mobile",
    company: "Grupo Rede Amazônica",
    period: "nov/2022 - nov/2024",
    description: "Desenvolvimento de aplicativo híbrido Flutter/Dart com arquitetura MVC, integrando API GraphQL, Firebase e Google Maps. Publicação nas lojas Play Store e App Store.",
    highlights: [
      "Mobile: Flutter + Dart, GetX, Firebase, Google Maps API",
      "Web: Django (MVT), React.js, Next.js, APIs REST",
      "Funcionalidades: cadastro, mídia, denúncias, WebView",
      "Relatórios automatizados com Pandas/Excel"
    ]
  },
  {
    title: "Suporte T.I - Estágio",
    company: "Grupo Rede Amazônica",
    period: "dez/2021 - nov/2022",
    description: "Suporte técnico, manutenção de equipamentos e sistemas, uso de GLPI e Active Directory.",
    highlights: [
      "Suporte técnico e manutenção",
      "Uso de GLPI e Active Directory",
      "Montagem e reparo de equipamentos"
    ]
  },
  {
    title: "Desenvolvedor Web - Estágio",
    company: "ADAF - Agência de Defesa Agropecuária",
    period: "nov - dez/2021",
    description: "Desenvolvimento e manutenção do site institucional, configuração de hospedagem e back-end.",
    highlights: [
      "Desenvolvimento do site institucional",
      "Configuração de hospedagem",
      "Manutenção de back-end simples"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Briefcase className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Experiência</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Trajetória Profissional</h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block" />

                  <div className="md:ml-20 bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 hover:shadow-card transition-all">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                          <span className="font-semibold text-primary">{exp.company}</span>
                          <span className="hidden sm:inline">•</span>
                          <span className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        {exp.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
