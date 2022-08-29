import { IProduct } from "../type/product"
import instance from "./instance";

export const addCate = () => {
    const url = "/category";
    return instance.post(url)
}
export const getCate = () => {
    const url = "/category";
    return instance.get(url)
}
export const getPrdCate = (_id: Object) => {
    const url = "/category/" + _id
    return instance.get(url)
}