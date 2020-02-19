import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import SinglePost from './SinglePost'
import PostList from './PostList'

export default class Home extends Component {

    state = {
      postList: [
        {
          title: '',
          image: '',
          description: ''
        }
      ],  
    }

    componentDidMount() {
        axios.get('/api/post')
          .then((res) => {
              this.setState({ postList: res.data })
          })
    }

    postInputChanges = (event) => {
        const value = event.target.value
        const title = event.target.title

        const newState = {...this.state}
        newState.newPost[title] = value
        this.setState(newState)
    }

    updatePage = () => {
        axios.get('/api/post')
          .then((res) => {
              this.setState({ postList: res.data})
          })
    }

    createNewPost = () => {
      const newPost = {
        title: this.state.newPost,
      }
      axios.post('/api/post', newPost)
        .then(() => {
          this.updatePage()
        })     
    }

    render() { 
        return (
            <div id="bodyid">
                <div>
                  <div>
                    <h1 id="welcometitle">Welcome To Rush</h1>
                  </div>
                    <div>
                      <Link to={`/create-post`}>
                        <button id="createbutton">Create Post</button>
                      </Link>
                    </div>
                </div>
                <div id="homepagecontainer">
                  <PostList postList={this.state.postList}/>
                </div>
            </div>
        )
    }
}
