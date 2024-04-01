import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Product(props) {

    return (
        <Card className='lola p-3 text-center' style={{ width: '18rem' }}>
            <Link to={`/products/${props.product.id}`} className='text-dark' style={{ textDecoration: 'none' }}>
                <Card.Img variant="top" src={props.product.image} style={styles.image} />
                <Card.Body >
                    <Card.Title className="align-items-baseline mb-4">{props.product.title}</Card.Title>
                    <Card.Text className='align-self-end'> Rating: <span className="text-danger">{props.product.rating.rate}</span>
                    </Card.Text>
                    <Card.Text className="fs-3 "> ${props.product.price}</Card.Text>
                </Card.Body>
                <Button variant="dark" className='col-9 align-self-center'>View Details</Button>
            </Link>
        </Card>
    )
}
const styles = {
    image: {
        height: '300px',
        // objectFit: 'cover'
    },

}