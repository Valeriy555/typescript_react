import {IUser} from "../../interfaces";
import {FC, ReactNode} from "react";

interface IProps {
    user: IUser,
    children?: ReactNode
}

const User: FC<IProps> = ({user}) => {
    const {_id, name, age, email} = user;
    return (
        <div>
            <div>id:{_id}</div>
            <div>name:{name}</div>
            <div>age:{age}</div>
            <div>email:{email}</div>
        </div>
    );
};

export {User};