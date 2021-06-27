const axios = require('axios');
const objectsToCsv = require('objects-to-csv');
const fs = require('fs');

function getApiURL() {
// Returns a String denoting the API url which fetches all problems
	return "https://leetcode.com/api/problems/all/"
}

async function getAllProblems() {
// Returns a Promise object of the response on calling
// the API to fetch all problems

	return axios
			.get(getApiURL())
			.then(function(response){
				return response.data;
			})
			.catch(function(err){
				return err;
			})
	
}


function getTopHundredProblems(allProblems) {
    // Returns the top 100 most submitted problems
	// Input:
	//  	allProblems - Raw API response
	// Output:
	//  	Array of objects with the question id, title and total submissions values for the
	//      top 100 problems ordered by their total submissions in descending order

	const stat_status = allProblems.stat_status_pairs;
	var result = []
	result= Object.values(stat_status).filter(stat_status => stat_status.paid_only === false)	

	var expectedArr = [];

	for(let i=0; i < result.length; i++){

		let array = { id :'', question_title:'', submissions : ''};

		array.id = result[i].stat.frontend_question_id;
		array.question_title = result[i].stat.question__title;
		array.submissions = result[i].stat.total_submitted;

		expectedArr.push(array);
	}

	expectedArr.sort(function(a,b){
		return b.submissions - a.submissions;
	})
	expectedArr.length = 100;
	return expectedArr;
}



async function createCSV(topHundredProblems) {
    // Write data to a CSV file
	// Input:
	//  	topHundredProblems - data to write
	(async () => {
		const csv = new objectsToCsv(topHundredProblems);
	   
		// Save to file:
		await csv.toDisk('./list.csv');
	  })();


}

async function main() {
    console.log("Running main");
    const allProblems = await getAllProblems();
    if (allProblems != null) {
		fs.writeFile("./problemsAll.json", JSON.stringify(allProblems, null, 4), (err) => {
			if (err) {
				console.error(err);
				return;
			}
	   });
	}

    const topHundredProblems = await getTopHundredProblems(allProblems);
    createCSV(topHundredProblems);
}

module.exports = {getApiURL, getAllProblems, getTopHundredProblems, createCSV, main};
