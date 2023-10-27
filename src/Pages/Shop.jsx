import React from "react";
import Hero from "../Components/Hero/Hero.jsx";
import Popular from "../Components/Popular/Popular.jsx";
import Offers from "../Components/Offers/Offers.jsx";
import NewCollections from "../Components/NewCollections/NewCollections.jsx";
import NewsLetter from "../Components/NewsLetter/NewsLetter.jsx";

const Shop = () => {
    return (
        <>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetter />
        </>
    );
};

export default Shop;
