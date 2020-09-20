import actions from './actions';
import mutations from './mutations';

const state = {
    isMenuOpen: false,
    isSearchOpen: false,
    isCartOpen: false,
    isWatchSpeckOpen: false,

};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};