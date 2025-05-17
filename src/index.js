import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // <- Importa o CORS
import { PrismaClient } from "./generated/prisma/index.js";

const app = express();
const port = 4000;
const prisma = new PrismaClient();

app.use(cors()); // <- Ativa o CORS para todas as rotas
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Bem-vindo aos nossos produtos");
});

// const produtos = [
//     { id: 1, nome: "Água com Gás Pompeia", preco: 3 },
//     { id: 2, nome: "Batata", preco: 8 },
//     { id: 3, nome: "Cachorro-quente", preco: 10 },
// ];

// const usuarios = [
//     { id: 1, nome: "Arthur", email: "arthursilvasouza00@gmail.com", senha: 123 },
//     { id: 2, nome: "Helena", email: "helenasiqueira00@gmail.com", senha: 123 },
//     { id: 3, nome: "Camila", email: "camilasouza00@gmail.com", senha: 123 },
// ];

// Rotas de produtos

app.get("/produtos", async (_req, res) => {
    const produtos = await prisma.produto.findMany();
    res.json(produtos);
});

app.get("/produtos/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const produto = await prisma.produto.findUnique({ where: { id } });
    if (produto === null) {
        res.status(404).send("Produto não encontrado");
    } else {
        res.json(produto);
    }
});

app.get("/categoria", async (_req, res) => {
    const categoria = await prisma.categoria.findMany();
    res.json(categoria);
})

// Outras rotas da tela inicial

app.get("/produtos/filtro", async (req, res) => {
    const { tipo } = req.query;
  
    const tiposValidos = [
      "feminina",
      "masculina",
      "unisex",
      "lançamento"
    ];
  
    if (!tiposValidos.includes(tipo)) {
      return res.status(400).json({ erro: "Tipo de filtro inválido." });
    }

//Rotas do BigLu abaixo:
app.post("/transacao", async (_req, res) => {

    if((req.body.venda_id === undefined) || (req.body.produto_id === undefined) || (req.body.quantidade))  {
       
        res.status(400).send("Campos obrigatorios faltantes");

    } else {

      const novaTransacao = await prisma.transacao.create({ data: {
        produto_id: req.body.produto_id,
        venda_id: req.body.venda_id,
        quantidade: req.body.quantidade
      }});

      res.status(201).location(`/venda/${venda_id}`).send();
    }
    
  });
});

app.get("/vendas/:id_usuario", async (req, res) => {
    const usuario_id = parseInt(req.params.id);
    const vendas = await prisma.venda.findUnique({ where: { usuario_id } });
    if (vendas === null) {
        res.status(404).send("Produto não encontrado");
    } else {
        res.json(vendas);
    }
});

app.get("/avaliacao", async (_req, res) => {
    const avaliacao = await prisma.avaliacao.findMany();
    res.json(avaliacao);
});

app.get("/avaliacao/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const avaliacao = await prisma.avaliacao.findUnique({ where: { id } });
    if (avaliacao === null) {
        res.status(404).send("Produto não encontrado");
    } else {
        res.json(avaliacao);
    }
});
app.get("/venda/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const venda = await prisma.venda.findUnique({ where: { id }, include: {transacao: true} });
    if (venda === null) {
        res.status(404).send("Produto não encontrado");
    } else {
        res.json(venda);
    }
});

app.post("/venda", async (_req, res) => {

    
    if((req.body.data === undefined) || (req.body.usuario_id === undefined))  {
       
        res.status(400).send("Campos obrigatorios faltantes");

    } else {

      const novaVenda = await prisma.venda.create({ data: {
        data: req.body.data,
        usuario_id: req.body.usuario_id
    
      }});

      res.status(201).location(`/venda/${venda_id}`).send();
    }
    
  });

//Aqui se encerra as rotas feitas pelo biglu 


app.get("/usuarios", async (_req, res) => {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
});

app.get("/usuarios/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const usuarios = await prisma.usuario.findUnique({ where: { id } });
    if (usuarios === null) {
        res.status(404).send("Produto não encontrado");
    } else {
        res.json(usuarios);
    }
});

app.post("/usuarios", (req, res) => {
    const { nome, data_nascimento, sexo, email, senha, cpf, telefone, cep, avaliacoes, vendas } = req.body;
    const id = usuarios.length + 1;
    usuarios.push({ nome, data_nascimento, sexo, email, senha, cpf, telefone, cep, avaliacoes, vendas });
    res.status(201).location(`/usuarios/${id}`).send();
});

app.put("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find(u => u.id === id);
    if (usuario) {
        const { nome, data_nascimento, sexo, email, senha, cpf, telefone, cep, avaliacoes, vendas } = req.body;
        usuario.nome = nome;
        usuario.data_nascimento = data_nascimento;
        usuario.sexo = sexo;
        usuario.email = email;
        usuario.senha = senha;
        usuario.cpf = cpf;
        usuario.telefone = telefone; 
        usuario.cep = cep;
        usuario.avaliacoes = avaliacoes;
        usuario.vendas = vendas;
        res.status(200).send();
    } else {
        res.status(404).send();
    }
});

app.patch("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) return res.status(404).send();
 
    const { nome, email, senha } = req.body;
    if (nome) usuario.nome = nome;
    if (data_nascimento) usuario.data_nascimento = data_nascimento;
    if (sexo) usuario.sexo = sexo;
    if (email) usuario.email = email;
    if (senha) usuario.senha = senha;
    if (cpf) usuario.cpf = cpf;
    if (telefone) usuario.telefone = telefone;
    if (cep) usuario.cep = cep;
    if (avaliacoes) usuario.avaliacoes = avaliacoes;
    if (vendas) usuario.vendas = vendas; 
 
    res.status(200).json(usuario);
});


app.get("/vendas", async (_req, res) => {
    const vendas = await prisma.venda.findMany();
    res.json(vendas);
});

app.get("/vendas/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const vendas = await prisma.venda.findUnique({ where: { id } });
    if (vendas === null) {
        res.status(404).send("Produto não encontrado");
    } else {
        res.json(vendas);
    }
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});





