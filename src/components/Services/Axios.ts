import axios, { type AxiosRequestConfig } from "axios";

let BASE_URL = 'https://fundoonotes.incubation.bridgelabz.com/api/';

export const post = (url: string,data: any,headerConfig: AxiosRequestConfig<any> | undefined) => {
    return axios.post(BASE_URL+url,data,headerConfig)
}
export const Get = (url: string, headerConfig: AxiosRequestConfig<any> | undefined) => {
    return axios.get(BASE_URL + url, headerConfig);
}
export const Delete = (url: string, headerConfig: AxiosRequestConfig<any> | undefined) => {
    return axios.delete(BASE_URL + url, headerConfig);
};

export const Put = (url: string, data: any, headerConfig: AxiosRequestConfig<any> | undefined) => {
    return axios.put(BASE_URL + url, data, headerConfig);
};

export const Patch = (url: string, data: any, headerConfig: AxiosRequestConfig<any> | undefined) => {
    return axios.patch(BASE_URL + url, data, headerConfig);
};
