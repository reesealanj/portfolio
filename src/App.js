import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NotFound from "./components/NotFound";

import NavBar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={About} path="/about" />
                <Route component={SinglePost} path="/post/:slug" />
                <Route component={Post} path="/post" />
                <Route component={Project} path="/project" />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
