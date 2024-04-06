import { useEffect } from "react";
import AboutProducts from "../Components/AboutProducts";
import LandingImage from "../Components/LandingImage";

export default function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='mt-1' style={{ minHeight: '100vh' }}>
            <LandingImage />
            <AboutProducts />
        </div>
    )
}