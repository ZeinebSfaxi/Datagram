import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    {/*padding on y axe*/}
                    <Col className='text-center py-3'>
                        Copyright &copy; Zeineb :D &hearts;
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;