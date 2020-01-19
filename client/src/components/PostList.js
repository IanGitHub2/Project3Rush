import React from 'react'

export default class PostList extends React.Component {
    render(){
        return(
            <div id="posthousing">
                          <div id="image">
                            {/* <div>Image goes here{post.image}</div> */}
                          </div>
                        <div id="posttextcontent">
                            {/* <div>{post.title}</div> */}
                            <div>Manufacturer</div>
                            <div>Model</div>
                            {/* <div>Description:{post.description}</div> */}
                          </div> 
                        </div>
        )
    }
}