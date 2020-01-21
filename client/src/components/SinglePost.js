import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Redirect} from 'react-router-dom'

export default class SinglePost extends React.Component {
  state = {
    post: {
      title: "",
      image: "",
      description: ""
    }
  };

  componentDidMount() {
    axios.get(`/api/post/${this.props.match.params.postId}`).then(res => {
      this.setState({ post: res.data });
    });
  }

  postInputChanges = event => {
    const value = event.target.value;
    const name = event.target.name;

    const newState = { ...this.state };
    newState.newPost[name] = value;
    this.setState(newState);
  }

  deletePost = () => {
    axios.delete(`/api/post/${this.props.match.params.postId}`)
    .then(() => {
      this.setState({redirect: true})
  })
    }

  render() {
    return (
      <div>
         {this.state.redirect === true ? <Redirect to='/' /> : null}
        <Link to={`/`}>Home</Link>
        <div>
          <h1>Single Post page and Delete page</h1>
          <div id="posthousing">
            <div id="image">
              <div>Image goes here{this.state.post.image}</div>
            </div>
            <div>
              <div>{this.state.post.title}</div>
              <div>Manufacturer</div>
              <div>Model</div>
              <div>Description:{this.state.post.description}</div>
            </div>
            <button onClick={this.deletePost}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}