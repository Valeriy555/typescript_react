import {useLocation} from "react-router-dom";


interface IState<STATE> {
    state: STATE
}

const useAppLocations = <T>(): IState<T> => useLocation();

export {
    useAppLocations
}