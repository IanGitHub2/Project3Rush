import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class CreatePost extends React.Component {

  state = {
    newPost: {
      title: '',
      image: '',
      description: ''
    },
    redirect: false
  }

  componentDidMount() {
    axios.post(`/api/post/${this.props.match.params.postId}`)
      .then((res) => {
          this.setState({ newPost: res.data })
      })
  }
 
  createNewPost = () => {
    const newPost = {
      title: this.state.newPost,
    }
    axios.post('/api/post', newPost)     
  }

  formSubmit = (event) => {
    event.preventDefault()
    axios.put(`/api/post/${this.props.match.params.postId}`, this.state.post)
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
          <h1>Create Post Page</h1>
          <Link to="/">Home</Link>
          <div>
            {
             <form onSubmit={this.formSubmit}>
               <div>
                 <input 
                    type="text" 
                    name="title"
                    value={this.state.newPost.title}
                    onChange={this.postInputChanges}
                    placeholder="Title"/>
                 <br/>

                 <input 
                    type="text"
                    name="image"
                    value={this.state.newPost.image}
                    onChange={this.postInputChanges} 
                    placeholder="Image"/>
                 <br/>

                 <input 
                    type="text" 
                    placeholder="Manuf"/>
                 <br/>

                 <input 
                    type="text" 
                    placeholder="Model"/>
                 <br/>

                 <input 
                    type="text"
                    name="description"
                    value={this.state.newPost.description}
                    onChange={this.postInputChanges} 
                    placeholder="Description"/>
                 <br/>

               </div>  
                 <button 
                    type="submit"
                    value="Update Post">Create</button>
             </form>
             }
          </div>  
         </div> 
      )
  }

}