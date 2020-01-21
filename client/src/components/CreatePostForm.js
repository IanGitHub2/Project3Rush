import React from 'react'
import axios from 'axios'
// import {Redirect} from 'react-router-dom'

const newPost = {
    title: '',
    image: '',
    description: ''
}

export default class CreatePostForm extends React.Component {
    
  state = {
      newPost: {...newPost}
  }

  handleChanges = (event) => {
      const newValue = event.target.value
      const field = event.target.name

      const newState = {...this.state}
      newState.newPost[field] = newValue

      this.setState(newState)
  }

  formSubmit = (event) => {
      event.preventDefault()
      axios.post('/api/post/', this.state.newPost)
    //   .then(() => {
    //       this.setState({redirect: true})
    //   })
  }

  render(){
      return(
          <div>
              {/* {this.state.redirect === true ? <Redirect to='/' /> : null} */}
              <form onSubmit={this.formSubmit}>
                  <div>
                      <input 
                        type="text" 
                        name="title"
                        value={this.state.newPost.title}
                        onChange={this.handleChanges}
                        placeholder="Title"/>
                  </div>
                  <div>
                      <input
                          type="text"
                          name="image"
                          value={this.state.newPost.image}
                          onChange={this.handleChanges} 
                          placeholder="Image"/>
                  </div>
                  <div>
                      <select>

                      </select>
                  </div>
                  <div>
                      <select>
                          
                      </select>
                  </div>
                  <div>
                      <input
                          type="text"
                          name="description"
                          value={this.state.newPost.description}
                          onChange={this.handleChanges} 
                          placeholder="Description"/>
                  </div>
                  <input type="submit" value="Create"/>
              </form>
          </div>
      )
  }
}
