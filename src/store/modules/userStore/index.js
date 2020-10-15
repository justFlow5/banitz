import actions from './actions';
import mutations from './mutations';
import { getters } from './getters';

const state = {
    wishlist: [],
    cart: [],
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};
