class Server {
  constructor(fetch, key) {
    this._fetch = fetch;
    this._key = key;
    return {
      retrieveServer: this.retrieveServer
    };
  }

  retrieveServer() {
    return {
      success: true,
      message: "Server Retrieved"
    };
  }
}

module.exports = Server;
