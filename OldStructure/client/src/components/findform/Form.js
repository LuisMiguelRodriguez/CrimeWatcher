import React, { Component } from "react";
import DateInput from "./dateinput";
import ChargeInput from "./chargeinput";
import SubmitButton from "./submitbutton";
import API from "./findAPI";
import SentenceRender from "./sentencerender";

class FindForm extends Component {
    state = {
        result: [],
        month: "",
        day: "",
        year: "",
        charge: ""
    }

    // Makes sure the component mounts:
    componentDidMount() {
        console.log("<Form /> mounted!")
      }

    // This gets user input for charges and sends it to <ChargesInput />:
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value.toUpperCase()
        });
    };

    // This is for the submit button:
    handleFormSubmit = event => {
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
            month: "",
            day: "",
            year: "",
            charge: ""
        })        
    }  
    
    searchLogs = query => {
        API.search(query)
          .then(res => this.setState({ result: res.data }))
          .catch(err => console.log(err));
      };

    // CODE FOR SENTENCERENDER:
    // Splits the defendant value and assigns them to vars firstName and lastName.
    nameInterpreter(defendant) {
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
    cityInterpreter(uninterpretedCity) {
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
    chargesInterpreter(chargeOne) {
    var original = chargeOne;
    var charge = original.toLowerCase();
    return charge;
    }

    weekDayInterpreter(uninterpretedDate) {
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

    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <h1>This is the FindForm!</h1>
                        <DateInput 
                            handleInputChange={this.handleInputChange}
                            month={this.state.month}
                            day={this.state.day}
                            year={this.state.year} />
                        <ChargeInput 
                            charge={this.state.charge}
                            handleInputChange={this.handleInputChange} />
                            <p>For examples of charges and their titles, <a href="https://opendata.miamidade.gov/Corrections/Jail-Bookings-May-29-2015-to-current/7nhc-4yqn">go here</a>.</p>
                        <SubmitButton  handleFormSubmit={this.handleFormSubmit} />
                    <h2>Here are the results!</h2>
                    <div>
                        <h4>Here are the API call results!</h4>
                        <ul className="list-group">
                            {this.state.result.map(item => (
                                <li className="list-group-item" key={item.dob}>
                                    {item.defendant}
                                    <p>DOB: {item.dob}</p>
                                    <p>Residence: {item.location_1_address}, {item.location_1_city}, {item.location_1_state} {item.location_1_zip}</p>
                                    <p>Charges: {item.charge1}, {item.charge2}</p>
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
                                </li>
                             ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default FindForm;
