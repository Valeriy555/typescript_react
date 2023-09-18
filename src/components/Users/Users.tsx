import {FC, PropsWithChildren, useEffect} from "react";


import {User} from "../User/User";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {userActions} from "../../redux";

interface IProps extends PropsWithChildren {
}

const Users: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {users} = useAppSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(userActions.getAllUsers())
    },[dispatch])

    return (
        <div>
            {users.map(user => <User user={user} key={user._id}/>)}
        </div>
    );
};

export {Users};