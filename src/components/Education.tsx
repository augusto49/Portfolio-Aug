import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="educacao" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Educação</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Formação Acadêmica
            </h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="md:col-span-2 bg-gradient-primary p-8 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background/10 backdrop-blur-sm rounded-lg">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">
                    Engenharia da Computação
                  </h3>
                  <p className="text-lg mb-1">
                    UniNorte - Centro Universitário do Norte
                  </p>
                  <p className="text-sm opacity-90">
                    Concluído em Dezembro de 2023
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Cursos Complementares</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    name: "Desenvolvimento Full Stack",
                    institution: "INDT",
                    status: "Cursando",
                  },
                  {
                    name: "Flutter & Dart",
                    institution: "Udemy",
                    status: "2022-2023",
                  },
                  {
                    name: "Desenvolvimento Python",
                    institution: "Udemy",
                    status: "2022",
                  },
                  {
                    name: "Desenvolvimento Web (HTML/CSS/JS)",
                    institution: "Udemy",
                    status: "2021-2022",
                  },
                  {
                    name: "React Native",
                    institution: "Instituto Eldorado",
                    status: "2021-2022",
                  },
                ].map((course, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-all"
                  >
                    <h4 className="font-semibold mb-1">{course.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {course.institution}
                    </p>
                    <span className="text-xs text-primary">
                      {course.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
