new Vue({
    el: "#matador",
    data: {
        nome: "",
        nomeInserido: false,
        gameIniciado: false,
        vidaPersonagem: 100,
        vidaMonstro: 100,
        classePersonagem: "",
        classeMonstro: "",
    },
    methods: {
        iniciar(){
            this.gameIniciado = true;
            this.vidaPersonagem = 100;
            this.vidaMonstro = 100;
        },
        atacar(){
            let danoPersonagem = parseInt(Math.random() * 10 + 1);
            let danoMonstro = parseInt(Math.random() * 15 + 5);
            this.vidaPersonagem -= danoMonstro>=0?this.vidaPersonagem:0;
            this.vidaMonstro -= danoPersonagem>=0?this.vidaMonstro:0;
        },
        magia(){
            let danoPersonagem = parseInt(Math.random() * 15 + 5);
            let danoMonstro = parseInt(Math.random() * 10 + 1);
            this.vidaPersonagem -= danoMonstro>=0?this.vidaPersonagem:0;
            this.vidaMonstro -= danoPersonagem>=0?this.vidaMonstro:0;
        },
        curar(){
            let curaPersonagem = parseInt(Math.random() * 15 + 5);
            let danoMonstro = parseInt(Math.random() * 10 + 1);
            this.vidaPersonagem += curaPersonagem;
            this.vidaPersonagem -= danoMonstro>=0?this.vidaPersonagem:0;
        }
    },
    watch: {
        vidaPersonagem(){
            if(this.vidaPersonagem <40){
                this.classePersonagem = "amarelo";
                if(this.vidaPersonagem <40){
                    this.classePersonagem = "vermelho";
                    if(this.vidaPersonagem <=0){
                        document.querySelector(".commands").innerHTML = "<strong>Morreu :(</strong>";
                        setTimeout(function(){
                            this.gameIniciado = false;
                        }, 3000);
                    }
                }
            }
        },
        vidaMonstro(){
            if(this.vidaMonstro <40){
                this.classeMonstro = "amarelo";
                if(this.vidaMonstro <40){
                    this.classeMonstro = "vermelho";
                    if(this.vidaMonstro <=0){
                        document.querySelector(".commands").innerHTML = "<strong>Matou :)</strong>";
                        setTimeout(function(){
                            this.gameIniciado = false;
                        }, 3000);
                    }
                }
            }
        }
    }
});