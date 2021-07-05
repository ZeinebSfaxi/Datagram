import React from 'react';
import {Button, Container} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import '../App.css';

const PageNotFound = () => {

    // To Home
    const history = useHistory();
    const goToHome = () => {
        history.push('/');
    };

    return (
        <main className='py-3'>
            <Container>
                <Container className='NotFound'>

                    <h1>Oops!</h1>
                    <h2>404 Not Found</h2>
                    <div className="error-details">
                        Sorry, something went wrong!
                    </div>
                    <Button className='btn-dark m-4' onClick={goToHome}>Go To Home</Button>

                </Container>
            </Container>
        </main>
    );
};

export default PageNotFound;