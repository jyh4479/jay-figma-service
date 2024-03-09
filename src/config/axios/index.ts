import axios from "axios";

export const getAxios = (url: string) => {
    return axios.get(url);
}

export const postAxios = (url: string) => {
    return axios.post(url);
}