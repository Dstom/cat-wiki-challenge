import React, { useEffect, useState } from 'react'
import CatLogoBlanco from '../../CatwikiLogoWhitey.svg'

import { SearchIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid'

import HeroImagelg from '../../assets/images/HeroImagelg.png';
import { Header } from '../Header'
import { Footer } from '../Footer';
import { useDispatch, useSelector } from 'react-redux';
import { breedTenMostSearchedStartLoading, breedAllNamesStartLoading } from '../../actions/breed';
import { Link } from 'react-router-dom';

export const HomeScreen = () => {

    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState("");
    const [focusSearch, setFocusSearch] = useState(false);

    const { tenMostSearched, breedNames } = useSelector(state => state.breed);

    const fourSearched = tenMostSearched.slice(0, 4);

    useEffect(() => {
        dispatch(breedTenMostSearchedStartLoading());

        dispatch(breedAllNamesStartLoading())
    }, [dispatch]);


    return (
        <>
            <Header />

            <div className="container mx-auto relative">

                <div className="w-full sm:w-1/2 absolute 
                flex flex-col h-full justify-center 
                pl-8 lg:pl-28
                ">
                    <div className="w-24 sm:w-36 md:w-48 lg:w-96">
                        <img src={CatLogoBlanco} className="w-full mb-3" alt="catLogo" />
                    </div>


                    <h1 className="text-white text-sm md:text-2xl mb-4 lg:mb-12">Get to know more about your cat breed</h1>
                    <div className="search_container w-full relative"
                    >
                        <div className="x_button"
                            onClick={e => setFocusSearch(false)}

                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>

                        <div className="w-5/6 relative rounded-full shadow-sm mb-4 ">

                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="
                                    border-gray-300
                                    focus:ring-indigo-500
                                    focus:border-indigo-500 
                                    block w-full
                                    pl-4 md:pl-7 pr-12 py-1 md:py-4
                                    text-sm
                                    md:text-2xl  
                                    rounded-full
                                    "

                                onChange={event => { setSearchTerm(event.target.value) }}
                                onFocus={e => { e.currentTarget === e.target && setFocusSearch(true) }}
                                onBlur={e => { e.currentTarget === e.target && !e.relatedTarget && setFocusSearch(false) }}
                                placeholder="Enter your breed"
                            />

                            <div className="absolute inset-y-0 right-4 pl-3 flex items-center">
                                <SearchIcon className="text-brown-500 sm:text-sm h-5 w-5" />
                            </div>
                        </div>

                        <div className="w-5/6 search_results ">
                            <div className="search_results_items max-h-80 bg-white overflow-auto rounded-xl">
                                {
                                    breedNames.filter(val => {
                                        if (searchTerm === "") {
                                            return val
                                        } else if (val.toLowerCase().includes(searchTerm.toLowerCase())) {
                                            return val
                                        }
                                    }).map((name, index) => (
                                        <Link to={`./breed/${name}`} key={name} className="block p-3 hover:bg-gray-300">{name}</Link>
                                    ))
                                }
                                {
                                    breedNames.filter(val => {
                                        if (searchTerm === "") {
                                            return val
                                        } else if (val.toLowerCase().includes(searchTerm.toLowerCase())) {
                                            return val
                                        }
                                    }).length === 0 && <p className="block p-3 ">No results</p>
                                }
                            </div>
                        </div>
                    </div>



                </div>
                <img src={HeroImagelg} alt="Hero" className="rounded-t-3xl  object-cover" />


            </div>

            <div className="bg-gray-bg text-brown container mx-auto 
        p-8 lg:px-28 lg:pb-24
        rounded-b-3xl
        ">
                <h1 className="font-medium mb-12"><span className="border-b-2 border-brown-two">Most</span> Searched Breeds</h1>

                <div className="mb-12 flex">
                    <div className=" md:w-1/2">
                        <h1 className="text-5xl font-bold leading-10">66+ Breeds For you to discover</h1>
                    </div>
                    <div className="hidden md:flex md:w-1/2 h-auto  items-end justify-end">
                        <h1 className="opactiy-60 flex items-center">
                            <Link to="./mostsearched">SEE MORE</Link>
                            <ArrowNarrowRightIcon className="h-3 w-3" />
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12 text-brown">
                    {
                        fourSearched.map(breed => (

                            <Link key={breed.id} to={`./breed/${breed.name}`}>
                                <div
                                    className=" transform transition duration-500 hover:scale-110"
                                >
                                    <div className="aspect-w-square aspect-h-square mb-5">
                                        <img className="rounded-3xl w-full " src={breed.image.url} alt={breed.name} />
                                    </div>
                                    <h1 className="font-semibold">{breed.name}</h1>

                                </div>
                            </Link>

                        ))
                    }

                </div>

            </div>


            <div className="text-brown container mx-auto p-8 lg:p-28 md:flex">
                <div className="w-full lg:w-1/2 flex flex-col justify-center p-4">
                    <h1 className="text-5xl font-bold mb-10"><span className="border-t-4 border-brown-two">W</span>hy should you have a cat?</h1>

                    <p className="text-lg mb-10">
                        Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves
                    </p>

                    <h1 className="opactiy-60 flex items-center">
                        <p>SEE MORE </p>
                        <ArrowNarrowRightIcon className="h-3 w-3" />
                    </h1>
                </div>

                <div className="w-full lg:w-1/2 flex ">
                    <div className="w-1/2 flex flex-col items-end mr-6">
                        <img className="rounded-3xl cat object-cover mb-7" alt="cat"
                            src="/images/gato3.png"
                        />

                        <img className="rounded-3xl cat-woman object-cover" alt="cat and woman"
                            src="/images/gato2.png"

                        />
                    </div>
                    <div className="w-1/2">
                        <img className="rounded-3xl cat-back object-cover" alt="cat on back"
                            src="/images/gato.png" />

                    </div>



                </div>

            </div>

            <Footer />


        </>

    )
}
