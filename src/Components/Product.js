import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Product(props) {

    return (
        <Card className='lola p-3 text-center' style={{ width: '18rem' }}>
            <Link to={`/products/${props.product.id}`} className='text-dark' style={{ textDecoration: 'none' }}>
                <Card.Img variant="top" src={props.product.image} style={styles.image} />
                <Card.Body >
                    <Card.Title className="align-items-baseline mb-4 fw-bold">{props.product.title}</Card.Title>
                    <div className="">
                        <Card.Text className=''> Rating: <span className="text-danger heading-font">{props.product.rating.rate}</span>
                        </Card.Text>
                        {/* <span className="text-danger text-end heading-font">
                            NEW ARRIVAL
                        </span> */}
                    </div>
                    <Card.Text className="fs-3 ">${props.product.price}</Card.Text>
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