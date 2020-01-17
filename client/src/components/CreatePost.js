import React from 'react'
// import axios from 'axios'

export default class CreatePost extends React.Component {


  render() {
      return(
         <div>
          <h1>Create Post Page</h1>
          <div>
             <form>
                 <input type="text" placeholder="Title"/>
                 <br/>
                 <input type="tetx" placeholder="Image"/>
                 <br/>
                 <input type="text" placeholder="Manuf"/>
                 <br/>
                 <input type="text" placeholder="Model"/>
                 <br/>
                 <input type="text" placeholder="Description"/>
                 <br/>
                 <button type="submit">Create</button>
             </form>
          </div>  
         </div> 
      )
  }

}