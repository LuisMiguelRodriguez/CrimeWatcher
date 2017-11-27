export default {
	//gets an array of data and returns an array with the following key value pairs - crime name, count
	crimeCount: (dataArray) => {
		return new Promise ((resolve, reject) => {
			let crimeCounts = {};
			dataArray.forEach( (element) => {
				var charge = "";
				if (element.charge1) {
					charge = element.charge1
				};

				crimeCounts[charge] = (crimeCounts[charge]||0)+1
			});
			resolve(crimeCounts);
		})
	},

	//returns an object with key equal to the age and value equal to number of folks with that age that have committed a crime
	ageCount: (dataArray) => {
		return new Promise ((resolve, reject) => {
			let ageCounts = {};
			dataArray.forEach( (element) => {
				let birthYear = 0;
				if (element.dob) {
					birthYear = parseInt(element.dob.split("-")[0]);
				};

				let currentAge = (2017-birthYear).toString();
				ageCounts[currentAge] = (ageCounts[currentAge]||0)+1
			});
			resolve(ageCounts);
		})
	},

	//returns an object with key = day and value equal to count of crimes on that day
	dayCount: (dataArray) => {
		return new Promise ((resolve, reject) => {
			let dayCounts = {};
			dataArray.forEach( (element) => {
				let bookDate= element.bookdate;
				let bookDay = bookDate.split("T")[0];
				dayCounts[bookDay] = (dayCounts[bookDay]||0)+1
			});
			resolve(dayCounts);
		})
	}


}
