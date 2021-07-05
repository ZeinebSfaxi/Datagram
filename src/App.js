import React, {useEffect, useState} from 'react'
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Products from "./pages/Products";
import Users from "./pages/Users";
import DetailProduct from "./pages/DetailProduct";
import Categories from "./pages/Categories";
import DetailPost from "./pages/DetailPost";
import DetailUser from "./pages/DetailUser";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import LoadingPage from "./pages/LoadingPage";


const App = () => {

    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 4000)
    }, [])
    return (
        <>
            {loader ?
                <LoadingPage/>
                :
                <>
                    <Router>
                        <Header/>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/products' exact component={Products}/>
                            <Route path='/products/:id' exact component={DetailProduct}/>
                            <Route path='/posts' exact component={Posts}/>
                            <Route path='/posts/:id' exact component={DetailPost}/>
                            <Route path='/categories' component={Categories}/>
                            <Route path='/users' exact component={Users}/>
                            <Route path='/users/:id' exact component={DetailUser}/>
                            <Route path='' component={PageNotFound}/>
                        </Switch>
                    </Router>
                    <Footer/>
                </>
            }

        </>
    );
}

export default App;
