export default {
  namespaced: true,
  state: () => ({
    favourites: [],
  }),
  mutations: {
    ADD(state, item) {
      const liked = (item.liked_by_user = true);
      if (liked) {
        state.favourites.push(item);
      }
    },
    REMOVE(state, item) {
      item.liked_by_user = false;
      const index = state.favourites.indexOf(item);
      if (index > -1) {
        state.favourites.splice(index, 1);
      }
    },
  },
  actions: {
    toggle({ commit }, item) {
      if (item.liked_by_user == false) {
        commit("ADD", item);
      } else {
        commit("REMOVE", item);
      }
    },
  },
  getters: {
    favourites(state) {
      return state.favourites;
    },
  },
};
