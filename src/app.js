import express from 'express'
import connectDatabase from './config/dbConnect.js'
import routes from './routes/index.js'

const conexao = await connectDatabase()

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro)
})

conexao.once("open", () => {
  console.log("conexão com o banco feita com sucesso")
})

const app = express()
routes(app)

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id)
  livros.splice(index, 1)
  res.status(200).send("Livro removido com sucesso")
})

export default app

