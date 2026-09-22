# Portfólio Felex

Portfólio pessoal estático construído com Astro e preparado para GitHub Pages.

## Rodar localmente

```bash
npm install
npm run dev
```

O site estará disponível em `http://localhost:4321`.

## Personalizar

Edite `src/data/site.ts` para alterar textos, projetos, tecnologias e links sociais. Os campos de GitHub e LinkedIn estão vazios de propósito; basta adicionar as URLs corretas para que apareçam no rodapé.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie estes arquivos para a branch `main`.
2. No repositório, abra **Settings → Pages**.
3. Em **Source**, selecione **GitHub Actions**.
4. Faça um novo push para `main` ou execute manualmente o workflow **Deploy to GitHub Pages**.

O arquivo `astro.config.mjs` detecta automaticamente se o repositório é uma página de usuário (`usuario.github.io`) ou uma página de projeto (`usuario.github.io/repositorio`).

## Comandos

| Comando | Função |
| --- | --- |
| `npm run dev` | Ambiente local |
| `npm run build` | Validação TypeScript + build de produção |
| `npm run preview` | Prévia do build |
