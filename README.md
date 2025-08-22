# LojaOnline

Projeto criado utilizando [Angular CLI](https://github.com/angular/angular-cli) versão 19.2.15. Consome a [FakeStoreApi](https://fakestoreapi.com/) para simular uma loja online, em que o usuário pode adicionar e remover produtos do seu carrinho.

Para acessar o carrinho, é necessário fazer login, utilizando qualquer uma das credenciais abaixo (ou qualquer uma das outras, que podem ser encontradas no site da Api supracitada):

> usuário: "johnd", <br>
> senha: "m38rmF$", <br>
    
> usuário: "mor_2314", <br>
> senha: "83r5^_", <br>

> usuário: "kevinryan", <br>
> senha: "kev02937@", <br>

> usuário: "donero", <br>
> senha: "ewedon", <br>

> usuário: "derek", <br>
> senha: "jklg*_56", <br>

É possível verificar seu estado (logado/deslogado) através do cabeçalho: o botão do carrinho fica bloqueado quando deslogado, e o texto do tooltip que aparece abaixo do botão de login é alterado. 

## Development server

Para rodar a aplicação, é necessário primeiramente instalar os pacotes, utilizando o comando 

```bash
npm install
```

Depois, basta utilizar o comando

```bash
ng serve
```

ou

```bash
npm start
```

Quando a aplicação estiver rodando, basta abrir seu navegador e ir até a rota `http://localhost:4200/`. A aplicação vai recarregar imediatamente quando você salvar qualquer dos arquivos fonte.
