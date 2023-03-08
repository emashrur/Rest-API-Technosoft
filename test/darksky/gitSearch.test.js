const { expect } = require("chai");
const { it } = require("mocha");
const Api = require("../../src/api");
let api;

describe("User verifies focast scenarios", async () => {
  before(async () => {
    //Actions to perform before each tests
    api = new Api();
  });
  after(async () => {
    //Actions to perform after each tests
  });

  it("can verify search repositories", async () => {
    const resp = await api.searchRepositories("postman", "asc", "1");
    // console.log(
    //     '\x1b[36m### Resp: %s\x1b[0m',
    //     JSON.stringify(resp, null, 2)
    //   );

    expect(resp.total_count).to.be.greaterThan(32550);
    expect(resp.incomplete_results).to.be.false;
    expect(resp.items).to.be.an("array");
    expect(resp.items[0].node_id).to.equal("MDEwOlJlcG9zaXRvcnkyNjU3ODI5NzM=");
  });

  it("Verify topics array to have 2 values and values should be [chinese, postman]", async () => {
    const resp = await api.searchRepositories("postman", "asc", "1");

    expect(resp.items[0].topics, "not an array").to.be.an("array");
    expect(resp.items[0].topics, "incorrect length").to.have.lengthOf(2);

    const expectedTopics = ["chinese", "postman"];
    expect(resp.items[0].topics, 'unexpected "topic" values').to.deep.equal(
      expectedTopics
    );
  });

  it("Can verify user login details", async () => {
    const resp = await api.getUserInfo("emashrur");

    expect(resp.login).to.equal("emashrur");
    expect(resp.id).to.equal(108186751);
  });
});
