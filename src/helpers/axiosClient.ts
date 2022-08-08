import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

const client: AxiosInstance = axios.create({ baseURL: "", headers: {} });

client.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // TODO: ...
  },
  (error: any) => {
    console.log(error);
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (err: AxiosError) => {
    // TODO:...
    return Promise.reject();
  }
);

export default client;
