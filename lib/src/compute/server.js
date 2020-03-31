function Server(client) {
  this._client = client;
}

module.exports = Server;

Server.prototype.list = function list(cb) {
  return this._client
    .fetch(this._client.serverUrl + "/servers", {
      method: "GET",
      headers: { "X-Auth-Token": this._client.tokenId }
    })
    .then(res => res.json())
    .then(json => {
      if (cb) cb(json);
      else console.log(json);
    });
};
