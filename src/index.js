import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//Components
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import CreateArticle from './components/CreateArticle';
import Login from './components/Login';
import Signup from './components/Signup';
import SingleArticle from './components/SingleArticle';

import * as serviceWorker from './serviceWorker';

const Contact = () => {
    return <h1>This is Contact Page</h1>
};

const About = () => {
    return <h1>This is About Page</h1>;
};

ReactDOM.render(
    <BrowserRouter>
    <div>
       <Navbar />
       <Route exact path="/" component={Welcome}/> 
       <Route path="/article/create" component={CreateArticle}/> 
       <Route path="/article/:slug" component={SingleArticle}/> 
       <Route path="/auth/login" component={Login}/> 
       <Route path="/auth/signup" component={Signup}/>
       <Footer />
    </div>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
