import React, { Component } from "react";
import DateInput from "./dateinput";
import ChargeInput from "./chargeinput";
import SubmitButton from "./submitbutton";
import API from "./findAPI";
import SentenceRender from "./sentencerender";
import moment from 'moment';
import _ from 'lodash';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ErrorMessage from "./errorMessage";
import { capitalize } from 'lodash'

class FindForm extends Component {

  constructor(props){

    super(props)

    this.state = {
      result: [],
      month: "Month",
      day: "Day",
      year: "Year",
      charge: "Charge",
      message: ""
    }

    // This gets user input for charges and sends it to <ChargesInput />:

    this.handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };


    // This is for the submit button:
    this.handleFormSubmit = event => {
      // Stops the page from refreshing:
      event.preventDefault();
      // Checks whether none of the date and charge fields have been filled out. If they all contain the default info:
      // We give the user an error:
      if (this.state.month==="Month" && this.state.day==="Day" && this.state.year==="Year" && this.state.charge==="Charge") {
        this.state.message="Please choose a charge, a date or both before searching.";
      // Else if they put in a date but no charge:
      } else if (this.state.month && this.state.day && this.state.year && this.state.charge==="Charge") {
        // We search for all crimes every recorded for that charge:
        this.searchLogs("?bookdate=" + this.state.year + "-" + this.state.month + "-" + this.state.day + "T00:00:00.000");
        this.state.message="Showing all suspects booked on that date for any charge.";
        console.log(this.state.result)
      // Else if they didn't input one of the date fields:
      } else if (this.state.month==="Month" || this.state.day==="Day" || this.state.year==="Year" && this.state.charge) {
        // We search for that crime between 1 a.m. Jan. 1, 2000 and 1 a.m. Jan. 1, 2016:
        this.searchLogs("?charge1=" + this.state.charge);
        this.state.message="Showing all suspects on record ever booked on that charge.";
      // Else if they filled in all the fields:
      } else if (this.state.month && this.state.day && this.state.year && this.state.charge) {
          // We call the API with all parameters:
          this.searchLogs("?bookdate=" + this.state.year + "-" + this.state.month + "-" + this.state.day + "T00:00:00.000" + "&charge1=" + this.state.charge);
          this.state.message="Showing all suspects booked on that charge on that date.";
      }
      // THIS WORKS! https://opendata.miamidade.gov/resource/k7xd-qgzt.json?$where=bookdate between '2015-01-10T12:00:00.000' and '2016-01-10T14:00:00.000'

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
      if(chargeOne){
        var original = chargeOne;
        var charge = original.toLowerCase();
        return charge;
      } else {
        var charge = "N/A"
        return charge;
      }

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
        console.log("<Form /> mounted!")
      }

    render() {

      return (
        <div className="container">
          <div className="form-group">
            <div  id="dashboard-form-layout">
              <Card id="dashboard-form-card">
                <h2 className="title">Find your next story</h2>
                <h4> Select a date, a charge or both and hit submit</h4>
                <br/>

                <DateInput
                    handleInputChange={this.handleInputChange}
                    month={this.state.month}
                    day={this.state.day}
                    year={this.state.year}
                    charge={this.state.charge}
                     />
                <SubmitButton  handleFormSubmit={this.handleFormSubmit} />
              </Card>
              <ErrorMessage message={this.state.message} />
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div>
              <div className = "container result-rows ">
               <div className = "row ">
                {this.state.result.map(item => (
                  <div className = "col-md-4 " key={item.dob}>
                    <Card>
                      <CardMedia
                      overlay={<CardTitle title={this.nameInterpreter(item.defendant)} subtitle={"DOB: " + item.dob.substr(0,10)} />}
                      >
                      <img src="img/mugshot.png" />
                      </CardMedia>
                      <CardTitle title="Facts: " subtitle="" />
                      <CardText>
                      <p>Residence:  {this.cityInterpreter(item.location_1_city)}, {item.location_1_state} {item.location_1_zip}</p>
                      <p>Charges:  {item.charge1 ? item.charge1 : '' }, {item.charge2 ? capitalize(item.charge2) : ''}</p>

                      <SentenceRender
                        nameInterpreter={this.nameInterpreter}
                        cityInterpreter={this.cityInterpreter}
                        chargesInterpreter={this.chargesInterpreter}
                        weekDayInterpreter={this.weekDayInterpreter}
                        defendant={item.defendant}
                        uninterpretedCity={item.location_1_city}
                        chargeOne={item.charge1}
                        uninterpretedDate={item.bookdate}
                      />
                      </CardText>
                    </Card>
                  </div>
                ))}
               </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
}
export default FindForm;
