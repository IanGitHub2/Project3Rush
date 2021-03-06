import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Redirect} from 'react-router-dom'

export default class SinglePost extends React.Component {
  state = {
    post: {
      title: '',
      image: '',
      manu: '',
      model: '',
      description: ''
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
      <div id="singlePostPage">
         {this.state.redirect === true ? <Redirect to='/' /> : null}
        <div>
          <h1 id="pageheader">{this.state.post.title}</h1>
          <div>
            <div>
              <div id="backButtonDiv">
                <Link to={`/`}>
                  <button id="backButton">Back</button>
                </Link>
              </div>
              <img src={this.state.post.image} alt="car" id="singleimage"/>
            </div>
            <div id="singleposthousing">
              <div><strong>{this.state.post.title}</strong></div>
              <div>Manufacturer{this.state.manu}</div>
              <div>Model{this.state.model}</div>
              <div>Description:{this.state.post.description}</div>
              <Link to={`/update-post`}>
                <button>Update Post</button>
              </Link>
              <button onClick={this.deletePost} id="deletebutton">Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}