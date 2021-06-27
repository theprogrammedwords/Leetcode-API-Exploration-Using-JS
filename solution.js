const axios = require('axios');
const objectsToCsv = require('objects-to-csv');
const fs = require('fs');

/* Step 1: Adding Submission column header to the table -
 *         a. Find the table header element.
 *         b. Create the Submission header <th> element.
 *         c. Add this element to the header.
 *              - Add the element only when this column doesn't exist (Optional)
 */
function addSubmissionColumnHeader() {
  const submissionHeader = document.createElement("th")

  submissionHeader.setAttribute('class', 'reactable-th-status reactable-header-sortable')
  const strongtag = document.createElement('strong')

  //submissionHeader.setAttribute("class", "ant-table-cell ant-table-cell-ellipsis")
  submissionHeader.setAttribute("title", "Submissions")
  submissionHeader.setAttribute("role", "button")

  
  submissionHeader.appendChild(strongtag)
  
  strongtag.innerHTML = "Submissions"
  
  const trrow =document.getElementsByTagName('tr')
  trrow[0].appendChild(submissionHeader)
}


/* Step 2: Find the API endpoint for retrieving all problems
 */
function getApiUrl() {
  return "https://leetcode.com/api/problems/all/"
}

/* Step 3: Get all the problems as an Array in the following object format by using fetch -
 *          {
 *              id: "",
 *              total_submitted: "",
 *              total_acs: ""
 *          }
 */
async function getAllProblems(apiUrl) {
  let result = await fetch(apiUrl)
  let data = await result.json()

  let allproblemsarray = data.stat_status_pairs
  let transformedData = transformData(allproblemsarray)

  return transformedData;
}


function transformData(allproblemsarray){
  let transformDataArray = allproblemsarray.map((problem) => {
    return {
      id : problem.stat.frontend_question_id,
      total_submitted : problem.stat.total_submitted,
      total_acs : problem.stat.total_acs
    };
  })
  return transformDataArray

/*var expectedArr = [];

	for(let i=0; i < allproblemsarray.length; i++){

		let array = { id :'', total_submitted:'', total_acs : ''};

		array.id = allproblemsarray[i].stat.frontend_question_id;
		array.total_submitted = allproblemsarray[i].stat.total_submitted;
		array.total_acs = allproblemsarray[i].stat.total_acs;

		expectedArr.push(array);
	}
  return expectedArr*/
}


/* Step 4: Getting every problem's row in the form of an array
 */
function getAllProblemRowElements() {
  let selectorvar = document.querySelectorAll("#__next > div > div > div.grid.grid-cols-4.md\\:grid-cols-3.lg\\:grid-cols-4.gap-4.lg\\:gap-6 > div.col-span-4.md\\:col-span-2.lg\\:col-span-3 > div.jsx-3812067982 > div.ant-table-wrapper.question-table.-mx-4.md\\:mx-0 > div > div > div > div > div > table > tbody > tr")
  return Array.from(selectorvar)
}

/* Step 5: Add "total_acs"/"total_submitted" to each row element of the table on the page. 
        Iterate through each row element and add a new <td> containing the submission data in the provided format
   Note: Use "innerHTML" or "textContent" to access element's content. Don't use "innerText"
 */
function addSubmissionsToEachProblem(allProblemRowElements, allProblems) {

  for(let i=1; i< allProblemRowElements.length; i++){
    let problemId =  parseInt(allProblemRowElements[i].children[1].innerText.split('.',1));
    
    let problemData = allProblems.find((problems)=>{
      return  problemId === problems.id
    })

    let submissions = `${problemData.total_acs}/${problemData.total_submitted}`;
    let td = document.createElement('td');

    td.innerText = submissions;
    allProblemRowElements[i].appendChild(td);
  }
}


/* Step 6: Putting it all together
 */
async function createSubmissionColumnForLeetCode() {
  addSubmissionColumnHeader()
  let url = getApiUrl()
  let allProblems =  getAllProblems(url)
  let allProblemsData =  getAllProblemRowElements() 
  addSubmissionsToEachProblem(allProblems,allProblemsData)
  
}

/* Step 7: Additional code for making script tampermonkey ready. This is done so that the script is properly executed when we visit https://leetcode.com/problemset/all/
 */
let tableCheck = setInterval(() => {
  let table = document.querySelector("#__next > div > div > div.grid.grid-cols-4.md\\:grid-cols-3.lg\\:grid-cols-4.gap-4.lg\\:gap-6 > div.col-span-4.md\\:col-span-2.lg\\:col-span-3 > div.jsx-3812067982 > div.ant-table-wrapper.question-table.-mx-4.md\\:mx-0 > div > div > div > div > div > table > tbody")
  if (table) {
      createSubmissionColumnForLeetCode();
      clearInterval(tableCheck);
  }
} , 100);


module.exports = {getApiUrl, getAllProblems, addSubmissionColumnHeader, getAllProblemRowElements, addSubmissionsToEachProblem, createSubmissionColumnForLeetCode};
//let dataval = AllProblemRowElements.filter(AllProblemRowElements => {allProblemRowElements }) 

