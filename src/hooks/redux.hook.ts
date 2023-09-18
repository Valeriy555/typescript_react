import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../redux";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // протипизировали useSelector и назвали его useAppSelector
const useAppDispatch =()=> useDispatch<AppDispatch>();

export {
    useAppDispatch,
    useAppSelector
}
