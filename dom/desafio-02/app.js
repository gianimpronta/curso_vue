new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibeAlerta(){
            alert("alerta exibido")
        },
        mudaValor(event){
            this.valor = event.target.value
        }
    }
})