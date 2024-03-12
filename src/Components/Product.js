import { Link } from "react-router-dom";
export default function Product(props) {
    const { product, showButton } = props;
    return (
        <>
            <div class="card" >
                <img src={props.product.image} style={styles.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.product.title + '...'}</h5>
                    <p class="card-text">{props.product.description + '...'}</p>
                    <p class="card-text">Price : ${props.product.price}</p>
                    {
                        showButton && <Link to={`product/${product.id}`} class="btn btn-primary">Details</Link>
                    }
                </div>
            </div>
        </>
    )
}
const styles = {
    image: {
        height: '300px'
    },

}