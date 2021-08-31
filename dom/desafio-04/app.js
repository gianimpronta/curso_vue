new Vue({
	el: '#desafio',
	data: {
		estadoEfeito: false,
		aplicarDestaque: false,
		classeCSS: '',
		classeCSS2: '',
		aplicarLargura: false,
		estiloInput: '',
		progresso: 0
	},
	computed: {
		classeEfeito(){
				return this.estadoEfeito ? {
					destaque: this.aplicarDestaque,
					encolher: !this.aplicarDestaque
				} : ''
		},
		estilo3(){
			return [
					this.estiloInput,
			]
		},
		estiloProgresso(){
			return {'width': this.progresso+'%'}
		}
	},
	methods: {
		iniciarEfeito() {
			this.estadoEfeito = true;
			setInterval(() => {
				this.aplicarDestaque = !this.aplicarDestaque
					}, 2000)
		},
		iniciarProgresso() {
			setInterval(() => {
				this.progresso = this.progresso >= 100? 0 : this.progresso+1 ;
			}, 1)
		}
	}
})
