export const state = () => ({
  topLoader: false
});

export const mutations = {
  setTopLoader(state, value) {
    state.topLoader = value;
  }
};

export const getters = {
  getTopLoader(state) {
    return state.topLoader;
  }
};

export const actions = {
  setTopLoader({ commit }, value) {
    commit("setTopLoader", value);
  }
};
