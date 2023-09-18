import {FC, PropsWithChildren} from "react";
import {IUser} from "../../interfaces";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {userActions} from "../../redux";

interface IProps  extends PropsWithChildren  {
    user: IUser,
    // children?: ReactNode
}

const User: FC<IProps> = ({user}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {_id, name, age, email} = user;

    const deleteUser = async () => {
        await dispatch(userActions.deleteUser({_id}))
    };
    return (
        <div>
            <div>id:{_id}</div>
            <div>name:{name}</div>
            <div>age:{age}</div>
            <div>email:{email}</div>
            <button onClick={()=>dispatch(userActions.setUserForUpdate({user}))}>Update</button>
            <button onClick={deleteUser}>Delete</button>
            <button onClick={()=>navigate(`${_id}`, {state:user})}>Details</button>

            <hr/>
        </div>
    );
};

export {User};