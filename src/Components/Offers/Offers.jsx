import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
    return (
        <>
            <div className="offers">
                <div className="offers-left">
                    <h4>Exclusive Offers For You</h4>
                    <p>ONLY ON BEST SELLERS PRODUCT</p>
                    <button>Check Now</button>
                </div>
                <div className="offers-right">
                    <img src={exclusive_image} alt="exclusive img" />
                </div>
            </div>
        </>
    );
};

export default Offers;
