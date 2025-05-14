import express from 'express';
import bodyParser from 'body-parser';
import { PrismaClient } from "./generated/prisma/index.js"

const app = express();
const port = 4000;
const prisma = new PrismaClient();

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

// Outras rotas da tela inicial

app.get("/produtos/filtro/camisetas_femininas", async (_req, res) => {
    const camisetas_femininas = await prisma.produto.findMany();
    res.json(camisetas_femininas);
});

app.get("/produtos/filtro/camisetas_masculinas", async (_req, res) => {
    const camisetas_masculinas = await prisma.produto.findMany();
    res.json(camisetas_masculinas);
});

app.get("/produtos/filtro/camisetas_unisex", async (_req, res) => {
    const camisetas_unisex = await prisma.produto.findMany();
    res.json(camisetas_unisex);
});

app.get("/produtos/filtro/lancamentos", async (_req, res) => {
    const camisetas_lancamentos = await prisma.produto.findMany();
    res.json(camisetas_lancamentos);
});

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

app.get("/vendas/:id_usuario", async (req, res) => {
    const usuario_id = parseInt(req.params.id);
    const vendas = await prisma.venda.findUnique({ where: { usuario_id } });
    if (vendas === null) {
        res.status(404).send("Produto não encontrado");
    } else {
        res.json(vendas);
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

// PESQUISA NO BANCO NOVO!!!



// Rotas de produtos da atividade Eldes

// app.get("/produtos/:id", async (req, res) => {
//     const id = parseInt(req.params.id);
//     const produto = await prisma.produto.findUnique({ where: { id } });
//     if (produto === null) {
//         res.json(produto);
//     } else {
//         res.status(404).send("Produto não encontrado");
//     }
// });

// app.post("/produtos", async (req, res) => {
//     if ((req.body.nome === undefined) || (req.body.preco === undefined)){
//         res.status(400).send("Campos obrigatórios faltantes")
//     } else  { 
//        const novoProduto = await prisma.produto.create({ data: {
//             nome: req.body.nome,
//             preco: req.body.preco
//         }});
//         res.status(201).location(`/produtos/${novoProduto.id}`).send;
//     }
// });

// app.put("/produtos/:id", async (req, res) => {
//     const id = parseInt(req.params.id);
//     if ((req.body.nome === undefined) || (req.body.preco === undefined)){
//         res.status(400).send("Campos obrigatórios faltantes")
//     } else {
//         try {
//             await prisma.produto.update({ 
//                 where: { id },
//                 data: { 
//                     nome: req.body.nome,
//                     preco: req.body.preco
//                  }
//              });
//             res.status(204).send();
//         } catch ( error ) {
//             res.status(404).send("Produto não encontrado")
//         }
        
//     }
// });

// app.patch("/produtos/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     const produto = produtos.find(p => p.id === id);
//     if (!produto) return res.status(404).send();

//     const { nome, preco } = req.body;
//     if (nome) produto.nome = nome;
//     if (preco) produto.preco = preco;

//     res.status(200).json(produto);
// });

// app.delete("/produtos/:id", async (req, res) => {
//     const id = parseInt(req.params.id);
//     try {
//         await prisma.produto.delete({
//             where: { id }
//         });
//         res.status(202).send();
//     } catch ( error ) {
//         res.status(404).send("Produto não encontrado")
//     }
    
// });

// // Rotas de usuarios da atividade Eldes

// app.get("/usuarios", async (req, res) => {
//     const usuarios = await prisma.usuarios.findMany();
//     res.json(usuarios);
// });

// app.get("/usuarios/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     const usuario = usuarios.find(u => u.id === id);
//     if (usuario) {
//         res.json(usuario);
//     } else {
//         res.status(404).send();
//     }
// });

// app.post("/usuarios", (req, res) => {
//     const { nome, email, senha } = req.body;
//     const id = usuarios.length + 1;
//     usuarios.push({ id, nome, email, senha });
//     res.status(201).location(`/usuarios/${id}`).send();
// });

// app.put("/usuarios/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     const usuario = usuarios.find(u => u.id === id);
//     if (usuario) {
//         const { nome, email, senha } = req.body;
//         usuario.nome = nome;
//         usuario.email = email;
//         usuario.senha = senha;
//         res.status(200).send();
//     } else {
//         res.status(404).send();
//     }
// });

// app.patch("/usuarios/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     const usuario = usuarios.find(u => u.id === id);
//     if (!usuario) return res.status(404).send();

//     const { nome, email, senha } = req.body;
//     if (nome) usuario.nome = nome;
//     if (email) usuario.email = email;
//     if (senha) usuario.senha = senha;

//     res.status(200).json(usuario);
// });

// app.delete("/usuarios/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     const index = usuarios.findIndex(u => u.id === id);
//     if (index !== -1) {
//         usuarios.splice(index, 1);
//         res.status(200).send();
//     } else {
//         res.status(404).send();
//     }
// });



