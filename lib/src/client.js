const fetch = require("node-fetch");
const Server = require("./compute/server");

class Client {
  constructor(key) {
    this._fetch = fetch;
    this._key = key;
    return {
      getFetch: () => this._fetch,
      getKey: () => this._key,
      server: this.server
    };
  }

  server() {
    return new Server(this.getFetch(), this.getKey());
  }
}

module.exports = Client;
