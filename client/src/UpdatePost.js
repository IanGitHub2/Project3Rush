import React from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import post from './components/PostList'
import manufacture from './components/ManufactureDB'
import model from './components/ModelDB'

const updatePost = {
    title: '',
    image: '',
    manu: '',
    model: '',
    description: ''
}

export default class UpdatePost extends React.Component {

    state = {
        updatePost: {...this.updatePost}
    }

    handleChanges = (event) => {
        const newValue = event.target.value
        const field = event.target.name
  
        const newState = {...this.state}
        newState.updatePost[field] = newValue
  
        this.setState(newState)
    }

    formSubmit = (event) => {
        event.preventDefault()
        axios.put('/api/post/', this.state.updatePost)
        .then(() => {
            this.setState({redirect: true})
        })
    }

    render(){
        return(
            <div>
                <h1>Update Post</h1>
                <form onSubmit={this.formSubmit}>
                {this.state.redirect === true ? <Redirect to='/' /> : null}
                    <div>
                        <input 
                          type="text" 
                          name="title"
                          value={post.title}
                          onChange={this.handleChanges}
                          placeholder="Title"/>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="image"
                            value={post.image}
                            onChange={this.handleChanges} 
                            placeholder="Image"/>
                    </div>
                    <div>
                        <select>
                          {manufacture.map((builder, i ) => {
                              return (
                              <option>{manufacture[i]}</option>
                              )                         
                          })}
                        </select>
                    </div>
                    <div>
                        <select>
                            {model.map((mod, j) => {
                                return(
                                    <option>{model[j]}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="description"
                            value={post.description}
                            onChange={this.handleChanges} 
                            placeholder="Description"/>
                    </div>
                    <input type="submit" value="Update" id="createformbutton"/>
                </form>
            </div>
        )
    }
}