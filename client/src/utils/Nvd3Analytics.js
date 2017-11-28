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
	},

	age: (dataArray) => {
		return new Promise ((resolve, reject) => {
			let ageCounts = {};
			ageCounts["age"] = [];
			ageCounts["counts"] = [];
			dataArray.forEach( (element) => {
				let birthYear = 0;
				if (element.dob) {
					birthYear = parseInt(element.dob.split("-")[0]);
				};

				let currentAge = (2017-birthYear).toString();

				if (ageCounts.age.indexOf(currentAge) === -1) {
					ageCounts.age.push(currentAge);
					ageCounts.counts.push(1)
				} else {
					ageCounts.counts[ageCounts.age.indexOf(currentAge)]++;
				}
			});


			let maxAge = Math.max(...ageCounts.age);
			let minAge = Math.min(...ageCounts.age);
			let maxCrimeAge = ageCounts.age[ageCounts.counts.indexOf(Math.max(...ageCounts.counts))];

			console.log(maxAge + " " + minAge + " " + maxCrimeAge)

			resolve({maxAge: maxAge,minAge: minAge,maxCrimeAge: maxCrimeAge})
		})
	},

	day: (dataArray) => {
		return new Promise ((resolve, reject) => {
			let dayCounts = {};
			dayCounts["day"] = [];
			dayCounts["counts"] = [];
			dataArray.forEach( (element) => {
				let bookDate= element.bookdate;
				let bookDay = bookDate.split("T")[0];

				if (dayCounts.day.indexOf(bookDay) === -1) {
					dayCounts.day.push(bookDay);
					dayCounts.counts.push(1)
				} else {
					dayCounts.counts[dayCounts.day.indexOf(bookDay)]++;
				}
			});

			console.log(dayCounts)
			let maxCrimeDay = dayCounts.day[dayCounts.counts.indexOf(Math.max(...dayCounts.counts))];
			let minCrimeDay = dayCounts.day[dayCounts.counts.indexOf(Math.min(...dayCounts.counts))];
			let maxCrimeDayCount = Math.max(...dayCounts.counts)
			let minCrimeDayCount = Math.min(...dayCounts.counts)

			resolve({maxCrimeDay: maxCrimeDay,minCrimeDay: minCrimeDay,maxCrimeDayCount: maxCrimeDayCount,minCrimeDayCount:minCrimeDayCount})
		})
	},




}
