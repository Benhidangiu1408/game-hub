import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'ac47b881c1094b14a4a32e71e702e79b'
    }
})