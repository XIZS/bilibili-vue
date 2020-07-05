import slib from "../../test/SLib"
import axios from "axios"

let baseURL = "http://localhost:3000";

let req = axios.create({
    baseURL,
    timeout:1000,
})


function request(params) {
    if (params.method === "get") {
        return slib[params.api].slice(0);
    }
}



export default function (vue) {
    console.log("request api start")

    vue.prototype.reqGet = function (api) {
        return req.get(api).then(res=>{
           return res.data;
        })

        // console.log(api);
        // return new Promise((resolve, reject) => {
        //     resolve(request({ method: "get", api }));
        // })

    }
    vue.prototype.reqPost = function () {

    }
}