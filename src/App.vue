<template>
    <div class="container p-3">
      
      <div class="m-auto w-50 border text-center p-3">
        <h1>Adicione produtos na lista</h1>
        <label for="">id</label>
        <input class="card shadow m-auto" type="text" v-model="id">
        <label for="">Descrição</label>
        <input class="card shadow m-auto" type="text" v-model="descricao">

        <label for="">Valor</label>
        <input class="card shadow m-auto mb-4" type="text" v-model="valor">
        <button class="btn btn-secondary" @click.prevent="addListaProdutos">Adicionar</button>
      </div>

      <div class="carrinho w-30 m-auto text-center border p-4">
        <h1>Carrinho de Compras</h1>

        <div class="card shadow w-25 m-auto p-3" v-for="(item, key) in carrinho" :key="key">
          <p>Descrição: <strong>{{item.descricao}}</strong></p>
            
          <p>Valor UNI: <strong>R${{item.valor}}</strong> </p>
            
          <p>Quantidade: <strong>{{item.qtde}}</strong></p>

          <p>Total R$: <strong>{{item.total}}</strong></p>
        </div>

      </div>

      <div class="w-100 border text-center">
        <h2>Loja de Produtos</h2>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 m-5 border ">

          <div class="col m-auto p-3" v-for="(item, key) in produtos" :key="key">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

              <div class="card-body">
                <p>{{key}}</p>
                <p class="card-text">{{item.descricao}}</p>
                <p class="card-text">R$ {{item.valor}}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button @click.prevent="addCarrinho(item.id, item.descricao, item.valor)" type="button" class="btn btn-sm btn-outline-secondary">Adicionar</button>
                    <button @click.prevent="deletaItem(item.id)" type="button" class="btn btn-sm btn-outline-secondary">Deletar</button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
 


  
</template>

<script>


export default {
  name: 'App',
  components: {
   
  },
  computed: {

    id: {
      get(){
        return this.$store.state.produto.id
      },
      set(value){
        this.$store.commit("setID", value)
      }
    },

    descricao: {
      get(){
        return this.$store.state.produto.descricao
      },
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

    produtos: {
      get(){
        return this.$store.state.listaProdutos
      },
      set(value){
        this.$store.commit("addListaProdutos", value)
      }
    },
    carrinho: {
      get(){
        return this.$store.state.carrinho
      },
      set(value){
        this.$store.commit("addCarrinho", value)
      }
    },
    delItem: {
      get(){
        return this.$store.state.delItem
      },
      set(value){
        this.$store.commit("delItem", value)
      }
    }
  },

  methods: {

    addListaProdutos(){
      this.produtos = {
        "id": this.id,
        "descricao": this.descricao,
        "valor": this.valor
      }
      this.id = ""
      this.descricao = ""
      this.valor = ""
    },
    addCarrinho(id, descricao, valor){
      this.carrinho = {
        "id": id,
        "descricao": descricao,
        "valor": valor,
      }
    },
    deletaItem(id){
      this.delItem = {
        "id": id
      }
      this.delItem = ""
    }
  }
}
</script>

<style>
.container {
  margin-top: 50px;
  width: 100%;
  border: 2px solid black;
}


</style>
