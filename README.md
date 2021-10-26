# json-placeholder-use-api
json-placeholder-use-api

Data de Finalização da Aplicação: 25/10/2021

1) Escopo da Aplicação
- Consiste em uma web application que permite navegar por diversas listagens de
uma API Rest, notadamente, a https://jsonplaceholder.typicode.com/

2) Funcionalidades da Aplicação

- A aplicação está estruturada em três principais seções:

(i) Álbuns: seção em que é possível visualizar os álbuns existentes e as
fotografias contidas em cada álbum.
(ii) Postagens: seção em que é possível visualizar as postagens existentes
e os comentários contidos em cada postagem.
(iii) To-dos: seção em que é possível visualizar as tarefas existentes e os
respectivos status.

3) Estrutura da Aplicação

Páginas/Views:

- HomePage => display da view inicial, em que o usuário pode navegar pelas
demais seções: Álbuns, Postagens e To-dos.
- Álbuns => view de consulta aos álbuns.
- Postagens => view de consulta às postagens.
- To-dos => view de consulta à listagem de to-dos.
- Photos => view de consulta à listagem de fotografias de um álbum.
- Comments => view de consulta aos comentários relacionados a uma postagem.

Componentes:

- Header: componente exclusivo para apresentar as opções de navegação pela
aplicação.
- Breadcrumb: componente exclusivo para apresentar o caminho atual de
navegação, ou seja, em que view o usuário se encontra.
- Collection: componente utilizado para construir coleções de itens, como uma
lista de álbuns.
- CollectionItem: componente utilizado para construir cada item de uma coleção,
como um “card” de um álbum.
- CommentDisplay: componente utilizado para exibir os detalhes de um
comentário relacionado a uma postagem.

4) Tecnologias Aplicadas
- React 17.0.2, bem como React-DOM e React-Router-DOM.
- Pré-processador CSS (SASS 1.43.3).

5) Organização do Código

- Cada componente é alocado em um diretório específico do projeto, dentro de
src/components, que contém: (i) o component.jsx do componente; (ii) o
styles.scss do componente.

- Para os componentes que sejam views específicas a serem renderizadas, como
Álbuns, são criados diretórios específicos dentro de src/pages, contendo: (i) o
component.jsx do componente; (ii) o styles.scss do componente (quando
aplicável).

- Foram criadas as dependências entre os componentes, executando o export e
respectivo import de cada componente no componente alvo desejado.

6) Inicialização da Aplicação

(a) Acessar o projeto no repositório:
https://github.com/fabiowood/json-placeholder-use-api

(b) Clicar em Fork, no canto superior direito da página

(c) Acessar o seu repositório no GitHub, com a cópia do repositório original do
passo (a).

(d) Clicar em Code e copiar a URL em HTTPS.

(e) Abrir o seu terminal.

(f) Navegar pelo terminal, até o repositório local em que deseja armazenar os
arquivos da aplicação.

(g) Nesse repositório, digitar git clone, seguido da URL copiada no passo (d).
Exemplo:
git clone https://github.com/your-username/json-placeholder-use-api

(h) Pressionar Enter. Todo o projeto agora está disponível em uma cópia local.

(i) Após a conclusão da clonagem, é necessário instalar todas as dependências
para a execução da aplicação. Para tanto, no terminal, na raiz do repositório em
que se encontram os arquivos da aplicação, digitar npm install.

(j) Após a conclusão das instalações, a aplicação está pronta para ser inicializada.
Digite npm start no terminal.

(k) Será aberta uma aba em seu browser, permitindo o uso da aplicação, na URL:
http://localhost:3000/

Desenvolvido por: Fabio Gasperini Madeira
