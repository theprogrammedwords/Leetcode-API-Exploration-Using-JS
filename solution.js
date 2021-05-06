/* Step 1: Adding Submission column header to the table -
 *         a. Find the table header element.
 *         b. Create the Submission header <th> element.
 *         c. Add this element to the header.
 *              - Add the element only when this column doesn't exist (Optional)
 */
function addSubmissionColumnHeader() {
}


/* Step 2: Find the API endpoint for retrieving all problems
 */
function getApiUrl() {
}

/* Step 3: Get all the problems as an Array in the following object format by using fetch -
 *          {
 *              id: "",
 *              total_submitted: "",
 *              total_acs: ""
 *          }
 */
async function getAllProblems(apiUrl) {
}



/* Step 4: Getting every problem's row in the form of an array
 */
function getAllProblemRowElements() {
}

/* Step 5: Add "total_acs"/"total_submitted" to each row element of the table on the page. 
        Iterate through each row element and add a new <td> containing the submission data in the provided format
   Note: Use "innerHTML" or "textContent" to access element's content. Don't use "innerText"
 */
function addSubmissionsToEachProblem(allProblemRowElements, allProblems) {
}


/* Step 6: Putting it all together
 */
async function createSubmissionColumnForLeetCode() {
}

/* Step 7: Additional code for making script tampermonkey ready. This is done so that the script is properly executed when we visit https://leetcode.com/problemset/all/
 */
let tableCheck = setInterval(() => {
} , 100);

module.exports = {getApiUrl, getAllProblems, addSubmissionColumnHeader, getAllProblemRowElements, addSubmissionsToEachProblem, createSubmissionColumnForLeetCode};
