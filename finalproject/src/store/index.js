import { createStore } from 'vuex'

export default createStore({
  state: {
    // При решении проблемы заменить на пустой массив
    notes: [
      {
        id: 1,
        date: "16.03.2010",
        category: "Food",
        value: 333
      },
      {
        id: 2,
        date: "26.10.2011",
        category: "Food",
        value: 22
      },
      {
        id: 3,
        date: "04.04.2014",
        category: "Transport",
        value: 1030
      },
    ] 
  },
  getters: {
    getNotesList({ notes }) {
      return notes;
    }
  },
  mutations: {
    setNotesList({ notes }, payload) {
      notes = payload;
    }
  },
  // Проблема с обновлением данных
  actions: {
    async fetchData({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              date: "16.03.2010",
              category: "Food",
              value: 333
            },
            {
              id: 2,
              date: "26.10.2011",
              category: "Food",
              value: 22
            },
            {
              id: 3,
              date: "04.04.2014",
              category: "Transport",
              value: 1030
            },
          ])
        }, 1000)
      }).then(list => commit("setNotesList", list));
    }
  }
})