import React from 'react';
import {Card} from "react-bootstrap";
import moment from "moment";
import {useHistory} from "react-router-dom";

const Post = ({post}) => {

    // To Detail
    const history = useHistory();
    const goToDetail = () => {
        history.push(`/posts/${post.id}`);
    };

    return (
        <div onClick={goToDetail}>
        <Card className='m-1' border="dark">
            <Card.Header as='h4'><strong>{post.title}</strong></Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>{post.body}</p>
                    <footer className="blockquote-footer">
                       Created: <cite title="Source Title">{moment(post.created_at).fromNow()}</cite>
                    </footer>
                    <footer className="blockquote-footer">
                    Updated: <cite title="Source Title">{moment(post.updated_at).fromNow()}</cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Post;