import { IProduct } from "../type/product"
import instance from "./instance";

export const list = () => {
    const url = "/products";
    return instance.get(url);
}
export const remove = (id: string) => {
    const url = `/product/${id}`;
    return instance.delete(url);
}
export const getAPrd = (id: string | undefined) => {
    const url = `/product/${id}`;
    return instance.get(url);
}
export const add = (product: IProduct) => {
    const url = "/product";
    return instance.post(url, product);
}
export const edit = (product: IProduct) => {
    const url = `/product/${product._id}`;
    return instance.put(url, product);
}
