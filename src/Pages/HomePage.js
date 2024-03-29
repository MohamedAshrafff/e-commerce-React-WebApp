import React from "react";
import Carousel from "../Components/Carousel";
import ArrivalsList from "../Components/ArrivalsList";

export default function HomePage() {
    return (
        <>
            <Carousel />
            <h1 className="text-center text-danger">NEW ARRIVALS</h1>
            <ArrivalsList />
        </>
    )
}