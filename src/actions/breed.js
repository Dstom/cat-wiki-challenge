import { fetchCatWiki } from "../helpers/fetch";
import { types } from '../types/types'


export const breedAllNamesStartLoading = () => {
    return async (dispatch) => {
        try {
            const resp = await fetchCatWiki('breeds', 'GET', {});
            const body = await resp.json();

            const breedNames = body.map(breed => breed.name);

            dispatch(breedLoadAllBreedNames(breedNames));
        } catch (error) {
            console.log(error);
        }
    }
}

const breedLoadAllBreedNames = (breedNames) => ({
    type: types.breedLoadAllBreedNames,
    payload: breedNames
})

export const breedTenMostSearchedStartLoading = () => {
    return async (dispatch) => {

        try {
            const resp = await fetchCatWiki('breeds/', 'GET', { limit: 10 });
            const body = await resp.json();

            const breeds = body;
            dispatch(breedMostSearchedLoaded(breeds));


        } catch (error) {
            console.log(error);
        }
    }
}

const breedMostSearchedLoaded = (breeds) => ({
    type: types.breedLoadTenMostSearched,
    payload: breeds
})

//https://api.thecatapi.com/images/search?breed_id={{selected_breed.id}}

//https://api.thecatapi.com/v1/breeds/search

export const breedSearchedStartLoading = (breedName) => {
    return async (dispatch) => {
        try {

            dispatch(breadLoadingBreedSearch());

            const respBreed = await fetchCatWiki('breeds/search', 'GET', { q: breedName });
            const bodyBreed = await respBreed.json();

            const breed = bodyBreed;
            dispatch(breedLoadBreedSearched(breed[0]));

        } catch (error) {
            console.log(error);
        }
    }
}

const breadLoadingBreedSearch = () => ({
    type: types.breadLoadingBreedSearch
})

const breedLoadBreedSearched = (breed) => ({
    type: types.breedLoadBreedSearched,
    payload: breed
})

export const breedSearchedImagesStartLoading = (breedId) => {
    return async (dispatch) => {
        try {
            const respBreedImages = await fetchCatWiki('images/search', 'GET', { breed_id: breedId, limit: 8 });

            const bodyBreedImages = await respBreedImages.json();

            const breedImages = bodyBreedImages;

            dispatch(breedLoadImagesBreedSearched(breedImages));


        } catch (error) {
            console.log(error);

        }
    }
}

const breedLoadImagesBreedSearched = (breedImages) => ({
    type: types.breedLoadImagesBreedSearched,
    payload: breedImages
})
