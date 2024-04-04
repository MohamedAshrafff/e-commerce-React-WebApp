import AboutProducts from "../Components/AboutProducts";
import LandingImage from "../Components/LandingImage";

export default function AboutPage() {
    return (
        <div className='mt-1' style={{ minHeight: '100vh' }}>
            <LandingImage />
            <AboutProducts />
        </div>
    )
}