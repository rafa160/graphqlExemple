const {usuarios, perfis} = require('../data/db')

module.exports = {

    ola() {
        return 'Olá '
    },

    horaAtual(){
        return new Date
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Rafael Paz',
            email: 'teste@teste.com',
            idade: 34,
            salario_real: 100.01,
            vip: false
        }
    },

    produtoEmDestaque() {
        return {
            id: 2,
            nome: 'Smarthphone Samsung',
            preco: 2210.99,
            desconto: 0.2,
        }
    },

    numerosMegaSena(){
        const crescente = (a,b) => a - b
        return Array(6).fill(0).map(n => parseInt(Math.random()* 99 + 1)).sort(crescente)
    },

    usuarios(){
        return usuarios
    },

    usuario(_,args) {
        const selecionados = usuarios.filter(u => u.id == args.id)
        return selecionados ? selecionados[0] : null
    },

    perfis(){
        return perfis
    },

    perfil(_, {id}){
        const selecionados = perfis.filter(p => p.id === id)
        return selecionados ? selecionados[0] : null
    }

}