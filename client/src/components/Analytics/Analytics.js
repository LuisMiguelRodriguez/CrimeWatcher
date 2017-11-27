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
    this.loadData();
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
        .then(res =>
          this.setState({ crimeData: res})
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
