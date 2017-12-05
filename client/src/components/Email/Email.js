import React, { Component } from "react";
import API from "./API";
import Auth from "../../modules/Auth"

class Email extends Component {

  constructor(props){

    super(props)

    this.state = {
      secretData: ''
    };

    // This gets user input for charges and sends it to <ChargesInput />:
    this.handleInputChange = ( event, index, value, name ) => {

      console.log(name)

      console.log(value)

      this.setState({
          [name]: value
      });

    };



    this.search = () => {
      API.search()
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };


  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    
  }

    render() {
      return (
        <div className="container">
          <h1>Email Component</h1>
        </div>
      )
    }
}
export default Email;
