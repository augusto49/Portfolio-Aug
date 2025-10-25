# Augusto Ferreira - Portfólio

Site de portfólio profissional construído com tecnologias modernas e boas práticas de desenvolvimento.

## 🚀 Início Rápido

```bash
# Instalar dependências
bun install

# Iniciar servidor de desenvolvimento
bun dev

# Criar build de produção
bun run build

# Visualizar build de produção
bun run preview
```

## 🛠 Stack Tecnológica

- **Framework Principal:** React 18
- **Ferramenta de Build:** Vite 7
- **Estilização:** Tailwind CSS + componentes shadcn/ui
- **Tipagem:** TypeScript
- **Roteamento:** React Router DOM
- **Gerenciamento de Estado:** React Query
- **Validação de Formulários:** React Hook Form + Zod
- **Ícones:** Lucide React
- **Runtime e Gerenciador de Pacotes:** Bun

## 📦 Estrutura do Projeto

```
src/
  ├── components/     # Componentes React
  │   └── ui/        # Componentes de UI (shadcn/ui)
  ├── hooks/         # Hooks personalizados
  ├── lib/           # Funções utilitárias
  ├── pages/         # Páginas de rotas
  └── assets/        # Recursos estáticos
```

## 🔧 Desenvolvimento

### Pré-requisitos

- Node.js 18+ ou Bun Runtime
- npm 8+ ou bun

### Comandos Principais

- `bun dev` - Inicia o servidor de desenvolvimento
- `bun run build` - Cria build de produção
- `bun run preview` - Visualiza build de produção
- `bun run lint` - Executa verificação de código com ESLint

### Configuração de Ambiente

Não são necessárias variáveis de ambiente para configuração básica. Para deploy:

1. Criar projeto no Vercel
2. Adicionar os seguintes segredos ao GitHub:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

## 🎨 Sistema de Design

- Utiliza variáveis CSS para temas (ver `index.css`)
- Gradiente principal: hsl(250, 80%, 65%) → hsl(280, 80%, 60%)
- Tema escuro otimizado

### Componentes

Os componentes de UI são baseados no shadcn/ui, personalizados com os tokens de design do projeto.
Consulte `components/ui/` para ver os componentes disponíveis e suas variantes.

## 🚀 Recursos e Funcionalidades

- **Design Responsivo:** Layout adaptável para todos os dispositivos
- **Otimização SEO:** Meta tags e estrutura otimizada para mecanismos de busca
- **Performance:** Código otimizado e carregamento rápido
- **Acessibilidade:** Componentes acessíveis seguindo as diretrizes WCAG
- **Temas:** Suporte a tema claro/escuro
- **Animações:** Transições suaves e feedback visual
- **TypeScript:** Código fortemente tipado para maior segurança

## 📝 Licença

MIT

## 🙏 Créditos e Agradecimentos

- shadcn/ui - Componentes de UI
- Radix UI - Primitivos acessíveis
- Tailwind CSS - Framework de estilização
- Lucide - Biblioteca de ícones
- Bun - Runtime JavaScript e gerenciador de pacotes

---

⚡️ Desenvolvido com tecnologias modernas e boas práticas

```

```
