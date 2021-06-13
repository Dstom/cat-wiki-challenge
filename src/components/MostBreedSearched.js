import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from './Footer';
import { Header } from './Header';

import { breedTenMostSearchedStartLoading } from '../actions/breed';

export const MostBreedSearched = () => {

    const { tenMostSearched } = useSelector(state => state.breed);
    console.log(tenMostSearched);

    const dispatch = useDispatch();

    useEffect(() => {
        if (tenMostSearched.length === 0) {
            dispatch(breedTenMostSearchedStartLoading());


        }
    }, [dispatch])


    return (
        <>
            <Header />
            <div className="container mx-auto text-brown ">
                <h1 className="font-bold text-4xl mb-12 px-4">Top 10 most searched breeds</h1>

                {
                    tenMostSearched.map((breed, index) => (
                        <div className="flex gap-11 mb-12 px-4  flex-wrap md:flex-nowrap"
                            key={breed.name, index}
                        >
                            <div className="w-full md:w-2/12">
                                <div className="aspect-w-square aspect-h-square mx-auto">
                                    <img src={breed.image.url} alt="breed" className="rounded-3xl" />
                                </div>
                            </div>

                            <div className="w-full md:w-10/12 pr-0 md:pr-12 lg:pr-24" >
                                <h1 className="font-bold text-4xl mb-5">{index+1}. {breed.name}</h1>
                                <p className="font-medium text-xl">{breed.description}</p>
                            </div>

                        </div>



                    ))
                }
            </div>

            <Footer />
        </>
    )
}
