import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import Product from "../components/Product";

const Products = () => {

    const [products, setProducts] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [orderPrice, setorderPrice] = useState(false)
    const [orderStatus, setorderStatus] = useState(false)

    //get products
    const fetchProducts = () => {
        axios.get('https://gorest.co.in/public-api/products').then(res => {
                // console.log("hedhi data", res.data.data)
                setProducts(res.data.data)
                // console.log("hedhi products", products)
            }
        )
    }

    useEffect(() => {
        fetchProducts()

    }, [])

    // order by functions
    const onSortPriceChange = () => {
        setorderPrice(!orderPrice);
    };
    const onSortStatusChange = () => {
        setorderStatus(!orderStatus);
    };


    return (
        <main className='py-3'>
            <Container>
                <div className='products'>

                    <Container>
                        <h1>Products</h1>
                    </Container>

                    <label className='py-3'>
                        <input type="text" placeholder='Search Price | Discount' value={searchInput}
                               onChange={e => setSearchInput(e.target.value)}/>
                    </label>
                    <label className='m-1'>
                        Price:
                        <input
                            name="title"
                            type="checkbox"
                            checked={orderPrice}
                            onChange={onSortPriceChange}/>
                    </label>
                    <label className='py-1 m-1'>
                        Status:
                        <input
                            name="title"
                            type="checkbox"
                            checked={orderStatus}
                            onChange={onSortStatusChange}/>
                    </label>

                    <Row>
                        {products
                            .filter((val) => {
                                if (searchInput === '') {
                                    return val
                                } else if ((val.price.includes(searchInput)) || (val.discount_amount.includes(searchInput))) {
                                    return val
                                }
                            })
                            .sort((a, b) => {
                                if (orderStatus === true) {
                                    return (a.status === b.status) ? 0 : a.status ? -1 : 1
                                }
                                if (orderPrice === true) {
                                    return a.price - b.price
                                }
                            })
                            .map((product) => (
                                <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product}/>
                                </Col>
                            ))}

                    </Row>

                </div>
            </Container>
        </main>

    );
};

export default Products;