import {useEffect, useState} from "react";

import {IUser} from "../../interfaces";
import {userService} from "../../services";
import {User} from "../User/User";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(()=>{
        userService.getAll().then(({data})=>setUsers(data))
    })

    return (
        <div>
            {users.map(user=><User user={user} key={user._id}/>)}
        </div>
    );
};

export {Users};