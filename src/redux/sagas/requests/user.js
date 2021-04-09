import axios from "axios";

export function requestGetUser (){
    return axios.request({
        method: "get",
        url: "http://localhost:4000/user"
    });
}