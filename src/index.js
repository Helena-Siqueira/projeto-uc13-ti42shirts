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



// Rotas de produtos

// app.get("/produtos", async (req, res) => {
//     const produtos = await prisma.produto.findMany();
//     res.json(produtos);
// });

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

// GET /produtos?categorias=1,3
app.get('/produtos', async (req, res) => {
    const categoriasQuery = req.query.categorias;
  
    let whereClause = {};
  
    if (categoriasQuery) {
      const categoriasIds = categoriasQuery.toString().split(',').map(id => parseInt(id));
  
      whereClause = {
        categorias: {
          some: {
            id: {
              in: categoriasIds
            }
          }
        }
      };
    }
  
    const produtos = await prisma.produto.findMany({
      where: whereClause,
      include: {
        categorias: true
      }
    });
  
    res.json(produtos);
  });
  

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
});

//Rotas do BigLu abaixo:
app.post("/transacao", async (req, res) => {

    console.log(req.body)

    if((req.body.venda_id === undefined) || (req.body.produto_id === undefined) || (req.body.quantidade === undefined))  {
       
        res.status(400).send("Campos obrigatorios faltantes");

    } else {

      const novaTransacao = await prisma.transacao.create({ data: {
        produto_id: req.body.produto_id,
        venda_id: req.body.venda_id,
        quantidade: req.body.quantidade
      }});

      return res
        .status(201)
        .location(`/venda/${req.body.venda_id}`)
        .json(novaTransacao); // <-- Aqui você envia a transação criada

    }
    
});

app.get("/transacao/:id_carrinho", async (req, res) => {
    const venda_id = parseInt(req.params.id_carrinho);
    const transacao = await prisma.transacao.findMany({ where: { venda_id }, include: { produtos:true } });
    if (transacao === null) {
        res.status(404).send("Produto não encontrado");
    } else {
        res.json(transacao);
    }
});

app.get("/vendas/:id_usuario", async (req, res) => {
    const usuario_id = parseInt(req.params.id_usuario);
    const vendas = await prisma.venda.findUnique({ where: { usuario_id } });
    if (vendas === null) {
        res.status(404).send("Produto não encontrado");
    } else {
        res.json(vendas);
    }
});

app.get("/avaliacao", async (req, res) => {
    const avaliacao = await prisma.avaliacao.findMany();
    res.json(avaliacao);
});

app.get("/avaliacao/:id_produto", async (req, res) => {
    const produto_id = parseInt(req.params.id_produto);

    const avaliacao = await prisma.avaliacao.findMany({
        where: { produto_id },
        include: {
            usuario: {
                select: { nome: true } // <- Pegando apenas o nome
            }
        }
    });

    if (!avaliacao || avaliacao.length === 0) {
        res.status(404).send("Nenhuma avaliação encontrada");
    } else {
        res.json(avaliacao);
    }
});

app.post("/avaliacao", async (req, res) => {
    const { nota, comentario, usuario_id, produto_id } = req.body;

    try {
        const novaAvaliacao = await prisma.avaliacao.create({
            data: {
                nota: parseInt(nota),
                comentario,
                usuario_id: parseInt(usuario_id),
                produto_id: parseInt(produto_id)
            }
        });
        res.status(201).json(novaAvaliacao);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao criar avaliação");
    }
});


app.get("/venda/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const venda = await prisma.venda.findUnique({ where: { id }});
    console.log(venda)
    if (venda === null) {
        res.status(404).send("Produto não encontrado");
    } else {
        res.json(venda);
    }
});

app.post("/venda", async (req, res) => {

    
    if((req.body.data === undefined) || (req.body.usuario_id === undefined))  {
       
        res.status(400).send("Campos obrigatorios faltantes");

    } else {

      const novaVenda = await prisma.venda.create({ data: {
        data: req.body.data,
        usuario_id: req.body.usuario_id
    
      }});
      console.log(novaVenda)
      res.json(novaVenda);
    }
    
  });

//Aqui se encerra as rotas feitas pelo biglu 


app.get("/usuarios", async (req, res) => {
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

app.post("/usuarios", async (req, res) => {
    const { nome, data_nascimento, genero, email, senha, cpf, telefone, cep } = req.body;
    
    const novoUsuario = await prisma.usuario.create({ data: {
        nome: nome,
        data_nascimento: data_nascimento,
        genero: genero,
        email: email,
        senha: senha,
        cpf: cpf,
        telefone: telefone,
        cep: cep
      }});

      return res
        .status(201)
        .json(novoUsuario); // <-- Aqui você envia a transação criada




});

app.put("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = usuario.find(u => u.id === id);
    if (usuario) {
        const { nome, data_nascimento, genero, email, senha, cpf, telefone, cep, avaliacoes, vendas } = req.body;
        usuario.nome = nome;
        usuario.data_nascimento = data_nascimento;
        usuario.genero = genero;
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
    if (genero) usuario.genero = genero;
    if (email) usuario.email = email;
    if (senha) usuario.senha = senha;
    if (cpf) usuario.cpf = cpf;
    if (telefone) usuario.telefone = telefone;
    if (cep) usuario.cep = cep;
    if (avaliacoes) usuario.avaliacoes = avaliacoes;
    if (vendas) usuario.vendas = vendas; 
 
    res.status(200).json(usuario);
});


app.get("/vendas", async (req, res) => {
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





