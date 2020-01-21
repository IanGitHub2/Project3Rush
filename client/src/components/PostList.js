import React from 'react'
import { Link } from 'react-router-dom'

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
                        <div>Image goes here{post.image}</div>
                      </Link> 
                    </div>
                    <div>
                      <div>{post.title}</div>
                      <div>Manufacturer</div>
                      <div>Model</div>
                      <div>Description:{post.description}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        )}}