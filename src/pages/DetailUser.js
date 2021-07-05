import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import axios from "axios";
import Post from "../components/Post";

const DetailUser = ({match}) => {
    const [user, setUser] = useState({})
    const [userPosts, setUserPosts] = useState([])
    const fetchUser = () => {
        axios.get(`https://gorest.co.in/public-api/users/${match.params.id}`).then(res => {
            setUser(res.data.data)
        })
    }

    const fetchUserPosts = () => {
        axios.get(`https://gorest.co.in/public-api/users/${match.params.id}/posts`).then(res => {
            setUserPosts(res.data.data)
            console.log(userPosts)
        })
    }

    useEffect(() => {
        fetchUser()
        fetchUserPosts()
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
                                    <h3>Name:{user.name}</h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h6>Gender: {user.gender}</h6>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    email: {user.email}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    {userPosts ?
                                        userPosts.map((post) => (
                                            <div key={post.id} sm={12} md={6} lg={4} xl={3}>
                                                <Post post={post}/>
                                            </div>
                                        ))

                                        : null}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    );
};

export default DetailUser;