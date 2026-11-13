# Nexa Bank: Landing Page (Front-end)

Landing page demonstrativa de um banco digital, inspirada em fintechs brasileiras. Projeto **somente front-end**, feito com HTML5, CSS3 e JavaScript puro.

## Como executar

1. Baixe ou clone a pasta `banco-digital`.
2. Abra o arquivo `index.html` no navegador (duplo clique).
3. Para uma experiência mais fiel, use uma extensão como o **Live Server** (VS Code) ou execute `python -m http.server` dentro da pasta e acesse `http://localhost:8000`.

Requer conexão com a internet para carregar as fontes (Google Fonts) e os ícones (Font Awesome).

## Estrutura

```
banco-digital/
├── index.html
├── pages/        cartoes, investimentos, sobre e contato
├── css/          style, header, hero, beneficios, cartoes, investimentos,
│                 depoimentos, faq, footer, responsive
├── js/           main, menu, animations, faq
├── assets/       images, icons, fonts (reservadas para uso futuro)
└── README.md
```

## Funcionalidades

- Menu responsivo para celular
- FAQ em acordeão
- Animações de entrada ao rolar a página
- Scroll suave com compensação do header
- Efeitos de hover e botões interativos
- Navegação entre páginas
- Formulário demonstrativo (nenhum dado é enviado)

## Observações

- Projeto de demonstração. Não há back-end, autenticação, cadastro real ou operações bancárias.
- Os dados, depoimentos e valores são fictícios.
- A marca "Nexa" é fictícia e não reproduz identidade de nenhuma instituição real.
- O responsivo está em `css/responsive.css`, com breakpoints em 1100px, 960px e 600px.
