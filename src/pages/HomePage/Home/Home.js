import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Slider></Slider>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;