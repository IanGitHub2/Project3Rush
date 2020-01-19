import React from 'react'

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
      const field = event.target.title

      const newState = {...this.state}
      newState.newPost[field] = newValue

      this.setState(newState)
  }

  formSubmit = (event) => {
      event.preventDefault()
      const newPost = {...this.state.newPost}
      this.props.addPost(newPost)
      this.setState({newPost: {...newPost}})
  }

  render(){
      return(
          <div>
              <form>
                  <div>
                      <input 
                        type="text" 
                        name="title"
                        value={this.state.newPost.title}
                        onChange={this.postInputChanges}
                        placeholder="Title"/>
                  </div>
                  <div>
                      <input
                          type="text"
                          name="image"
                          value={this.state.newPost.image}
                          onChange={this.postInputChanges} 
                          placeholder="Image"/>
                  </div>
                  <div>
                      <input
                          type="text"
                          placeholder="Manuf-"/>
                  </div>
                  <div>
                      <input
                          type="text"
                          placeholder="Model"/>
                  </div>
                  <div>
                      <input
                          type="text"
                          name="description"
                          value={this.state.newPost.description}
                          onChange={this.postInputChanges} 
                          placeholder="Description"/>
                  </div>
                  <input type="submit" value="Create"/>
              </form>
          </div>
      )
  }
}
