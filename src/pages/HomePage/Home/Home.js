import React from 'react';
import useProducts from '../../hooks/useProducts';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import DiscountBanner from '../DiscountBanner/DiscountBanner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Slider from '../Slider/Slider';
import ScaleLoader from "react-spinners/ScaleLoader";

const Home = () => {
    const { products } = useProducts();
    return (
        <div>
            {
                products.length > 0 ? <>
                    <Navigation></Navigation>
                    <Slider></Slider>
                    <Products></Products>
                    <DiscountBanner></DiscountBanner>
                    <Reviews></Reviews>
                    <Footer></Footer>
                </> : <div className="text-center">
                    <ScaleLoader size={150} color={"#b57600"} speedMultiplier={1.5} />
                </div>
            }
        </div>
    );
};

export default Home;