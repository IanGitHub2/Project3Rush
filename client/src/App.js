import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
// import SinglePost from './components/SinglePost.js/index.js'
import SinglePost from './components/SinglePost.js'
import './App.css';
import CreatePostForm from './components/CreatePostForm.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/create-post" component={CreatePostForm}/>
          <Route exact path="/single-post/:postId" component={SinglePost}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
