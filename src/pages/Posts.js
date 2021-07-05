import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import Post from "../components/Post";

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [orderTitle, setorderTitle] = useState(false)
    const [orderCreated, setorderCreated] = useState(false)

    //get posts
    const fetchPosts = () => {
        axios.get('https://gorest.co.in/public-api/posts').then(res => {
                setPosts(res.data.data)
            }
        )
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    // order by
    const onSortTitleChange = () => {
        setorderTitle(!orderTitle);
    };
    const onSortCreateChange = () => {
        setorderCreated(!orderCreated);
    };


    return (
        <main className='py-3'>
            <Container>
                <div className='posts'>
                    <Container>
                        <h1>Posts</h1>
                    </Container>

                    <label className='py-3'>
                        <input type="text" placeholder='Search Created | Title' value={searchInput}
                               onChange={e => setSearchInput(e.target.value)}/>
                    </label>
                    <label className='m-1'>
                        Title:
                        <input
                            name="title"
                            type="checkbox"
                            checked={orderTitle}
                            onChange={onSortTitleChange} />
                    </label>
                    <label className='py-1 m-1'>
                        Created:
                        <input
                            name="title"
                            type="checkbox"
                            checked={orderCreated}
                            onChange={onSortCreateChange} />
                    </label>

                    <Row>
                        {posts
                            .filter((val) => {
                                if (searchInput === '') {
                                    return val
                                } else if ((val.title.toLowerCase().includes(searchInput.toLowerCase())) || (val.created_at.toLowerCase().includes(searchInput.toLowerCase()))) {
                                    return val
                                }
                            })
                            .sort((a, b) => {
                                if (orderTitle === true) {
                                    return a.title.localeCompare(b.title)
                                }
                                if (orderCreated === true) {
                                    return a.created_at - b.created_at
                                }
                            })
                            .map((post) => (
                                <Col key={post.id} sm={12} md={6} lg={4} xl={3}>
                                    <Post post={post}/>
                                </Col>
                            ))}

                    </Row>

                </div>
            </Container>
        </main>
    );
};

export default Posts;