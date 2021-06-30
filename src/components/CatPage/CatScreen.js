import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { breedSearchedImagesStartLoading, breedSearchedStartLoading } from '../../actions/breed';
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Rating } from './Rating';

const features = [
    { name: 'Adaptability:', value: "adaptability" },
    { name: 'Affection level:', value: "affection_level" },
    { name: 'Child friendly:', value: "child_friendly" },
    { name: 'Grooming:', value: "grooming" },
    { name: 'Intelligence:', value: "intelligence" },
    { name: 'Health issues:', value: "health_issues" },
    { name: 'Social needs:', value: "social_needs" },
    { name: 'Stranger friendly:', value: "stranger_friendly" }
]

export const CatScreen = () => {

    const dispatch = useDispatch();
    const { breedName } = useParams();

    const [breedImage, setBreedImage] = useState({});


    const { breedSearched, breedSearchedImages } = useSelector(state => state.breed);

    useEffect(() => {
        dispatch(breedSearchedStartLoading(breedName));
    }, [dispatch, breedName])

    useEffect(() => {
        console.log("breed", breedSearched);

        if (breedSearched && !Object.keys(breedSearched).length == 0) {
            dispatch(breedSearchedImagesStartLoading(breedSearched.id));

            fetch(`https://api.thecatapi.com/v1/images/${breedSearched.reference_image_id}`, {
                method: 'GET',
                headers: {
                    'x-api-key': 'DEMO-API-KEY'
                }
            }).then(res => res.json())
                .then(r => setBreedImage(r.url));
        }
    }, [dispatch, breedSearched])

    return (
        <>

            <Header />

            <div className="container mx-auto md:flex">
                <div className="w-full  md:w-1/3 p-4 md:pl-8 lg:pl-12">
                    <div className="aspect-w-square aspect-h-square mx-auto">
                        <img src={breedImage} alt="breed" className="rounded-3xl" />
                    </div>
                </div>

                <div className="w-full md:w-2/3 p-4 md:px-12 lg:px-16 xl:px-24">
                    <h1 className="text-4xl font-semibold text-brown mb-6">{breedSearched.name}</h1>
                    <p className="text-xl font-medium text-brown mb-8">{breedSearched.description}</p>
                    <p className="text-lg text-black mb-6"><b>Temperament:</b> {breedSearched.temperament}</p>
                    <p className="text-lg text-black mb-6"><b>Origin:</b> {breedSearched.origin}</p>
                    <p className="text-lg text-black mb-6"><b>Life Span:</b> {breedSearched.life_span}</p>

                    {
                        features.map(feature => (
                            <p
                                key={feature.name}
                                className="text-lg text-black flex items-center mb-6"
                            >
                                <b className="w-28 md:w-40 ">{feature.name}</b>
                                <Rating number={breedSearched[feature.value]} />
                            </p>
                        ))
                    }
                </div>
            </div>

            <div className="container mx-auto mb-32 ">
                <h1 className="text-4xl text-brown font-semibold mb-10 m-4">Other photos</h1>

                <div className="flex flex-wrap">
                    {
                        breedSearchedImages.map(breed => (
                            <div
                                className=" w-1/2 md:w-1/4 p-4"
                                key={breed.id}
                            >
                                <div className="aspect-w-square aspect-h-square mx-auto">
                                    <img className="rounded-3xl" src={breed.url} alt={breed.breeds[0].name} />
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>



            <Footer />


        </>
    )
}
