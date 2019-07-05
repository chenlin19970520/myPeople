const state = () => ({
    login: false, //未登录,
    user: "", //用户信息,
    token: "" //token
});

function loginOut(ctx) {
    ctx.commit("login", 222);
    console.log(ctx.state.login);
}
function checkLogin(ctx) {

}
function loginSuccess(ctx) { }

const getters = {
    login: state => {
        //未登录
        if (!state.login) {
        }
        return state.login;
    }
};

const mutations = {
    login(state, s) {
        state.login = s;
    },
    user(state, s) {
        state.user = s;
    },
    token(state, s) {
        state.token = s;
    }
};

const actions = {
    success({ commit }, pay) {
        commit("login", true);
        commit("token", pay.token);
    },
    user({ commit }, pay) {
        commit("user", pay.user);
    },
    out(ctx) {
        loginOut(ctx);
    }
};
export default {
    namespaced: true,
    state,
    mutations,
    actions
};
