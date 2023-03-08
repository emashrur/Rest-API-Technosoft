const { expect } = require("chai");
const { it } = require("mocha");
const moment = require("moment");
const Api = require("../../src/api");
let api;

describe("User verifies forecast scenarios", async () => {
  before(async () => {
    //Actions to perform before each test
    api = new Api();
  });
  after(async () => {
    //Actions to perform after each test
  });

  it("Can verify search repositories created_at date is not greater than updated_at date", async () => {
    const resp = await api.searchRepositories("postman", "asc", "1");

    const createdDate = moment(resp.items[0].created_at);
    const updatedDate = moment(resp.items[0].updated_at);

    updatedDate.isAfter(createdDate);

    expect(updatedDate.isAfter(createdDate), "Date is not what was expected").to
      .be.true;
  });

  it("Verify user is able to create repo", async () => {
    const resp = await api.createNewRepo('another_repo_from_postman_class_emashrur');

    console.log(resp.owner.login);
    console.log(process.env.USERNAME);



    // const searchForRepo = await api.searchRepositories('another_repo_from_postman_class_emashrur', 'asc', '1');
    // expect(searchForRepo.total_count).to.equal(1);


  })

  /**
   * Graph Query Methods (Graph QL) -> Query Language
   * -> returns specified data without
   * -> flexible and efficient way to request 
   * 
   */

//   it("Verify user is able to delete repo", async () => {
//     const resp = await api.deleteRepo('emashrur', 'another_repo_from_postman_class_emashrur');

//     const searchForRepo = await api.searchRepositories('another_repo_from_postman_class_emashrur');
//     expect(searchForRepo.total_count).to.equal(0);
//   })

})
