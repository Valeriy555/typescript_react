import {FC, PropsWithChildren} from 'react';
import {IUser} from "../../interfaces";

interface IProps extends PropsWithChildren {
    user: IUser
}

const UserDetails: FC<IProps> = ({user:{_id,name,age,email}}) => {
    return (
        <div>
            <div>id:{_id}, {name}, {age} years, email:{email}</div>

        </div>
    );
};

export {UserDetails};
