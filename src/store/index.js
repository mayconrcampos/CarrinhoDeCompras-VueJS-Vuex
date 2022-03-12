import { createStore } from 'vuex'

export default createStore({
  state: {
    produto: {
      id: 1,
      descricao: "Molinete",
      valor: "190.00"
    },
    listaProdutos: [],
    carrinho: [],
    delItem: ""
  },
  mutations: {
    setID(state, payload){
      state.produto.id = payload
    },
    setDescricao(state, payload){
      state.produto.descricao = payload
    },
    setValor(state, payload){
      state.produto.valor = payload
    },
    addListaProdutos(state, payload){
      state.listaProdutos.push(payload)
    },
    addCarrinho(state, payload){
      const existeProduto = state.carrinho.find(prod => prod.id === payload.id)

      if(existeProduto){
        existeProduto.qtde += 1
        existeProduto.total = existeProduto.valor * existeProduto.qtde
      }else{
        payload.qtde = 1
        payload.total = payload.valor
        state.carrinho.push(payload)
      }
      
    },
    delItem(state, payload){
      var result = state.carrinho.filter(function(el) {
        return el.id == payload.id;
      });
        
      for(var elemento of result){
        var index = state.carrinho.indexOf(elemento);    
        state.carrinho.splice(index, 1);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
