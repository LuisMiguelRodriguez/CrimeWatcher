import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router";
// import { Col, Row, Container } from "../Grid";
import { Input, FormBtn } from "../Form";
import Nvd3Analytics from "../utils/Nvd3Analytics";
import NVD3Chart from "react-nvd3";

class Analytics extends Component {
  constructor(props){

    super(props)

    this.state = {
      startMonth: "05",
      startDay: "05",
      startYear: "2016",
      endDay: "08",
      endMonth: "08",
      endYear: "2016",
      startDate: "2015-05-05",
      endDate: "2015-07-07",
      crimeData: [],
      sortType: "crime",
      chartType: "pieChart",
      showGraph: false,
      datum:[],
      chartVal:"pieChart",
      age: {},
      day: {},
      crime: {},
    };

    this.loadData = () => {

    };

    this.handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };


  //Upon user search, call the miami api and save data in state
    this.callTheAPI = event => {

      this.setState({
        datum: [],
      });


      event.preventDefault();
      if (this.state.startDate && this.state.endDate) {
        let URL = `https://opendata.miamidade.gov/resource/k7xd-qgzt.json?$where=bookdate between '${this.state.startYear}-${this.state.startMonth}-${this.state.startDay}T12:00:00' and '${this.state.endYear}-${this.state.endMonth}-${this.state.endDay}T14:00:00'`;

      console.log("------- Before Entering switch logging state here -------");
      console.log(this.state)
      console.log("------- end logging state here -------");
        // let URL = `https://opendata.miamidade.gov/resource/k7xd-qgzt.json?$where=bookdate between '${this.state.startDate}T12:00:00' and '${this.state.endDate}T14:00:00'`;
        console.log(URL)
        API.getData(URL)
          .then(res => {
            this.setState({ crimeData: res.data});

            //Get analytics on data
            Nvd3Analytics.age(this.state.crimeData).then((response) => {
              this.setState({
                age: response
              })
            });

            Nvd3Analytics.crime(this.state.crimeData).then((response) => {
              this.setState({
                crime: response
              })
              ;
            });

            Nvd3Analytics.day(this.state.crimeData).then((response) => {
              this.setState({
                day: response
              })
            });

            // END getting data anlytics


             switch(this.state.chartType) {
                case "discreteBarChart":
                          this.setState({
                            chartVal: "discreteBarChart"
                          })
                          switch (this.state.sortType){
                            case "crime":
                              Nvd3Analytics.crimeCount(this.state.crimeData).then((response) => {
                                let dataArray = [];
                                Object.keys(response).forEach((value) => {
                                  let tmpObject = {
                                    key: "Crime: " + value + " | Count: ",
                                    count: parseInt(response[value])
                                  };

                                  dataArray.push(tmpObject)
                                })
                                this.setState({
                                  datum: [{
                                    key: "Cumulative Return",
                                    values: dataArray.slice(0,10)}],
                                })
                              })
                            break;
                            case "age":
                              Nvd3Analytics.ageCount(this.state.crimeData).then((response) => {
                                let dataArray = [];
                                Object.keys(response).forEach((value) => {
                                  let tmpObject = {
                                    key: "Age: " + value + " | Count: ",
                                    count: parseInt(response[value])
                                  };

                                  dataArray.push(tmpObject)
                                })

                                this.setState({
                                  datum: [{
                                    key: "Cumulative bar",
                                    values: dataArray.slice(0,10)}],
                                })
                              })
                            break;
                            case "day":
                              Nvd3Analytics.dayCount(this.state.crimeData).then((response) => {
                                let dataArray = [];
                                Object.keys(response).forEach((value) => {
                                  let tmpObject = {
                                    key: "Day: " + value + " | Count: ",
                                    count: parseInt(response[value])
                                  };

                                  dataArray.push(tmpObject)
                                })

                                this.setState({
                                  datum: [{
                                    key: "Cumulative bar",
                                    values: dataArray.slice(0,10)}],
                                })
                              })
                            break;
                          }
                break;
                case "pieChart":
                          this.setState({
                            chartVal: "pieChart"
                          })
                          //Setting up data for the graph
                          switch (this.state.sortType){
                            case "crime":
                              Nvd3Analytics.crimeCount(this.state.crimeData).then((response) => {
                                let dataArray = [];
                                Object.keys(response).forEach((value) => {
                                  let tmpObject = {
                                    key: "Crime: " + value + " | Count: ",
                                    count: parseInt(response[value])
                                  };

                                  dataArray.push(tmpObject)
                                })

                                this.setState({
                                  datum: dataArray.slice(0,10),
                                })
                                console.log("------- logging state here -------");
                                console.log(this.state)
                                console.log("------- end logging state here -------");
                              })
                            break;
                            case "age":
                              Nvd3Analytics.ageCount(this.state.crimeData).then((response) => {
                                let dataArray = [];
                                Object.keys(response).forEach((value) => {
                                  let tmpObject = {
                                    key: "Age: " + value + " | Count: ",
                                    count: parseInt(response[value])
                                  };

                                  dataArray.push(tmpObject)
                                })

                                 this.setState({
                                  datum: dataArray.slice(0,10),
                                })
                              })
                            break;
                            case "day":
                              Nvd3Analytics.dayCount(this.state.crimeData).then((response) => {
                                let dataArray = [];
                                Object.keys(response).forEach((value) => {
                                  let tmpObject = {
                                    key: "Day: " + value + " | Count: ",
                                    count: response[value]
                                  };

                                  dataArray.push(tmpObject)
                                })


                                this.setState({
                                  datum: dataArray.slice(0,10),
                                })
                              })
                            break;
                          }
                break;

              }
          }
          )
          .catch(err => console.log(err));
      }
    };

  }


  componentDidMount() {

    this.setState({
      datum: [],
    });



  }


  render() {
    return (
      <div id="analytics-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br/><br/><hr/><hr/><hr/>
              <h1 id="analyticsHeader"> Analytics Dashboard </h1>
            </div>
          </div>
          <div id="analyticsForm">
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Start Day</label>
                  <select 
                  className="form-control" 
                  value={this.state.startDay} 
                  onChange={this.handleInputChange}
                  name="startDay" >
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Start Month</label>
                  <select 
                  className="form-control" 
                  value={this.state.startMonth} 
                  onChange={this.handleInputChange}
                  name="startMonth" >
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Start Year</label>
                  <select 
                  className="form-control" 
                  value={this.state.startYear} 
                  onChange={this.handleInputChange}
                  name="startYear" >
                    <option>2000</option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                    <option>2004</option>
                    <option>2005</option>
                    <option>2006</option>
                    <option>2007</option>
                    <option>2008</option>
                    <option>2009</option>
                    <option>2010</option>
                    <option>2011</option>
                    <option>2012</option>
                    <option>2013</option>
                    <option>2014</option>
                    <option>2015</option>
                    <option>2016</option>
                    <option>2017</option>
                  </select>
                </div>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>End Day</label>
                  <select 
                  className="form-control" 
                  value={this.state.endDay} 
                  onChange={this.handleInputChange}
                  name="endDay" >
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>End Month</label>
                  <select 
                  className="form-control" 
                  value={this.state.endMonth} 
                  onChange={this.handleInputChange}
                  name="endMonth" >
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>End Year</label>
                  <select 
                  className="form-control" 
                  value={this.state.endYear} 
                  onChange={this.handleInputChange}
                  name="endYear" >
                    <option>2000</option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                    <option>2004</option>
                    <option>2005</option>
                    <option>2006</option>
                    <option>2007</option>
                    <option>2008</option>
                    <option>2009</option>
                    <option>2010</option>
                    <option>2011</option>
                    <option>2012</option>
                    <option>2013</option>
                    <option>2014</option>
                    <option>2015</option>
                    <option>2016</option>
                    <option>2017</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Sort By</label>
                  <select 
                  className="form-control form-control-lg" 
                  value={this.state.sortType} 
                  onChange={this.handleInputChange}
                  name="sortType" >
                    <option>crime</option>
                    <option>day</option>
                    <option>age</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Chart Type</label>
                  <select 
                  className="form-control form-control-lg"
                  value={this.state.chartType}
                  onChange={this.handleInputChange}
                  name="chartType">
                    <option>pieChart</option>
                    <option>discreteBarChart</option>
                  </select>
                </div>
              </div>
            </div>


            <div className="row">
              <div className="col-md-12 text-center">
                <button type="button" className="btn btn-danger btn-lg " onClick={this.callTheAPI}>Initiate Analytics</button>
              </div>
            </div>
          </div>
          <hr/>
          <br/><br/>  
          <div className="row">
            <div className="col-md-4">
              <div className="dataBlob">
                Oldest Criminal : {this.state.age.maxAge}
              </div>
            </div>

            <div className="col-md-4">
              <div className="dataBlob">
                Youngest Criminal: {this.state.age.minAge}
              </div>
            </div>

            <div className="col-md-4">
              <div className="dataBlob">
                Most Common Criminal Age : {this.state.age.maxCrimeAge}
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-md-2">
            </div>
            <div className="col-md-4">
              <div className="dataBlob">
                Lowest Crime Commited : {this.state.crime.minCrimeType}
              </div>
            </div>

            <div className="col-md-4">
              <div className="dataBlob">
                Most commited crime : {this.state.crime.maxCrimeType}
              </div>
            </div>
            <div className="col-md-2">
            </div>
          </div>


          <div className="row">
            <div className="col-md-2">
            </div>
            <div className="col-md-4">
              <div className="dataBlob">
                Minimum Crimes on : {this.state.day.minCrimeDay} <br/>
                Number of Crimes: {this.state.day.minCrimeDayCount}
              </div>
            </div>

            <div className="col-md-4">
              <div className="dataBlob">
                Maximum Crimes on : {this.state.day.maxCrimeDay} <br/>
                Number of Crimes: {this.state.day.maxCrimeDayCount}
              </div>
            </div>
            <div className="col-md-2">
            </div>
          </div>

          <hr/>
          <br/><br/> 

          <div id="graphingRegion">
            <div className="row">
              <div className="col-md-1">
              </div>
              <div className="col-md-10 text-center">
                <NVD3Chart
                  id="chart"
                  width={800}
                  height={500}
                  type={this.state.chartVal}
                  datum={this.state.datum}
                  x="key"
                  y="count"
                  showValues={true}
                  showLegend={true}
                  showControls={true}
                  showLabels={true}
                  showXAxis={false}
                  labelType="percent"
                  noData="Awaiting Data"
                />
              </div>
              <div className="col-md-1">
              </div>
            </div>
          </div>

          <hr/>
          <br/><br/> 
        </div>
      </div>
    );
  }
}

export default Analytics;
