import React from 'react'

export default class PostList extends React.Component {
    render(){
        return(
          <div>
            {
              this.props.postList.map((post, i) => {
                return(
                  <div id="posthousing">
                    <div id="image">
                      <div>Image goes here{post.image}</div>
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