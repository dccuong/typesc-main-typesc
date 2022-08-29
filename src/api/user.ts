import { TypeUser } from "../type/user";
import instance from "./instance";

export const signin = (user: TypeUser) => {
    const url = '/signin';
    return instance.post(url, user);
};

export const signup = (user: TypeUser) => {
    const url = `/signup`;
    return instance.post(url, user);
}
export const myin4 = (_id: String) => {
    const url = `/user/` + { _id };
    return instance.get(url);
}