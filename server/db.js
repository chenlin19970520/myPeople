const mongoose = require("mongoose");

const mongodb = mongoose.connect(
    "mongodb://chenlin:19970520@www.chenyibai.cn:27017/my",{
        useNewUrlParser:true
    }
)
let userSchema = new mongoose.Schema({
    username:String,
    password:String
})
let user = mongoose.model("ts",userSchema);

function db(){
    return user
}
module.exports = {
    db:db
}