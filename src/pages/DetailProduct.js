import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {Badge, Button, Card, Col, Container, Image, ListGroup, Row} from "react-bootstrap";

const DetailProduct = ({match}) => {

    const [product, setProduct] = useState({})
    const fetchProduct = () => {
        axios.get(`https://gorest.co.in/public-api/products/${match.params.id}`).then(res => {
            console.log("hedhi data", res.data.data)
            setProduct(res.data.data)
            console.log("hedhi products", product)
        })
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <>
            <main className='py-3'>
                <Container>
                    <Link className='btn btn-light my-3' to='/'>
                        > Go to Home
                    </Link>
                    <Row>
                        <Col md={6}>
                            <Image src={product.image} alt={product.name} fluid/>
                        </Col>
                        <Col md={3}>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h3>{product.name}</h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Price: <strike> ${product.price}</strike>
                                    <strong>${product.discount_amount}</strong>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Description: {product.description}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Categories:
                                    {product.categories ? product.categories.map((cat) => (
                                        <Badge pill className='alert-dark'>{cat.name}</Badge>)) : null}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                                Price:
                                            </Col>
                                            <Col>
                                                <strong>${product.price}</strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                                Status:
                                            </Col>
                                            <Col>
                                                <strong>{product.status ? 'In Stock' : 'Out of Stock'}</strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Button className='btn-block' type='button' disabled={product.status === false}>
                                            Add to Cart
                                        </Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    );
};

export default DetailProduct;