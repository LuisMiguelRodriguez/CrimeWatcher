import React from "react";

// JSON object for testing:
// var responseBody = {
//     "bookdate": "2015-05-29T00:00:00.000",
//     "charge1": "PETIT THEFT",
//     "chargecode1": "81201403A",
//     "defendant": "ALBERTE, FEDERICO",
//     "dob": "1984-02-28T00:00:00.000",
//     "location_1_address": "SUPERI 4351 CAPIT FEDER",
//     "location_1_city": "BUENOS AIRES",
//     "location_1_state": "AT"
// };

var responseBody = {
    "bookdate": "2016-03-22T00:00:00.000",
    "charge1": "PROBATION WARRANT",
    "chargecode1": "8770300",
    "defendant": "MORALES, DAVID",
    "dob": "1981-11-12T00:00:00.000",
    "location_1_address": "HOMELESS",
    "location_1_city": "MIAMI",
    "location_1_state": "FL"
}

// Global vars:
var firstName;
var lastName;
var city;
var charge;
var day;
var month;
var date;
var day;

// Splits the defendant value and assigns them to vars firstName and lastName.
function nameInterpreter() {
    var fullName = responseBody.defendant;
    var lowerCaseName = fullName.toLowerCase();
    var splitName = lowerCaseName.split(",");    
    var lowerCaseFirst = splitName[1].trim();
    var lowerCaseLast = splitName[0].trim();
    firstName = lowerCaseFirst.charAt(0).toUpperCase() + lowerCaseFirst.substr(1);
    console.log(`First name: ${firstName}`);
    lastName = lowerCaseLast.charAt(0).toUpperCase() + lowerCaseLast.substr(1);
    console.log(`Last name: ${lastName}`);
    var interpretedFullName = `${firstName} ${lastName}`;
    return interpretedFullName;   
}

// Presents city name with proper capitalization:
function cityInterpreter() {
    var original = responseBody.location_1_city;
    console.log(`original: ${original}`)
    var lowerCaseCity = original.toLowerCase();
    console.log(`lowerCaseCity: ${lowerCaseCity}`)
    var splitCity = lowerCaseCity.split(" ");
    console.log(`splitCity: ${splitCity[0]} and ${splitCity[1]}`)
    var interpretedWord = [];
    var interpretedCity = [];
    for (let i=0; i<splitCity.length; i++) {
        interpretedWord = splitCity[i].charAt(0).toUpperCase() + splitCity[i].substr(1,splitCity[i].length-1);
        interpretedCity.push(interpretedWord);
    }    
       interpretedCity = interpretedCity.toString();
       interpretedCity = interpretedCity.replace(",", " ");
       city = interpretedCity;
        console.log(`city: ${city}`)
    return city;
}

// Presents charges with proper capitalization:
function chargesInterpreter() {
    var original = responseBody.charge1;
    console.log(`original: ${original}`)
    charge = original.toLowerCase();
    console.log(`charges: ${charge}`)
    return charge;
}

function weekDayInterpreter() {
    var original = responseBody.bookdate;
    console.log(`original: ${original}`);
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var interpretedDate = new Date(original);
    console.log(`interpretedDate: ${interpretedDate}`);
    var dayIndex = interpretedDate.getDay();
    console.log(`dayIndex: ${dayIndex}`);
    day = days[dayIndex];
    console.log(`day: ${day}`);
    var monthIndex = interpretedDate.getMonth();
    console.log(`monthIndex: ${monthIndex}`);
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[monthIndex];
    console.log(`month: ${month}`)
    date = interpretedDate.getDate();
    console.log(`Date: ${date}`)
    return `${day}, ${month} ${date}`;
}



// ${city} was arrested on suspicion of ${charge} on ${day}, ${month} ${date},according to booking logs.
// This story is developing. Check back for details.`

const MiamiMadLib = props => (
    <div>
        <h4>Test headline</h4>
        <p>{ nameInterpreter() } of { cityInterpreter() } was arrested on suspicion of { chargesInterpreter() } on { weekDayInterpreter() }, according to booking logs.</p>
        <p>This story is developing. Check back for details.</p>
    </div>
)
export default MiamiMadLib;