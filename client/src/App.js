import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
// import SinglePost from './components/SinglePost.js/index.js'
import SinglePost from './components/SinglePost.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          {/* <Route exact path="/create-post" component={CreatePost}/> */}
          <Route exact path="/single-post" component={SinglePost}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
