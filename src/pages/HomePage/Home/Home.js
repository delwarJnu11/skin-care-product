import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import DiscountBanner from '../DiscountBanner/DiscountBanner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Slider from '../Slider/Slider';

const Home = () => {
    const { isLoading } = useAuth();
    //spinner
    if (isLoading) {
        return <div className="text-center">
            <Spinner variant="success" animation="border"></Spinner>
        </div>
    }
    return (
        <div>
            <Navigation></Navigation>
            <Slider></Slider>
            <Products></Products>
            <DiscountBanner></DiscountBanner>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;