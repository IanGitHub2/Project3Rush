/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react'
// import axios from 'axios'

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class Home extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    state = {
        message: ''
    }

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */


    /* Step 5
    *  The render function manages what is shown in the browser
    *  TODO: delete the jsx returned
    *   and replace it with your own custom jsx template
    *
    */
    render() {
        return (
            <div>
                <div>
                    <p>Hi</p>
                </div>
              <div id="posthousing">
                <div id="image">
                    <div>Image goes here</div>
                </div>
                <div id="posttextcontent">
                    <div>Title goes here</div>
                    <div>Manufacturer</div>
                    <div>Model</div>
                    <div>Description</div>
                </div> 
              </div> 
            </div>
        )
    }
}
