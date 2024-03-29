const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')
const port = 3002
conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')
        
        Tabelas.init(conexao)
        
        const app = customExpress()

        app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
    }
})
