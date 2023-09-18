import axios, {AxiosResponse} from "axios";
import {baseURL} from "../configs";

// export type AxiosRes<T> = Promise<AxiosResponse<T>>

type IRes<DATA> = Promise<AxiosResponse<DATA>>

const apiServices = axios.create({baseURL});


export type {
    IRes
}


export {
    apiServices
}