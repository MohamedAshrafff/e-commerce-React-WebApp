import image1 from '../Images/image-1.jpeg'
import image2 from '../Images/image-2.avif'
import image3 from '../Images/image-3.avif'

export default function Slider() {
    return (
        <>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img style={styles.sliderImage} src={image1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img style={styles.sliderImage} src={image2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img style={styles.sliderImage} src={image3} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

const styles = {
    sliderImage: {
        height: '500px',
    }
}