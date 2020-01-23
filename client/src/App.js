import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import SinglePost from './components/SinglePost.js'
import CreatePostForm from './components/CreatePostForm.js';
import HouseHome from './components/HouseHome.js'
import SingleHouse from './components/SingleHouse'
import CreateHouseForm from './components/CreateHouseForm'
// import UpdatePost from './UpdatePost'
import './App.css';
import './components/home.css';
import './components/singlepage.css'
import './create.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/create-post" component={CreatePostForm}/>
          <Route exact path="/single-post/:postId" component={SinglePost}/>
          {/* <Route exact peth="/update-post/:postId" component={UpdatePost}/> */}
          <Route exact path="/house-home" component={HouseHome}/>
          <Route exact path="/create-house" component={CreateHouseForm}/>
          <Route exact path="/single-house" component={SingleHouse}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
