import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class SinglePost extends React.Component {

  componentDidMount() {
    axios.post(`/api/post/${this.props.match.params.postId}`)
      .then((res) => {
          this.setState({ newPost: res.data })
      })
  }
  
  postInputChanges = (event) => {
    const value = event.target.value
    const name = event.target.name

    const newState = {...this.state}
    newState.newPost[name] = value
    this.setState(newState)
  }


  render() {
      return(
         <div>
          <h1>Single Post Page and create post</h1>
          <Link to="/">Home</Link>
          </div>
      )
  }

}