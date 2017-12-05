import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Card, CardText } from 'material-ui/Card';


// import DatePicker from 'react-datepicker';
// import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker.css';

const DateInput = props => (
  <div  id="dashboard-form-layout">
    <Card id="dashboard-form-card">
    <h1 className="title">Crime Watcher Results</h1>
      <br/>
      <DropDownMenu
        type="text"
        onChange={(event, index, value ) => props.handleInputChange(event, index, value, 'month')}
        name="month"
        value={props.month}
        placeholder="MM"
        openImmediately={false} >
          <MenuItem value={"Month"} primaryText="Month" />
          <MenuItem value={"01"} primaryText="January" />
          <MenuItem value={"02"} primaryText="February" />
          <MenuItem value={"03"} primaryText="March" />
          <MenuItem value={"04"} primaryText="April" />
          <MenuItem value={"05"} primaryText="May" />
          <MenuItem value={"06"} primaryText="June" />
          <MenuItem value={"07"} primaryText="July" />
          <MenuItem value={"08"} primaryText="August" />
          <MenuItem value={"09"} primaryText="September" />
          <MenuItem value={"10"} primaryText="October" />
          <MenuItem value={"11"} primaryText="November" />
          <MenuItem value={"12"} primaryText="December" />
      </DropDownMenu>
      <br/>

      <DropDownMenu
         type="text"
         onChange={(event, index, value ) => props.handleInputChange(event, index, value, 'day')}
         name="day"
         value={props.day}
         placeholder="DD"
         openImmediately={false} >
           <MenuItem value={"Day"} primaryText="Day" />
           <MenuItem value={"01"} primaryText="01" />
           <MenuItem value={"02"} primaryText="02" />
           <MenuItem value={"03"} primaryText="03" />
           <MenuItem value={"04"} primaryText="04" />
           <MenuItem value={"05"} primaryText="05" />
           <MenuItem value={"06"} primaryText="06" />
           <MenuItem value={"07"} primaryText="07" />
           <MenuItem value={"08"} primaryText="08" />
           <MenuItem value={"09"} primaryText="09" />
           <MenuItem value={"10"} primaryText="10" />
           <MenuItem value={"11"} primaryText="11" />
           <MenuItem value={"12"} primaryText="12" />
           <MenuItem value={"13"} primaryText="13" />
           <MenuItem value={"14"} primaryText="14" />
           <MenuItem value={"15"} primaryText="15" />
           <MenuItem value={"16"} primaryText="16" />
           <MenuItem value={"17"} primaryText="17" />
           <MenuItem value={"18"} primaryText="18" />
           <MenuItem value={"19"} primaryText="19" />
           <MenuItem value={"20"} primaryText="20" />
           <MenuItem value={"21"} primaryText="21" />
           <MenuItem value={"22"} primaryText="22" />
           <MenuItem value={"23"} primaryText="23" />
           <MenuItem value={"24"} primaryText="24" />
           <MenuItem value={"25"} primaryText="25" />
           <MenuItem value={"26"} primaryText="26" />
           <MenuItem value={"27"} primaryText="27" />
           <MenuItem value={"28"} primaryText="28" />
           <MenuItem value={"29"} primaryText="29" />
           <MenuItem value={"30"} primaryText="30" />
           <MenuItem value={"31"} primaryText="31" />
      </DropDownMenu>
      <br/>

      <DropDownMenu
        type="text"
        onChange={(event, index, value ) => props.handleInputChange(event, index, value, 'year')}
        name="year"
        value={props.year}
        placeholder="YYYY"
        openImmediately={false} >
          <MenuItem value={"Year"} primaryText="Year" />
          <MenuItem value={"2004"} primaryText="2004" />
          <MenuItem value={"2005"} primaryText="2005" />
          <MenuItem value={"2006"} primaryText="2006" />
          <MenuItem value={"2007"} primaryText="2007" />
          <MenuItem value={"2008"} primaryText="2008" />
          <MenuItem value={"2009"} primaryText="2009" />
          <MenuItem value={"2010"} primaryText="2010" />
          <MenuItem value={"2011"} primaryText="2011" />
          <MenuItem value={"2012"} primaryText="2012" />
          <MenuItem value={"2013"} primaryText="2013" />
          <MenuItem value={"2014"} primaryText="2014" />
          <MenuItem value={"2015"} primaryText="2015" />
          <MenuItem value={"2016"} primaryText="2016" />
          <MenuItem value={"2017"} primaryText="2017" />
      </DropDownMenu>
      <br/>

      <br/>

      <DropDownMenu
          type="text"
          name="charge"
          value={props.charge}
          onChange={(event, index, value ) => props.handleInputChange(event, index, value, 'charge')}
          openImmediately={false}>
          <MenuItem value={""} primaryText="Charge" />
          <MenuItem value={"PETIT THEFT"} primaryText="Petty Theft" />
          <MenuItem value={"LOITERING OR PROWL"} primaryText="Loitering" />
          <MenuItem value={"ALCOHOL/CONSUM/STORE"} primaryText="ALCOHOL/CONSUM/STORE" />
          <MenuItem value={"CHILD ABUSE/NO HARM"} primaryText="Child Abuse" />
          <MenuItem value={"COCAINE/POSSESSION"} primaryText="Cocaine Possession" />
          <MenuItem value={"BENCH WARRANT"} primaryText="BENCH WARRANT" />
          <MenuItem value={"TRES PROP/AFTER WARN"} primaryText="TRES PROP/AFTER WARN" />
          <MenuItem value={"PROBATION WARRANT"} primaryText="Probation Warrant" />
          <MenuItem value={"DL/EXPIRED 6 MTHS+"} primaryText="DL/EXPIRED 6 MTHS+" />
          <MenuItem value={"DWLS/KNOWINGL"} primaryText="DWLS/KNOWINGLY" />
          <MenuItem value={"ARREST WARRANT"} primaryText="Arrest Warrant" />
          <MenuItem value={"DRUG PARAPHERNA/POSN"} primaryText="Drug Paraherna Posession" />
          <MenuItem value={"ALC BEV/DRK IN PUBLC"} primaryText="Drunk in Public" />
      </DropDownMenu>

    </Card>

  </div>

)
export default DateInput;
