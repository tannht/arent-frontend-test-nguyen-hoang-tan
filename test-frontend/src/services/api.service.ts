import axios from "axios";
const baseUrl = "http://localhost:3000";
const ApiMicroService = axios.create({
    baseURL: baseUrl,
    responseType: 'json',
})

export default ApiMicroService;

export const getData = async (url: string) => {
    return await ApiMicroService.get(url);
}
