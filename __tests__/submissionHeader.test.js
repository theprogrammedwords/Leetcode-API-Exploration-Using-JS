const utils = require('../utils/config');
const { addSubmissionColumnHeader } = require(utils.fileToTest);
const webPage = require('../utils/webPage.json')

describe('Test adding submissions header', () => {
    beforeEach(async () => {
        document.body.innerHTML = webPage.body;
    })
    it('should add header to the table head row', () => {
        addSubmissionColumnHeader();
        const submissionElement = document.querySelector("#question-app > div > div:nth-child(2) > div.question-list-base > div.table-responsive.question-list-table > table > thead > tr > th:nth-child(8)");
        expect(submissionElement).not.toBeNull();

    })
    it('should have the desired className', () => {
        addSubmissionColumnHeader();
        const submissionElement = document.querySelector("#question-app > div > div:nth-child(2) > div.question-list-base > div.table-responsive.question-list-table > table > thead > tr > th:nth-child(8)");
        expect(submissionElement).not.toBeNull();

        expect(submissionElement.className.trim()).toEqual('reactable-th-status reactable-header-sortable');
        expect(submissionElement.role.trim()).toEqual("button");

        const strongElement = submissionElement.querySelector("strong");
        expect(strongElement).not.toBeNull();
        expect(strongElement.innerText).toEqual("Submissions");
    })

    it('should have the desired role', () => {
        addSubmissionColumnHeader();
        const submissionElement = document.querySelector("#question-app > div > div:nth-child(2) > div.question-list-base > div.table-responsive.question-list-table > table > thead > tr > th:nth-child(8)");
        expect(submissionElement).not.toBeNull();

        expect(submissionElement.role.trim()).toEqual("button");
    })

    it('should have a <strong> child with correct column name', () => {
        addSubmissionColumnHeader();
        const submissionElement = document.querySelector("#question-app > div > div:nth-child(2) > div.question-list-base > div.table-responsive.question-list-table > table > thead > tr > th:nth-child(8)");
        expect(submissionElement).not.toBeNull();

        const strongElement = submissionElement.querySelector("strong");
        expect(strongElement).not.toBeNull();
        expect(strongElement.innerText).toEqual("Submissions");
    })
})
