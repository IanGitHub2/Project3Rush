import React from 'react'
import { Link } from 'react-router-dom'
// import manufacture from './ManufactureDB'
// import model from './ModelDB'

export default class PostList extends React.Component {
    render(){
        return(
          <div>
            {
              this.props.postList.map((post, i) => {
                return(
                  <div id="posthousing">
                    <div id="image">
                      <Link to={`/single-post/${post._id}`}>
                        <img src={post.image} alt="car" width="400" height="200"/>
                      </Link> 
                    </div>
                    <div id="infolist">
                      <div id="title">{post.title}</div>
                      <div id="manufacture">Manufacturer{post.manu}</div>
                      <div id="model">Model{post.model}</div>
                    </div>
                    <div>  
                      <div>Description: {post.description}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        )}}