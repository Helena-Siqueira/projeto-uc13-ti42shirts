# Documentação da API

Esta documentação descreve as rotas da API disponíveis para gerenciamento de produtos, transações, usuários e vendas.

---

## Produtos

### Buscar todos os produtos
**GET** `/produtos`  
Retorna todos os produtos cadastrados.

**Resposta / Body:**  
```json
[
  {
    "id": 1,
    "nome": "Produto A",
    "preco": 30,
    "tamanho": "M"
  },
  ...
]
```

### Buscar produto por ID
**GET** `/produtos/:id`  
Busca um produto específico pelo ID.

**Parâmetros:**  
- `id`: ID do produto

**Resposta / Status:**  
- `200`: Produto encontrado  
- `404`: Produto não encontrado

**Exemplo de sucesso:**  
```json
{
  "id": 1,
  "nome": "Produto A",
  "preco": 30,
  "tamanho": "M"
}
```

### Filtrar produtos

**GET** `/produtos/filtro/camisetas_femininas`  
**GET** `/produtos/filtro/camisetas_masculinas`  
**GET** `/produtos/filtro/camisetas_unisex`  
**GET** `/produtos/filtro/lancamentos`  

Retorna produtos de categorias específicas. (A filtragem ainda deve ser implementada no backend.)

**Resposta / Body:**  
```json
[
  {
    "id": 1,
    "nome": "Camiseta Feminina",
    "preco": 45,
    "tamanho": "P"
  }
]
```

---

## Transações

### Buscar todas as transações
**GET** `/transacao`  
Retorna todas as transações cadastradas.

### Buscar transação por ID
**GET** `/transacao/:id`  
Busca uma transação específica pelo ID.

**Resposta / Status:**  
- `200`: Transação encontrada  
- `404`: Transação não encontrada

---

## Usuários

### Buscar todos os usuários
**GET** `/usuarios`  
Retorna todos os usuários cadastrados.

### Buscar usuário por ID
**GET** `/usuarios/:id`  
Retorna os dados de um usuário específico.

**Resposta / Status:**  
- `200`: Sucesso  
- `404`: Usuário não encontrado

### Criar usuário
**POST** `/usuarios`  
Cria um novo usuário.

**Requisição / Body:**  
```json
{
  "nome": "João",
  "email": "joao@example.com",
  "senha": "senha123"
}
```

**Resposta / Status:**  
- `201`: Criado com sucesso

### Atualizar usuário (total)
**PUT** `/usuarios/:id`  
Atualiza completamente os dados de um usuário.

### Atualizar usuário (parcial)
**PATCH** `/usuarios/:id`  
Atualiza parcialmente os dados de um usuário.

**Requisição / Body:**  
```json
{
  "email": "novoemail@example.com"
}
```

### Remover usuário
**DELETE** `/usuarios/:id`  
Remove um usuário do sistema.

---

## Vendas

### Buscar todas as vendas
**GET** `/vendas`  
Retorna todas as vendas cadastradas.

### Buscar venda por ID
**GET** `/vendas/:id`  
Retorna os dados de uma venda específica.

**Resposta / Status:**  
- `200`: Venda encontrada  
- `404`: Venda não encontrada


# Testes de software

- Luixs e Daniels: usuário cadastro login e autenticação
- Predo: produtos da tela inicial e filtros
- Helena: produto individual
- Arthur: Perfil de usuário

? - Carrinho
