<template>
    <h1>{{$store.getters.descricao}}{{valor}}</h1>

</template>

<script>
export default {
    name: "algumacoisa",

    computed: {
        descricao: {
            set(value){
                this.$store.commit("setDescricao", value)
            }
        },
        valor: {
            get(){
              return this.$store.state.produto.valor
            },
            set(value){
              this.$store.commit("setValor", value)
            }
        },
    }
}
</script>

<style>

</style>