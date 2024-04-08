import React, { useEffect } from "react";
import Carousel from "../Components/Carousel";
import ArrivalsList from "../Components/ArrivalsList";

export default function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <span style={{ minHeight: '100vh' }}>
            <Carousel />
            <ArrivalsList />
        </span>
    )
}