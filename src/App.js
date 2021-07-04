import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Products from "./pages/Products";
import Users from "./pages/Users";



const App = () => {
    return (
        <>

            <Router>
                <Header/>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/products' component={Products}/>
                    <Route path='/posts' component={Posts}/>
                    {/*<Route path='/categories' component={Categories}/>*/}
                    <Route path='/users' component={Users}/>
                </Switch>
            </Router>
            {/*<main>*/}
            {/*    <Container>*/}
            {/*        <h1> welcome to my app </h1>*/}
            {/*    </Container>*/}
            {/*</main>*/}
            <Footer/>
        </>
    );
}

export default App;
