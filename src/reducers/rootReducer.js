import { combineReducers } from "redux";
import { BreedReducer } from "./BreedReducer";



export const rootReducer = combineReducers({
    breed: BreedReducer,
    
});