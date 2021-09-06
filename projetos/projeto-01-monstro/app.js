new Vue({
    el: '#app',
    data: {
        started: false,
        running: false,
        player: {
            life: 100
        },
        monster: {
            life: 100
        },
        log: [],
    },
    methods: {
        startGame(){
            this.running = true;
            this.player.life = 100
            this.monster.life = 100
            this.log = []
        },
        ataque(especial){
            this.ferir('monster', 8, 10, especial);
            if (this.monster.life > 0){
                this.ferir('player', 8, 10, false)
            }
        },
        ferir(char, min, max, especial){
            const plus = especial ? 5 : 0;
            const valorDano = getRandomIntInclusive(min + plus, max + plus)
            this[char].life = Math.max(this[char].life - valorDano, 0);
            this.addLog(`${char === 'player'? 'Monstro' : 'Jogador'} atingiu ${char === 'monster'? 'Monstro' : 'Jogador'} com ${valorDano}.`, char)
        },
        curarFerir(){
            this.curar(9, 13);
            this.ferir('player', 8, 10, false);
        },
        curar(min, max){
            const cura = getRandomIntInclusive(min, max);
            this.player.life = Math.min(this.player.life + cura, 100);
            this.addLog(`Jogador se curou com ${cura}`, 'monster');
        },
        addLog(text, cls){
            const msg = {text: text, cls: cls}
            this.log.unshift(msg);
        }
    },
    computed: {
        hasResult(){
            return this.monster.life === 0 || this.player.life === 0
        }
    },
    watch: {
        hasResult(value){
            this.running = !value
        }
    }

})

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}