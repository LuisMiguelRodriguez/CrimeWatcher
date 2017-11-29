import React from 'react';
// import DatePicker from 'react-datepicker';
// import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker.css';

const DateInput = props => (
  <div>
    <input
      type="text"
      onChange={props.handleInputChange}
      name="month"
      value={props.month}
      placeholder="MM"
      className="span2"></input>
    <input
      type="text"
      onChange={props.handleInputChange}
      name="day"
      value={props.day}
      placeholder="DD"
      className="span2"></input>
    <input
      type="text"
      onChange={props.handleInputChange}
      name="year"
      value={props.year}
      placeholder="YYYY"
      className="span2"></input>
  </div>
  
)
export default DateInput;