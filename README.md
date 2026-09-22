# Portfólio Felex

Portfólio pessoal de **Felex**, com foco em integração de sistemas, automação, RPA, agentes de IA e produtos digitais. É um site estático, rápido e responsivo, construído com Astro e preparado para publicação no GitHub Pages.

## Tecnologias

- [Astro](https://astro.build/)
- TypeScript
- CSS modular nativo
- GitHub Actions + GitHub Pages

## Rodar localmente

Pré-requisito: Node.js 22 ou superior.

```bash
npm install
npm run dev
```

Abra `http://localhost:4321` no navegador.

## Comandos disponíveis

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento com atualização automática. |
| `npm run build` | Valida TypeScript/Astro e gera a versão de produção em `dist/`. |
| `npm run preview` | Abre localmente a versão gerada pelo build. |

## Estrutura do projeto

```text
src/
├── components/       # Componentes reutilizáveis da interface
├── data/site.ts      # Conteúdo: perfil, projetos, stack e links sociais
├── layouts/          # Estrutura HTML compartilhada e metadados
├── pages/index.astro # Página principal do portfólio
└── styles/           # Estilos separados por responsabilidade
    ├── tokens.css    # Cores, fontes, espaçamentos e variáveis globais
    ├── base.css      # Reset, acessibilidade e animações compartilhadas
    ├── layout.css    # Cabeçalho, navegação, contêiner e rodapé
    ├── sections.css  # Hero, projetos, especialidades, stack e contato
    └── responsive.css # Regras para tablet, celular e menos movimento
```

O arquivo `src/styles/global.css` é somente o ponto de entrada que importa os módulos na ordem correta.

## Personalizar o conteúdo

Edite [`src/data/site.ts`](src/data/site.ts) para atualizar:

- Nome, localização e redes sociais;
- Especialidades e tecnologias;
- Projetos em destaque;
- Stack atual.

Os links de GitHub e LinkedIn ficam ocultos no rodapé enquanto estiverem vazios. Basta adicionar uma URL válida para exibi-los.

Para ajustar o visual, comece por `src/styles/tokens.css`. Ele concentra as cores, fontes, largura máxima e demais valores reutilizados em toda a página.

## Publicação no GitHub Pages

O workflow em `.github/workflows/deploy.yml` faz o deploy automaticamente a cada push para a branch `main`.

No GitHub, configure uma única vez:

1. Abra **Settings → Pages** no repositório.
2. Em **Build and deployment**, selecione **GitHub Actions** como fonte.
3. Faça push para `main` ou execute manualmente o workflow **Deploy to GitHub Pages** na aba **Actions**.

O `astro.config.mjs` identifica automaticamente se o repositório é uma página de usuário (`usuario.github.io`) ou de projeto (`usuario.github.io/repositorio`) e ajusta a rota base.
