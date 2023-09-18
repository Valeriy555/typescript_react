import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IUser} from "../../interfaces";
import {userService} from "../../services";

interface IState {
    users: IUser[],
    userForUpdate: IUser | null

}

const initialState: IState = {
    users: [],
    userForUpdate: null
};

const getAllUsers = createAsyncThunk<IUser[], void>(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }

    }
);

const createUsers = createAsyncThunk<IUser, { user: IUser }>(
    'userSlice/createUsers',
    async ({user}, {rejectWithValue}) => {
        try {
            const {data} = await userService.create(user);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }

    }
);

const updateUser = createAsyncThunk<void, { _id: number, user: IUser }>(
    'userSlice/updatingUser',
    async ({_id, user}, {rejectWithValue, dispatch}) => {
        try {
            await userService.updateById(_id, user)
            await dispatch(getAllUsers())
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
);

const deleteUser = createAsyncThunk<void,{_id:number}>(
    'userSlice/deleteUser',
    async ({_id}, {rejectWithValue,dispatch}) => {
        try {
            await userService.deleteById(_id)
            await dispatch(getAllUsers())
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const userSlice = createSlice({
    name: 'createSlice',
    initialState,
    reducers: {
        setUserForUpdate: (state,action:PayloadAction<{ user: IUser }>) =>{
            state.userForUpdate=action.payload.user
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.users = action.payload
            })
            .addCase(createUsers.fulfilled, (state, action) => {
                state.users.push(action.payload)
            })
            // .addCase(updateUser.fulfilled, (state, action) => {
            //     state.userForUpdate = null
            // })
});

const {reducer: userReducer, actions} = userSlice;

const userActions = {
    ...actions,
    getAllUsers,
    createUsers,
    updateUser,
    deleteUser

};

export {
    userActions,
    userReducer
}