import React, { Component } from "react";
import Nvd3Analytics from "../../utils/Nvd3Analytics";

class Summary extends Component {

	state = {
		age: {},
		day: {},
		crime: {},
	};



	componentDidMount() {
		Nvd3Analytics.age(this.props.crimeData).then((response) => {
			this.setState({
				age: response
			})
		})

		Nvd3Analytics.crime(this.props.crimeData).then((response) => {
			this.setState({
				crime: response
			})
			;
		})

		Nvd3Analytics.day(this.props.crimeData).then((response) => {
			this.setState({
				day: response
			})
		})
		console.log("-----------------");
		console.log(this.state);
		console.log("-----------------");
	};

render() {
		return(
			<div class="container">
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
			</div>
		)	
}

};

export default Summary;
