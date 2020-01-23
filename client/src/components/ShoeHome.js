import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ShoeList from './ShoeList'

export default class ShoeHome extends React.Component{
    
  state = {
    shoeList: [
      {
        brand: '',
        image: '',
        name: '',
        size: 0,
        release: '',
        description: ''
      }
    ]
  }

  componentDidMount(){
    axios.get('/api/shoe')
      .then((res) => {
        this.setState({ shoeList: res.data })
      }
    )
  }

  render(){
    return(
      <div>
        <div>
          <h1>Welcome To Kick's</h1>
          <Link to={`/create-shoe`}>
            <button>Create Kicks</button>
          </Link>  
        </div>
        <div>
          <ShoeList shoeList={this.state.shoeList}/>  
        </div>  
      </div>  
    )
  }
}