import axios from "axios";

const instance= axios.create({
    baseURL:"http://13.235.90.125:2112/api/v1/poll"
});

export default instance;