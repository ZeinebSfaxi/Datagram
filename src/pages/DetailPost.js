import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import axios from "axios";
import moment from "moment";

const DetailPost = ({match}) => {

    const [post, setPost] = useState({})
    const fetchPost = () => {
        axios.get(`https://gorest.co.in/public-api/posts/${match.params.id}`).then(res => {
            setPost(res.data.data)
        })
    }

    useEffect(() => {
        fetchPost()
    }, [])

    return (
        <>
            <main className='py-3'>
                <Container>
                    <Link className='btn btn-light my-3' to='/'>
                        > Go to Home
                    </Link>
                    <Row>
                        <Col>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h3>{post.title}</h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    {post.body}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h6>CREATED: {moment(post.created_at).fromNow()}</h6>
                                    <h6>UPDATED: {moment(post.updated_at).fromNow()}</h6>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    );
};

export default DetailPost;