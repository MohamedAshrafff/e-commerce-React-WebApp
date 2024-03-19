import React from "react";
import Carousel from "../Components/Carousel";
import ProductsList from "../Components/ProductsList";

export default function HomePage() {
    return (
        <>
            <Carousel />
            <h1 className="text-center text-danger">NEW ARRIVALS</h1>
            <ProductsList />
        </>
    )
}