export default {
  state: {
    favorites: [],
  },

  getters: {
    getallFavorites(state) {
      return state.favorites;
    },

    isFavoriteAdded: (state) => (item) => {
      let index = state.favorites.findIndex(
        (favoriteItem) => favoriteItem.id === item.id
      );

      // if (index >= 0) {
      //   return true;
      // }

      return index >= 0;
    },
  },

  mutations: {
    addToFavorite(state, item) {
      state.favorites.push(item);
    },

    removeFromFavorite(state, item) {
      let index = state.favorites.findIndex(
        (favoriteItem) => favoriteItem.id === item.id
      );

      if (index > -1) {
        state.favorites.splice(index, 1);
      }
    },
  },
};
