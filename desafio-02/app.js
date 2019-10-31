new Vue({
el: '#desafio',
data: {
    valor: ""
},
methods: {
    armazenarValor(e) {
        console.log(e)
        this.valor += e.target.value 
    },
    exibirAlerta() {
        alert('Alerta')
    } 
}
})