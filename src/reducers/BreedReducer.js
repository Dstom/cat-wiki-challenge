import { types } from '../types/types';

const initialState = {
    tenMostSearched: [],
    breedSearched: {},
    breedSearchedImages: [],
    breedNames: []
}

export const BreedReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.breedLoadTenMostSearched:
            return {
                ...state,
                tenMostSearched: [...action.payload]
            }
        case types.breedLoadImagesBreedSearched:
            return {
                ...state,
                breedSearchedImages: [...action.payload],
            }
        case types.breedLoadBreedSearched:
            return {
                ...state,
                breedSearched: action.payload,
            }
        case types.breedLoadAllBreedNames:
            return {
                ...state,
                breedNames: [...action.payload]
            }
        default:
            return state;
    }
}