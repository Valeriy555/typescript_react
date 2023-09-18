import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices";


const store = configureStore({
    reducer: {
        userReducer
    }
});


type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch


export type {
    RootState,
    AppDispatch
}

export {
    store
}