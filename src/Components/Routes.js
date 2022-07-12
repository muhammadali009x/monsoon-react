import NavBar from "./NavBar";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from "./Footer";
import Home from "../pages/Home";
import About from "../pages/about";
import Weather from "../pages/weather";

export default function RoutesConfig(){
    return(
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/weather" component={Weather}/>

                <Route path="/*" component={()=>{return <h1>404 page not found</h1>}}/>
            </Switch>
            <Footer/>
        </Router>
    )
}