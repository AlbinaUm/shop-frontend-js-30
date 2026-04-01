import axios from "axios";
import {apiURL} from "./constants.ts";

const axiosApi = axios.create({
    baseURL: apiURL
});

axiosApi.defaults.withCredentials = true;

export default axiosApi;