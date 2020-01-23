import React from 'react'
import { Link } from 'react-router-dom'

export default class HouseList extends React.Component {
    render(){
        return(
        <div>
          {this.props.HouseList.map((house, i) =>{
            return(
              <div>
                <div>
                  <Link>
                    <img src={house.image} alt="house" width="400" height="200"/>
                  </Link>
                </div>
                <div>
                  <div>{house.company}</div>
                  <div>Price: {house.price}</div>
                  <div>Built: {house.year}</div>    
                </div>
                <div>
                  <div>Description: {house.description}</div> 
                </div>  
              </div>
              )
            })}
          </div>
        )
    }
}