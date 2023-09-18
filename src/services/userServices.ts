import {apiServices, IRes} from "./apiServices";

import {IUser} from "../interfaces";
import {urls} from "../configs";

const userService = {
    getAll: (): IRes<IUser[]> => apiServices.get(urls.users.base),
    create: (dataUser: IUser): IRes<IUser> => apiServices.post(urls.users.base, dataUser),
    getById: (id: number): IRes<IUser> => apiServices.get(urls.users.byId(id)),
    updateById:(id:number, dataUser: IUser)=> apiServices.put<IUser>(urls.users.byId(id),dataUser),
    deleteById: (id: number): IRes<void> => apiServices.delete(urls.users.byId(id))


}

export {userService}