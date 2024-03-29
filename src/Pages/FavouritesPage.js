import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'

export default function FavouritesPage() {
    const favs = useSelector((state) => state.lists.favourites)
    const favsList = favs.map((item) => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td><img style={{ height: 100, width: 100 }} src={item.image} /></td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                {/* <td><Button variant='danger' onClick={() => dispatch(removeFromCart(item))} >Delete</Button></td> */}
            </tr>
        )
    })
    return (
        <div className='mt-5'>
            HELLO FROM FAVOURITES PAGE
            {favsList.length === 0 ? <h3>No Favourites Yet</h3> :
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Img</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {favsList}
                    </tbody>
                </Table>
            }
        </div>
    )
}
