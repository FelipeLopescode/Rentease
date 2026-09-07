# RentEase

O RentEase é uma aplicação web simples para gerir apartamentos para arrendar. Serve para uma pessoa poder adicionar apartamentos, ver a lista de todos, filtrar e ordenar por cidade, preço ou área, marcar os que mais gosta como favoritos, e apagar os que já não interessam. Todos os dados ficam guardados no browser (localStorage), por isso não é preciso nenhuma base de dados nem servidor.

## Funcionalidades concluídas

- [x] criar apartamentos;
- [x] guardar e recuperar dados com `localStorage`;
- [x] listar apartamentos;
- [x] filtrar por cidade, preço e área;
- [x] ordenar por cidade, preço e área;
- [x] marcar e desmarcar favoritos;
- [x] eliminar apartamentos;
- [x] apresentar resumo e favoritos na Home;
- [x] adaptar a interface a mobile.

## Como executar

1. Faz download ou clone do projeto.
2. Abre a pasta no VS Code (ou noutro editor).
3. Corre o projeto com a extensão **Live Server** (clicar com o botão direito no ficheiro `index.html` e escolher "Open with Live Server").
4. O projeto abre no browser, normalmente em `http://127.0.0.1:5500`.

> Não é preciso instalar mais nada — não usa frameworks nem dependências externas.

## Como utilizar

A aplicação tem 3 páginas principais:

1. **Home** — mostra um resumo geral (quantos apartamentos existem, quais são os favoritos) logo que a página abre.
2. **Novo apartamento** — tem um formulário para adicionar um apartamento novo (cidade, preço, área, etc.). Depois de submeter, o apartamento fica guardado automaticamente no `localStorage`.
3. **Lista de apartamentos** — mostra todos os apartamentos guardados. Aqui dá para filtrar (por cidade, preço, área), ordenar por essas mesmas categorias, marcar/desmarcar como favorito, e eliminar um apartamento da lista.

## Testes realizados

Testei as principais funcionalidades da aplicação e não encontrei nenhum erro:

- Criei vários apartamentos com dados válidos (cidade, preço e área preenchidos corretamente) e todos apareceram corretamente na lista.
- Recarreguei a página várias vezes depois de criar apartamentos e os dados mantiveram-se guardados, confirmando que o `localStorage` está a funcionar.
- Testei os filtros por cidade, preço e área, isolados e em conjunto, e a lista foi sempre atualizada corretamente.
- Testei a ordenação por cidade, preço e área, tanto de forma crescente como decrescente, e a ordem apresentada estava sempre correta.
- Marquei e desmarquei vários apartamentos como favoritos, repetindo a operação várias vezes seguidas, e o estado manteve-se sempre correto.
- Eliminei apartamentos da lista e confirmei que desapareciam tanto da lista como do resumo da Home.
- Verifiquei o resumo e os favoritos apresentados na Home depois de várias operações (criar, eliminar, marcar/desmarcar) e os valores estavam sempre atualizados.
- Testei a aplicação em ecrã reduzido (mobile) e a interface adaptou-se sem elementos cortados ou desalinhados.

Não foram encontrados casos inválidos que causassem erros ou comportamento inesperado durante os testes realizados.

## Limitações conhecidas

Não foram encontrados problemas ou limitações relevantes durante os testes realizados.
Pontos que poderiam ser melhorados no futuro:

- adicionar confirmação antes de eliminar um apartamento;
- validar melhor os campos do formulário (por exemplo, impedir preços negativos).

## Autor

Felipe Lopes Barbosa
