import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { Graph } from "../Graph";
import Nvd3Analytics from "../../utils/Nvd3Analytics";


class Analytics extends Component {
  state = {
    startDate: "",
    endDate: "",
    crimeData: [],
    sortType: "",
    chartType: "",
    showGraph: false,
  };

  componentDidMount() {
//     var tmp = [{"bookdate":"2015-06-11T00:00:00.000","charge1":"PROBATION WARRANT","chargecode1":"32234002","defendant":"SAUNDERS, TAWANDA","dob":"1976-07-19T00:00:00.000","location_1_address":"852 NW 8TH STREET","location_1_city":"FTLAUDERDALE","location_1_state":"FL"}
// ,{"bookdate":"2015-06-12T00:00:00.000","charge1":"GRAND THEFT 3RD DEG","chargecode1":"81201402C","defendant":"ROSSO, JORGE  ALBERTO","dob":"1956-01-09T00:00:00.000","location_1_address":"FITZ ROY 1450, BUENOS AI 9A","location_1_city":"AT","location_1_state":"BA","location_1_zip":"01414"}
// ,{"bookdate":"2015-06-13T00:00:00.000","charge1":"BATTERY","chargecode1":"7840300","defendant":"BUTLER, BIANCA  KATHLIA","dob":"1988-03-11T00:00:00.000","location_1_address":"DIGNITY GARDENS 17 NASSA","location_1_city":"NASSAU","location_1_state":"BA","location_1_zip":"00000"}
// ,{"bookdate":"2015-06-13T00:00:00.000","charge1":"BATTERY","chargecode1":"7840300","defendant":"HAIDER, ABDULLAH","dob":"1985-11-07T00:00:00.000","location_1_address":"BAYAN BLK 2 ST HOUSE 4-8 2","location_1_city":"MINA","location_1_state":"KU"}
// ,{"bookdate":"2015-06-19T00:00:00.000","charge1":"PETIT THEFT 1D","chargecode1":"81201402E","defendant":"SANCHEZ-RUIZ, PERLA  MELINA","dob":"1996-08-07T00:00:00.000","location_1_address":"CANAL CUATRO Y SANCHO DE N38-","location_1_city":"QUITO","location_1_state":"EU"}
// ,{"bookdate":"2015-06-19T00:00:00.000","charge1":"GRAND THEFT 3RD DEG","charge2":"ID/USE/POSS/FRAUD","charge3":"ID/USE/POSS/FRAUD","chargecode1":"81201402C","chargecode2":"81756802A","chargecode3":"81756802A","defendant":"KNOWLES, PERCIUS  ASHLEY","dob":"1985-07-22T00:00:00.000","location_1_address":"18 HILLARY AVE","location_1_city":"FREEPORT","location_1_state":"BH"}];
//   Nvd3Analytics.day(tmp).then((res) => {
//     console.log(res)
//   });

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
    event.preventDefault();
    if (this.state.startDate && this.state.endDate) {

      let URL = `https://opendata.miamidade.gov/resource/k7xd-qgzt.json?$where=bookdate between '${this.state.startDate}T12:00:00' and '${this.state.endDate}T14:00:00'`;

      API.getData(URL)
        .then(res => {
          this.setState({ crimeData: res});
          Nvd3Analytics.crimeCount(res).then(dataRes => {console.log("Here is the response: ...");console.log(dataRes)});
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

        <Row>
        <Graph {...this.state} />
        </Row>
      </Container>
    );
  }
}

export default Analytics;
