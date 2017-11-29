import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Nvd3Analytics from "../../utils/Nvd3Analytics";
import NVD3Chart from "react-nvd3";


class Analytics extends Component {
  state = {
    startDate: "",
    endDate: "",
    crimeData: [],
    sortType: "",
    chartType: "pieChart",
    showGraph: false,
    datum:[],
    chartVal:"pieChart",
    age: {},
    day: {},
    crime: {},
  };

  componentDidMount() {

    this.setState({
      datum: []
    })


  }

  
  loadData = () => {

  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


//Upon user search, call the miami api and save data in state
  callTheAPI = event => {

    this.setState({
      datum: [],
    });

    event.preventDefault();
    if (this.state.startDate && this.state.endDate) {

      let URL = `https://opendata.miamidade.gov/resource/k7xd-qgzt.json?$where=bookdate between '${this.state.startDate}T12:00:00' and '${this.state.endDate}T14:00:00'`;
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
                              console.log("---- This is the data Array -----")
                              console.log(dataArray.slice(0,10))
                              console.log("---- This is the data Array -----")

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
                              console.log("---- This is the data Array -----")
                              console.log(dataArray.slice(0,10))
                              console.log("---- This is the data Array -----")

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
                              console.log("---- This is the data Array -----")
                              console.log(dataArray.slice(0,10))
                              console.log("---- This is the data Array -----")

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
                              console.log("---- This is the data Array -----")
                              console.log(dataArray.slice(0,10))
                              console.log("---- This is the data Array -----")

                              this.setState({
                                datum: dataArray.slice(0,10),
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
                              console.log("---- This is the pieChart -----")
                              console.log(dataArray.slice(0,10))
                              console.log("---- This is the pieChart -----")

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
                              console.log("---- This is the data Array -----")
                              console.log(dataArray.slice(0,10))
                              console.log("---- This is the data Array -----")

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


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
              <h1>MIAMI - Crime Analytics</h1>
            <form>
              <Input
                value={this.state.startDate}
                onChange={this.handleInputChange}
                name="startDate"
                placeholder="startDate  (required)"
              />
              <Input
                value={this.state.endDate}
                onChange={this.handleInputChange}
                name="endDate"
                placeholder="endDate  (required)"
              />
              <Input
                value={this.state.chartType}
                onChange={this.handleInputChange}
                name="chartType"
                placeholder="chart Type  (required)"
              />
              <Input
                value={this.state.sortType}
                onChange={this.handleInputChange}
                name="sortType"
                placeholder="sort by  (required)"
              />
              <FormBtn
                disabled={!(this.state.startDate && this.state.endDate)}
                onClick={this.callTheAPI}
              >
                Initiate Analytics
              </FormBtn>
            </form>
          </Col>
        </Row>
        <div class="row">
          <div class="col-md-4">
            Max Age : {this.state.age.maxAge}
          </div>
          <div class="col-md-4">
            Min Age : {this.state.age.minAge}
          </div>
          <div class="col-md-4">
            Age that commited the most crimes : {this.state.age.maxCrimeAge}
          </div>
        </div>


        <div class="row">
          <div class="col-md-6">
            Lowest crimes commited on : {this.state.day.minCrimeDay} || Number of Crimes commited : {this.state.day.minCrimeDayCount}
          </div>
          <div class="col-md-6">
            Highest crimes commited on : {this.state.day.maxCrimeDay} || Number of Crimes commited : {this.state.day.maxCrimeDayCount}
          </div>
        </div>


        <div class="row">
          <div class="col-md-6">
            Most commited crime : {this.state.crime.maxCrimeType}
          </div>
          <div class="col-md-6">
            Least commited crime : {this.state.crime.minCrimeType}
          </div>
        </div>

        <Row>
            <NVD3Chart
              id="chart"
              width={700}
              height={570}
              type={this.state.chartVal}
              datum={this.state.datum}
              x="key"
              y="count"
              showValues={false}
              showLegend={false}
              showControls={false}
              showLabels={false}
              showXAxis={false}
              labelType="percent"
              noData="Awaiting Data"
            />
        </Row>

      </Container>
    );
  }
}

export default Analytics;
