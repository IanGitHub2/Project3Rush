import React from 'react'
import { Link } from 'react-router-dom'

export default class ShoeList extends React.Component{
    render(){
        return(
            <div>
                {this.props.shoeList.map((shoe, i) => {
                    return(
                        <div>
                            <div>
                                <Link to={`/single-shoe/${shoe._id}`}>
                                    <img src={shoe.image} alt="shoe" width='400' height='200'/>
                                </Link>
                            </div>
                            <div>
                                <div>{shoe.brand}</div>
                                <div>{shoe.name}</div>
                                <div>{shoe.size}</div>
                                <div>{shoe.release}</div>
                            </div>
                            <div>
                                <div>{shoe.description}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}