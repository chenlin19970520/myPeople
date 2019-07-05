
import login from "./modules/login"
import Axios from "axios";
const store = ()=>{
    new Vuex.Store({
        modules:{
            login
        },
        actions:{
            async nuxtServerInit({commit},{req}){
                if(req.session && req.session.token){
                    commit("login/token",req.session.token);
                }
            },
            async login({commit},{token}){
                try{
                    const {data} = await Axios.post("/api/login",{token:token});
                }catch{
                    
                }
            }
        }
    })
}
export default store