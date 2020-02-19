import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home.js'
import SinglePost from './components/SinglePost.js'
import CreatePostForm from './components/CreatePostForm.js'
import HouseHome from './components/HouseHome.js'
import SingleHouse from './components/SingleHouse.js'
import CreateHouseForm from './components/CreateHouseForm.js'
import ShoeHome from './components/ShoeHome.js'
import SingleShoe from './components/SingleShoe.js'
import CreateShoeForm from './components/CreateShoeForm.js'
// import UpdatePost from './UpdatePost'
import './App.css';
import './components/home.css';
import './components/singlepage.css'
import './create.css';

function App() {
  return (
    <div className="App">
      <Router>
      <ul id="NavBar">
        <Link to={'/'}>Rush </Link>
        <Link to={'/house-home'}> / Homes </Link>
        <Link to={'/shoe-home'}> / Shoes</Link>
      </ul>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/create-post" component={CreatePostForm}/>
          <Route exact path="/single-post/:postId" component={SinglePost}/>
          {/* <Route exact peth="/update-post/:postId" component={UpdatePost}/> */}
          <Route exact path="/house-home" component={HouseHome}/>
          <Route exact path="/create-house" component={CreateHouseForm}/>
          <Route exact path="/single-house/:houseId" component={SingleHouse}/>
          <Route exact path="/shoe-home" component={ShoeHome}/>
          <Route exact path="/create-shoe" component={CreateShoeForm}/>
          <Route exact path="/single-shoe/:shoeId" component={SingleShoe}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
