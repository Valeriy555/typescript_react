import {AxiosRes, axiosService} from "./axios.services";

import {IUser} from "../interfaces";
import {urls} from "../configs";

const userService = {
    getAll: ():AxiosRes<IUser[]> => axiosService.get(urls.users)

}

export {userService}