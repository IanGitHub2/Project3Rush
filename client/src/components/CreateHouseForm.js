import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const newHouse = {
    company: '',
    image: '',
    price: 0,
    year: 0,
    description: ''
}

export default class CreateHouseForm extends React.Component{

    state = {
        newHouse: {...newHouse}
    }

    handleChanges = (event) => {
        const newValue = event.target.value
        const field = event.target.name

        const newState = {...this.state}
        newState.newHouse[field] = newValue

        this.setState(newState)
    }

    formSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/house', this.state.newHouse)
          .then(() => {
              this.setState({ redirect: true })
          })
    }
    render(){
      return(
        <div>
          <h1>Create a House Listing</h1>
            <form onSubmit={this.formSubmit}>
              {this.state.redirect === true ? <Redirect to='/house-home'/> : null}
              <div>
                <input
                  type='text'
                  name='company'
                  value={this.state.newHouse.company}
                  onChange={this.handleChanges}
                  placeholder='Company'/>  
              </div>
              <div>
                <input
                  type='text'
                  name='image'
                  value={this.state.newHouse.image}
                  onChange={this.handleChanges}
                  placeholder='Image'/>  
              </div>
              <div>
                <input
                  type='text'
                  name='price'
                  value={this.state.newHouse.price}
                  onChange={this.handleChanges}
                  placeholder='Price'/>  
              </div>
              <div>
                <input
                  type='text'
                  name='year'
                  value={this.state.newHouse.year}
                  onChange={this.handleChanges}
                  placeholder='Year'/>  
              </div>
              <div>
                <input
                type='text'
                name='description'
                value={this.state.newHouse.description}
                onChange={this.handleChanges}
                placeholder='Description'/>  
              </div>
              <input type='submit' value='Create'/>      
            </form>
        </div>
      )
    }
}