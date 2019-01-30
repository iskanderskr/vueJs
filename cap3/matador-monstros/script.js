new Vue({
    el: "#matador",
    data: {
        nome: "",
        nomeInserido: false,
        gameIniciado: false,
        vidaPersonagem: 100,
        vidaMonstro: 100,
        amareloPersonagem: false,
        vermelhoPersonagem: false,
        amareloMonstro: false,
        vermelhoMonstro: false,
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
            this.vidaPersonagem -= danoMonstro;
            this.vidaPersonagem = this.vidaPersonagem<0?0:this.vidaPersonagem;
            this.vidaMonstro -= danoPersonagem;
            this.vidaMonstro = this.vidaMonstro<0?0:this.vidaMonstro;
        },
        magia(){
            let danoPersonagem = parseInt(Math.random() * 15 + 5);
            let danoMonstro = parseInt(Math.random() * 10 + 1);
            this.vidaPersonagem -= danoMonstro;
            this.vidaPersonagem = this.vidaPersonagem<0?0:this.vidaPersonagem;
            this.vidaMonstro -= danoPersonagem;
            this.vidaMonstro = this.vidaMonstro<0?0:this.vidaMonstro;
        },
        curar(){
            let curaPersonagem = parseInt(Math.random() * 15 + 5);
            let danoMonstro = parseInt(Math.random() * 10 + 1);
            this.vidaPersonagem += curaPersonagem;
            this.vidaPersonagem -= danoMonstro;
            this.vidaPersonagem = this.vidaPersonagem<0?0:this.vidaPersonagem;
        }
    },
    watch: {
        vidaPersonagem(){
            if(this.vidaPersonagem <40){
                this.amareloPersonagem = true;
                if(this.vidaPersonagem <20){
                    this.amareloPersonagem = false
                    this.vermelhoPersonagem = true;
                    if(this.vidaPersonagem <=0){
                        document.querySelector(".commands .status").innerHTML = "<strong>Morreu :(</strong>";
                        setTimeout(()=>{
                            document.querySelector(".commands .status").innerHTML = "";
                            this.gameIniciado = false;
                        }, 3000);
                    }
                }
            }
        },
        vidaMonstro(){
            if(this.vidaMonstro <40){
                this.amareloMonstro = true;
                if(this.vidaMonstro <20){
                    this.amareloMonstro = false
                    this.vermelhoMonstro = true;
                    if(this.vidaMonstro <=0){
                        document.querySelector(".commands .status").innerHTML = "<strong>Matou :)</strong>";
                        setTimeout(()=>{
                            document.querySelector(".commands .status").innerHTML = "";
                            this.gameIniciado = false;
                        }, 3000);
                    }
                }
            }
        }
    }
});