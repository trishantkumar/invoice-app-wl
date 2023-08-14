import { createStore } from 'vuex'
import data from "./../data.js"

// Create a new store instance.
const store = createStore({
  state () {
    return {
      invoiceData: data,
    }
  },
  mutations: {
    saveData(state, payload) {
        state.invoiceData = payload;
    }
  },
  getters: {
    getInvoiceData: state => {
      return state.invoiceData
    }
  }
})

export default store;