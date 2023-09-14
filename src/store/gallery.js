const CLIENT_ID = "IycQ6cRKI7v5US891onSRMDCQBELiZYSAk39UvpCt7g";

export default {
  namespaced: true,
  state: () => ({
    gallery: [],
  }),
  mutations: {
    SET_GALLERY_QUERY(state, result) {
      state.gallery = result;
    },
  },
  actions: {
    async getGalleryQuery({ commit }, query) {
      try {
        const response = await fetch(`https://api.unsplash.com/search/photos/?query=${query}&client_id=${CLIENT_ID}&per_page=8&page=`);
        const result = await response.json();
        commit("SET_GALLERY_QUERY", result.results);
      } catch {
        console.log("ERROR_GETTING_GALLERY_QUERY");
      }
    },
  },
  getters: {
    gallery(state) {
      return state.gallery;
    },
  },
};
