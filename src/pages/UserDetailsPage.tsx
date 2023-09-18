import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {useAppLocations} from "../hooks";
import {IUser} from "../interfaces";
import {userService} from "../services";
import {UserDetails} from "../components/UserDetails/UserDetails";

const UserDetailsPage: FC = () => {
    const {state} = useAppLocations<IUser>();
    const {id} = useParams<{ id: string }>();

    const [user, setUser] = useState<IUser | null>(null);


    useEffect(()=> {
        if(state){
            setUser(state)
        }else{
            userService.getById(+id!).then(({data})=>setUser(data))
        }
    },[id, state])

    return (
        <div>
            {user && <UserDetails user={user}/>}
        </div>
    );
};

export {UserDetailsPage};