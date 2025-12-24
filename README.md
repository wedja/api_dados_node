# Backend → Frontend com Node.js e Express

Objetivo baseado no vídeo:
https://www.youtube.com/watch?v=C_vv1D5oDZ0

---

## Estrutura do projeto

```
project/
├── front-end/
│   ├── package-lock.json
│   └── package.json
└── src/
    ├── index.html
    └── server.js
```

### Passos principais

1. Inicializa o projeto Node.js
2. Instala o Express
3. Cria um servidor
4. Cria **uma rota `/users`** que retorna dados em JSON

### Exemplo da rota

```js
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' }
  ])
})
```

Essa rota **não acessa banco de dados**. Os dados são estáticos e servem apenas para teste.

---

## Front-end

### O que é feito

- Criação manual da pasta `front-end`
- Uso de `index.html` + `script.js`
- Consumo da rota `/users` usando `fetch()`

### Exemplo do fetch no frontend

```js
fetch('http://localhost:3000/users')
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
```

O retorno da API é exibido no console do navegador.

---

## Conceito principais

- Frontend consome esses dados com `fetch`
- Comunicação feita via **JSON**

---

## O que NÃO é abordado

- Banco de dados
- Autenticação
- React ou frameworks frontend
- Organização avançada de projeto
- Segurança ou variáveis de ambiente

---

## Objetivo final

Ensinar o **primeiro passo da comunicação entre backend e frontend**, de forma simples e direta, usando apenas Node.js, Express e JavaScript puro.

---

## Referências

- Vídeo base: https://www.youtube.com/watch?v=C_vv1D5oDZ0
- Express.js: https://expressjs.com/
- Fetch API: https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API

