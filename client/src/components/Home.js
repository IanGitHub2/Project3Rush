import React, { Component } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import SinglePost from './SinglePost'
import PostList from './PostList'
export default class Home extends Component {

    state = {
      postList: [],  
      // newPost: {
      //   title: '',
      //   image: '',
      //   description: ''
      // }
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
            <div>
                <div>
                    <h1>Welcome To Rush</h1>
                </div>
                <PostList/>
                <SinglePost/>
                {/* {this.state.postList.map((post) => {                    
                  return( 
                      <Link to={`/${post._id}`}>
                        <div id="posthousing">
                          <div id="image">
                            <div>Image goes here{post.image}</div>
                          </div>
                        <div id="posttextcontent">
                            <div>{post.title}</div>
                            <div>Manufacturer</div>
                            <div>Model</div>
                            <div>Description:{post.description}</div>
                          </div> 
                        </div>
                      </Link>
                   ) 
               })}   */}
            </div>
        )
    }
}
