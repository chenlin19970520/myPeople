export default function({store,error}){
    if(!store.state.token){
        error({
            message:"you need login",
            statusCode:403
        })
    }
}