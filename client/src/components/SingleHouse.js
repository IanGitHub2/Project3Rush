import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

export default class SingleHouse extends React.Component {
    state = {
        house: {
            company: '',
            image: '',
            price: 0,
            year: 0,
            description: ''
        }
    }

    componentDidMount(){
        axios.get(`/api/house/${this.props.match.params.houseId}`)
          .then(res => {
            this.setState({ house: res.data })
          })
    }

    houseInputChanges = (event) => {
        const value = event.target.value;
        const name = event.target.name;
    
        const newState = { ...this.state };
        newState.house[name] = value;
        this.setState(newState);
      }

    deleteHouse = () => {
        axios.delete(`/api/house/${this.props.match.params.houseId}`)
          .then(() => {
              this.setState({ redirect: true})
          })
    }

    render(){
        return(
            <div>
                {this.state.redirect === true ? <Redirect to='/house-home'/> : null}
                <Link to={`/house-home`}>Home</Link>
                <div>
                    <h1>{this.state.house.company}</h1>
                    <div>
                        <div>
                            <img src={this.state.house.image} alt="house"/>
                        </div>
                        <div>
                            <div>{this.state.house.company}</div>
                            <div>Price: {this.state.house.price}</div>
                            <div>Built: {this.state.house.year}</div>
                        </div>
                        <div>
                            <div>Description: {this.state.house.description}</div>
                        </div>
                        <button onClick={this.deleteHouse}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}