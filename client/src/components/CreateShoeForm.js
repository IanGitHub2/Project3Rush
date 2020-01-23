import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const newShoe = {
    brand: '',
    image: '',
    name: '',
    size: 0,
    release: '',
    description: ''
}

export default class CreateShoeForm extends React.Component{

    state = {
        newShoe: {...newShoe}
    }

    handleChanges = (event) => {
        const newValue = event.target.value
        const field = event.target.name

        const newState = {...this.state}
        newState.newShoe[field] = newValue

        this.setState(newState)
    }

    formSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/shoe', this.state.newShoe)
          .then(() => {
              this.setState({ redirect: true })
          })
    }

    render(){
        return(
            <div>
                <h1>Create a Shoe</h1>
                    <form onSubmit={this.formSubmit}>
                        {this.state.redirect === true ? <Redirect to='/shoe-home'/> : null}
                        <div>
                            <input
                            type='text'
                            name='brand'
                            value={this.state.newShoe.brand}
                            onChange={this.handleChanges}
                            placeholder='Brand'/> 
                        </div>
                        <div>
                            <input
                            type='text'
                            name='image'
                            value={this.state.newShoe.image}
                            onChange={this.handleChanges}
                            placeholder='Image'/> 
                        </div>
                        <div>
                            <input
                            type='text'
                            name='name'
                            value={this.state.newShoe.name}
                            onChange={this.handleChanges}
                            placeholder='Name'/> 
                        </div>
                        <div>
                            <input
                            type='text'
                            name='size'
                            value={this.state.newShoe.size}
                            onChange={this.handleChanges}
                            placeholder='Size'/> 
                        </div>
                        <div>
                            <input
                            type='text'
                            name='release'
                            value={this.state.newShoe.release}
                            onChange={this.handleChanges}
                            placeholder='Release'/> 
                        </div>
                        <div>
                            <input
                            type='text'
                            name='discription'
                            value={this.state.newShoe.description}
                            onChange={this.handleChanges}
                            placeholder='Disription'/> 
                        </div>
                        <input type='submit' value='Create'/>
                    </form>
            </div>
        )
    }
}