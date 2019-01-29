new Vue({
    el: '#desafio',
    data: {
        aplicarC1: false,
        classe1: "destaque",
        classe3: "",
        classe4: "blue",
        classe5: "yellow",
        verdadeiro: false,
        blue: "blue",
        green: "green",
        tamanho: 0,
        largura: "",
    },
    methods: {
        // iniciarEfeito(){
        //     setInterval(()=>{
        //         this.aplicarC1 = !this.aplicarC1;
        //     }, 1000);
        // },
        iniciarEfeito(){
            setInterval(()=>{
                this.classe1 = this.classe1=="destaque"?"encolher":"destaque";
            }, 1000);
        },
        startProgress(){
            setInterval(()=>{
                this.tamanho++;
                this.largura = this.tamanho + "px";
            }, 10);
        },
        setClasse(){
            if(event.target.value == "true"){
                this.verdadeiro=true;
            }else{
                this.verdadeiro=false;
            }
        }
    },
    computed:{
    }
});
