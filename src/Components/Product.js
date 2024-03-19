import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slices/cart-slice";
import ProductDetails from "../Pages/ProductDetails";
import { Row } from "react-bootstrap";

export default function Product(props) {
    const { product, showButton } = props;

    const textSlicer = (text) => {
        // return (text.length > 15) ? text.slice(0, 15) + '...' : text.slice(0, 15);
        return text
    }
    const dispatch = useDispatch();
    return (
        <Card className='lola p-3 ' style={{ width: '18rem' }}>
            <Link to={`products/${props.product.id}`} className='text-dark' style={{ textDecoration: 'none' }}>
                <Card.Img variant="top" src={props.product.image} style={styles.image} />
                <Card.Body >
                    <Card.Title>{textSlicer(props.product.title)}</Card.Title>
                    <Card.Text> ${props.product.price}</Card.Text>
                </Card.Body>
            </Link>
            <Button variant="dark" className='col-9 align-self-center' onClick={() => dispatch(addToCart(props.product))}>Add to Cart</Button>
        </Card>
    )
}
const styles = {
    image: {
        height: '300px'
    },

}