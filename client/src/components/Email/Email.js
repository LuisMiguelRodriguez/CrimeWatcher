import React, { Component } from "react";


class Email extends Component {

  constructor(props){

    super(props)

    this.state = {

    }

    // This gets user input for charges and sends it to <ChargesInput />:
    this.handleInputChange = ( event, index, value, name ) => {

      console.log(name)

      console.log(value)

      this.setState({
          [name]: value
      });

    };


    // This is for the submit button:
    this.handleFormSubmit = event => {
      // Stops the page from refreshing:
      event.preventDefault();
      // Checks whether all date and charge fields have been filled out. If they have:
      if (this.state.month && this.state.day && this.state.year && this.state.charge) {
          // We call the API with both parameters:
          this.searchLogs("?bookdate=" + this.state.year + "-" + this.state.month + "-" + this.state.day + "T00:00:00.000" + "&charge1=" + this.state.charge );
          // If we have the date fields but no charge, we call the API with the date:
      } else if (this.state.month && this.state.day && this.state.year && !this.state.charge) {
          this.searchLogs("?bookdate=" + this.state.year + "-" + this.state.month + "-" + this.state.day + "T00:00:00.000");
      }
      this.setState({
          result: [],
          month: "Month",
          day: "Day",
          year: "Year",
          charge: "Charge"
      })
    }

    this.searchLogs = query => {
      API.search(query)
        .then(res => this.setState({ result: res.data }))
        .catch(err => console.log(err));
    };

    // CODE FOR SENTENCERENDER:
    // Splits the defendant value and assigns them to vars firstName and lastName.
    this.nameInterpreter = (defendant) => {
      var fullName = defendant;
      var lowerCaseName = fullName.toLowerCase();
      var splitName = lowerCaseName.split(",");
      var lowerCaseFirst = splitName[1].trim();
      var lowerCaseLast = splitName[0].trim();
      var firstName = lowerCaseFirst.charAt(0).toUpperCase() + lowerCaseFirst.substr(1);
      var lastName = lowerCaseLast.charAt(0).toUpperCase() + lowerCaseLast.substr(1);
      var interpretedFullName = `${firstName} ${lastName}`;
      return interpretedFullName;
    }

// Presents city name with proper capitalization:
    this.cityInterpreter = (uninterpretedCity) => {
      var original = uninterpretedCity;
      var lowerCaseCity = original.toLowerCase();
      var splitCity = lowerCaseCity.split(" ");
      var interpretedWord = [];
      var interpretedCity = [];
      for (let i=0; i<splitCity.length; i++) {
        interpretedWord = splitCity[i].charAt(0).toUpperCase() + splitCity[i].substr(1,splitCity[i].length-1);
        interpretedCity.push(interpretedWord);
        }
      interpretedCity = interpretedCity.toString();
      interpretedCity = interpretedCity.replace(",", " ");
      return interpretedCity;
    }

    // Presents charges with proper capitalization:
    this.chargesInterpreter = (chargeOne) => {
      var original = chargeOne;
      var charge = original.toLowerCase();
      return charge;
    }

    this.weekDayInterpreter = (uninterpretedDate) => {
        var original = uninterpretedDate;
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var interpretedDate = new Date(original);
        var dayIndex = interpretedDate.getDay();
        var day = days[dayIndex];
        var monthIndex = interpretedDate.getMonth();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month = months[monthIndex];
        let date = interpretedDate.getDate();
        return `${day}, ${month} ${date}`;
    }

  }

    // Makes sure the component mounts:
    componentDidMount() {
        console.log("<Email /> mounted!")
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
