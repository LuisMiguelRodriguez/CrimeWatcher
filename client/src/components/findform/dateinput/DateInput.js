import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Card, CardText } from 'material-ui/Card';



// import DatePicker from 'react-datepicker';
// import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker.css';

const DateInput = props => (

  <div className="row">
    <div className="col-md-4">
      <div className="form-group">
        <label>Month</label>
        <select
          className="form-control"
          value={props.month}
          onChange={(event, index, value ) => props.handleInputChange(event, index, value, 'month')}
          name="month" >
            <option value={"Month"} >Month</option>
            <option value={"01"} >January</option>
            <option value={"02"} >February</option>
            <option value={"03"} >March</option>
            <option value={"04"} >April</option>
            <option value={"05"} >May</option>
            <option value={"06"} >June</option>
            <option value={"07"} >July</option>
            <option value={"08"} >August</option>
            <option value={"09"} >September</option>
            <option value={"10"} >October</option>
            <option value={"11"} >November</option>
            <option value={"12"} >December</option>
        </select>
      </div>
    </div>

    <div className="col-md-4">
      <div className="form-group">
        <label>Day</label>
        <select
          className="form-control"
          value={props.day}
          onChange={(event, index, value ) => props.handleInputChange(event, index, value, 'day')}
          name="day" >
            <option value={"Day"}>Day</option>
            <option value={"01"}>01</option>
            <option value={"02"}>02</option>
            <option value={"03"}>03</option>
            <option value={"04"}>04</option>
            <option value={"05"}>05</option>
            <option value={"06"}>06</option>
            <option value={"07"}>07</option>
            <option value={"08"}>08</option>
            <option value={"09"}>09</option>
            <option value={"10"}>10</option>
            <option value={"11"}>11</option>
            <option value={"12"}>12</option>
            <option value={"13"}>13</option>
            <option value={"14"}>14</option>
            <option value={"15"}>15</option>
            <option value={"16"}>16</option>
            <option value={"17"}>17</option>
            <option value={"18"}>18</option>
            <option value={"19"}>19</option>
            <option value={"20"}>20</option>
            <option value={"21"}>21</option>
            <option value={"22"}>22</option>
            <option value={"23"}>23</option>
            <option value={"24"}>24</option>
            <option value={"25"}>25</option>
            <option value={"26"}>26</option>
            <option value={"27"}>27</option>
            <option value={"28"}>28</option>
            <option value={"29"}>29</option>
            <option value={"30"}>30</option>
            <option value={"31"}>31</option>
        </select>
      </div>
    </div>

    <div className="col-md-4">
      <div className="form-group">
        <label>Year</label>
        <select
          className="form-control"
          value={props.year}
          onChange={(event, index, value ) => props.handleInputChange(event, index, value, 'year')}
          name="year" >
            <option value={"Year"} > Year </option>
            <option value={"2004"} > 2004 </option>
            <option value={"2005"} > 2005 </option>
            <option value={"2006"} > 2006 </option>
            <option value={"2007"} > 2007 </option>
            <option value={"2008"} > 2008 </option>
            <option value={"2009"} > 2009 </option>
            <option value={"2010"} > 2010 </option>
            <option value={"2011"} > 2011 </option>
            <option value={"2012"} > 2012 </option>
            <option value={"2013"} > 2013 </option>
            <option value={"2014"} > 2014 </option>
            <option value={"2015"} > 2015 </option>
            <option value={"2016"} > 2016 </option>
            <option value={"2017"} > 2017 </option>
        </select>
      </div>
    </div>

    <div className="col-md-4 offset-md-4">
      <div className="form-group">
        <label>Charge</label>
        <select
          className="form-control"
          value={props.charge}
          onChange={(event, index, value ) => props.handleInputChange(event, index, value, 'charge')}
          name="charge" >
            <option value={"Charge"} > Charge </option>
            <option value={"PETIT THEFT"} > Petty Theft </option>
            <option value={"LOITERING OR PROWL"} > Loitering </option>
            <option value={"ALCOHOL/CONSUM/STORE"} > ALCOHOL/CONSUM/STORE </option>
            <option value={"CHILD ABUSE/NO HARM"} > Child Abuse </option>
            <option value={"COCAINE/POSSESSION"} > Cocaine Possession </option>
            <option value={"BENCH WARRANT"} > BENCH WARRANT </option>
            <option value={"TRES PROP/AFTER WARN"} > TRES PROP/AFTER WARN </option>
            <option value={"PROBATION WARRANT"} > Probation Warrant </option>
            <option value={"DL/EXPIRED 6 MTHS+"} > DL/EXPIRED 6 MTHS+ </option>
            <option value={"DWLS/KNOWINGL"} > DWLS/KNOWINGLY </option>
            <option value={"ARREST WARRANT"} > Arrest Warrant </option>
            <option value={"DRUG PARAPHERNA/POSN"} > Drug Paraherna Posession </option>
            <option value={"ALC BEV/DRK IN PUBLC"} > Drunk in Public </option>
        </select>
      </div>
    </div>

  </div>



)
export default DateInput;
