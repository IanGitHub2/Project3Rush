import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import HouseList from './HouseList'

export default class HouseHome extends React.Component {

    state = {
      houseList: [
        {
          company: '',
          image: '',
          price: 0,
          year: 0,
          description: ''
      }
    ]
  }

  componentDidMount(){
    axios.get('/api/house')
      .then((res) => {
        this.setState({ houseList: res.data })  
      })
  }

  render(){
      return(
          <div>
              <div>
                  <h1>Welcome To House Listing</h1>
                  <Link to={`/create-house`}>
                    <button>Create Listing</button>
                  </Link>
              </div>
              <div>
                  <HouseList houseList={this.state.houseList}/>
              </div>
          </div>
      )
  }
}