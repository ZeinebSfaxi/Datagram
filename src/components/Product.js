import React from 'react';
import {Badge, Card} from "react-bootstrap";
import {useHistory, useParams} from "react-router-dom";

const Product = ({product}) => {

    // To Detail
    const history = useHistory();

    const goToDetail = () => {
        history.push(`/products/${product.id}`);
    };
    return (
        <Card className='my-3 py-3 rounded'>

            <div onClick={goToDetail}>
                <Card.Img src={product.image} variant='top'/>
            </div>

            <Card.Body>
                <div onClick={goToDetail}>
                    <Card.Title as='h4'><strong>{product.name}</strong></Card.Title>
                </div>
                <Card.Text as='h5'>

                    <div className='my-3'>
                        <strike>${product.price}</strike>
                    </div>
                </Card.Text>
                <Card.Text as='h3'>
                        ${product.discount_amount}
                </Card.Text>
                <Card.Text as='h5'>
                        <strong>{product.status ? 'In Stock' : 'Out of Stock'}</strong>
                </Card.Text>
                <div>{product.categories.slice(0,3).map((cat) => (<Badge pill className='alert-dark'>{cat.name}</Badge>))}</div>
            </Card.Body>

        </Card>
    );
};

export default Product;