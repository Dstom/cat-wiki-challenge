import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from "react-router-dom";
import { CatScreen } from '../components/CatPage/CatScreen';
import { HomeScreen } from '../components/HomePage/HomeScreen';
import { MostBreedSearched } from '../components/MostBreedSearched';

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>

                    <Route exact path='/breed/:breedName' component={CatScreen} />     
                    
                    <Route exact path="/mostsearched" component={MostBreedSearched}             />
                    <Route exact path='/' component={HomeScreen} />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
