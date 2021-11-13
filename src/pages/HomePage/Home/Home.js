import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import BrandsLogo from '../BrandsLogo/BrandsLogo';
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
            <BrandsLogo></BrandsLogo>
            <Footer></Footer>
        </div>
    );
};

export default Home;