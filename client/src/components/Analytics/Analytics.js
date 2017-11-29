import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Nvd3Analytics from "../../utils/Nvd3Analytics";
import NVD3Chart from "react-nvd3";
import Summary from "../../components/Summary";


class Analytics extends Component {
  state = {
    startDate: "",
    endDate: "",
    crimeData: [],
    sortType: "",
    chartType: "pieChart",
    showGraph: false,
    datum:[],
    chartVal:"pieChart"
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
                                  key: value,
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
                                  key: value + " yrs",
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
                                  key: "Day " + value,
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
                                  key: value,
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
                                  key: value + " years",
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
                                  key: "Day " + value,
                                  count: response[value]
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
          <Col size="md-6">
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
          <Col size="md-6">
            <form>
              <Input
                value={this.state.sortType}
                disabled={!(this.state.crimeData.length)}
                onChange={this.handleInputChange}
                name="sortType"
                placeholder="sortType (required)"
              />
              <Input
                value={this.state.chartType}
                disabled={!(this.state.crimeData.length)}
                onChange={this.handleInputChange}
                name="chartType"
                placeholder="chartType (required)"
              />
              <FormBtn
                disabled={!(this.state.startDate && this.state.endDate)}
                onClick={this.handleFormSubmit}
              >
                Chart Graphs
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Summary {...this.state} />
        <Row>
            <NVD3Chart
              id="chart"
              width={500}
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
