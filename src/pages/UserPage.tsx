import {FC} from "react";
import {Outlet} from "react-router-dom";

import {UserForm, Users} from "../components";

const UserPage: FC = () => {
    return (
        <div>
            <UserForm/>
            <Outlet/>
            <hr/>
            <Users/>
        </div>
    );
};

export {UserPage};