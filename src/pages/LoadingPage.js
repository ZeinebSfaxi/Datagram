import React from 'react';
import {Spinner} from "react-bootstrap";
import '../App.css';

const LoadingPage = () => {
    return (
        <>
            <div className='loader'>
                <h1>Loading..</h1>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        </>
    );
};

export default LoadingPage;