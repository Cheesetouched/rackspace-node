const fetch = require("node-fetch");
const Server = require("./compute/server");

class Client {
  constructor(username, apiKey, region, authUrl) {
    this._fetch = fetch;
    this._username = username;
    this._apiKey = apiKey;
    this._region = region;
    this._authUrl = authUrl;
    return {
      getFetch: () => this._fetch,
      getUsername: () => this._username,
      getApiKey: () => this._apiKey,
      getRegion: () => this._region,
      getAuthUrl: () => this._authUrl,
      server: this.server
    };
  }

  server() {
    return new Server(this.getFetch(), this.getUsername());
  }
}

module.exports = Client;
