import {FC, PropsWithChildren} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {IUser} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {userActions} from "../../redux";

interface IProps extends PropsWithChildren {
}

const UserForm: FC<IProps> = () => {
    const {register, handleSubmit, reset, setValue} = useForm<IUser>();

    const {userForUpdate} = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();

    if (userForUpdate) {
        setValue('name', userForUpdate.name)
        setValue('age', userForUpdate.age)
        setValue('email', userForUpdate.email)
    }


    const save: SubmitHandler<IUser> = async (data) => {
        await dispatch(userActions.createUsers({user: data}))
        reset()
    }

    const update: SubmitHandler<IUser> = async (data) => {
        await dispatch(userActions.updateUser({_id:userForUpdate!._id, user:data}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(userForUpdate ? update : save)}>

            <input type='text' placeholder={'name'} {...register('name')}/>
            <input type='text' placeholder={'age'} {...register('age')}/>
            <input type='text' placeholder={'email'} {...register('email')}/>
            <button>{userForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export {UserForm};