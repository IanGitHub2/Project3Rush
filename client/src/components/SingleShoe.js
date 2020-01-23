import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

export default class SingleShoe extends React.Component{

    state = {
        shoe: {
            brand: '',
            image: '',
            name: '',
            size: 0,
            release: '',
            description: ''
        }
    }

    componentDidMount(){
        axios.get(`/api/shoe/${this.props.match.params.shoeId}`)
          .then(res => {
            this.setState({ shoe: res.data })
          })
    }

    deleteShoe = () => {
        axios.delete(`/api/shoe/${this.props.match.params.shoeId}`)
          .then(() => {
              this.setState({ redirect: true})
          })
    }

    render(){
        return(
            <div>
                {this.state.redirect === true ? <Redirect to='/shoe-home'/> : null}
                <Link to={`/shoe-home`}>Home</Link>
                <div>
                    <h1>{this.state.shoe.brand}</h1>
                    <div>
                        <div>
                            <img src={this.state.shoe.image} alt='shoe'/>
                        </div>
                        <div>
                            <div>{this.state.shoe.name}</div>
                            <div>{this.state.shoe.price}</div>
                            <div>{this.state.shoe.size}</div>
                            <div>{this.state.shoe.release}</div>
                        </div>
                        <div>
                            <div>{this.state.shoe.description}</div>
                        </div>
                        <button onClick={this.deleteShoe}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}