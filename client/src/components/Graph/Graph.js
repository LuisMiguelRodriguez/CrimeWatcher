import React, { Component } from "react";
import Nvd3Analytics from "../../utils/Nvd3Analytics";
import NVD3Chart from "react-nvd3"

export const Graph = (props) => {


	//Regular pie chart example
//Regular pie chart example
	var dataArray = []

	Nvd3Analytics.crimeCount(props.crimeData).then((response) => {
		Object.keys(response).forEach((value) => {
			let tmpObject = {
				key: value,
				count: response[value]
			};

			dataArray.push(tmpObject)
		})
		console.log("---- This is the data Array -----")
		console.log(dataArray)
		console.log("---- This is the data Array -----")

		props.datum = dataArray

	})


		return(
			<h1>Hello World</h1>
		)
}

