const request = require('request-promise');
const HOST = 'https://api.github.com';
require('dotenv').config();

class Api {
  constructor(host = HOST) {
    this.host = host;
    this.request = request.defaults({
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'PostmanRuntime/7.28.4',  
      },
      auth: {
        user: process.env.USERNAME,
        pass: process.env.SECRET_KEY
      },
      json: true,
      rejectUnauthorized: false,
    });
  }

  searchRepositories(q, order, per_page) {
    const path = `/search/repositories?q=${q}&order=${order}&per_page=${per_page}`;

    return this.request.get({
      url: `${this.host}${path}`
    });
  }

  getUserInfo(owner) {
    const path = `/users/${owner}`;

    return this.request.get({
      url: `${this.host}${path}`
    })

  }

  createNewRepo(repoName) {
    const path = `/user/repos`;

    return this.request.post({
      url: `${this.host}${path}`,
      body: {
        name: `${repoName}`
      }
    })
  }

  deleteRepo(owner, repoName) {
    const path = `/repos/${owner}/${repoName}`;

    return this.request.delete({
      url: `${this.host}${path}`
    })
  }



}

module.exports = Api;