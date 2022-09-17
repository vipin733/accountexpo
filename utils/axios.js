import axios from "axios";
import store from "../store";

axios.interceptors.request.use(function (config) {
    let token = store.getState().token
    config.headers = {
        Authorization: token ?? ""
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default axios