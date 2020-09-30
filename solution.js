/* Step 1: Find the API endpoint for retrieving all problems
 */
function getApiUrl() {
}

/* Step 2: Get all the problems in the following format by using fetch -
 *          {
 *              id: "",
 *              total_submitted: "",
 *              total_acs: ""
 *          }
 */
async function getAllProblems(apiUrl) {
}


/* Step 3: Adding Submission column header to the table -
 *         a. Find the table header element.
 *         b. Create the Submission header <th> element.
 *         c. Add this element to the header.
 *              - Add the element only when this column doesn't exist (Optional)
 */
function addSubmissionColumnHeader() {
}


/* Step 4: Getting every problem's row in the form of an array
 */
function getAllProblemRowElements() {
}

/* Step 5: Adding total_acs / total_submitted to each row element of the table on the page. Iterate through each row element and add a new <td> containing the submission data
 */
function addSubmissionsToEachProblem(allProblemRowElements, allProblems) {
}


/* Step 6: Putting it all together
 */
async function createSubmissionColumnForLeetCode() {
}

/* Step 7: Additional code for making script tampermonkey ready. This is done so that the script is properly execute when we visit leetcode.com
 */
let tableCheck = setInterval(() => {
} , 100);

module.exports = {getApiUrl, getAllProblems, addSubmissionColumnHeader, getAllProblemRowElements, addSubmissionsToEachProblem, createSubmissionColumnForLeetCode};
