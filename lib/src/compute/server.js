function Server(client) {
  this._client = client;
}

module.exports = Server;

Server.prototype.list = function listServers(cb) {
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

Server.prototype.showDetails = function showDetails(server_id, cb) {
  return this._client
    .fetch(this._client.serverUrl + "/servers/" + server_id, {
      method: "GET",
      headers: { "X-Auth-Token": this._client.tokenId }
    })
    .then(res => res.json())
    .then(json => {
      if (cb) cb(json);
      else console.log(json);
    });
};

Server.prototype.create = function createServer(params, cb) {
  return this._client
    .fetch(this._client.serverUrl + "/servers", {
      method: "POST",
      body: JSON.stringify(params),
      headers: { "X-Auth-Token": this._client.tokenId }
    })
    .then(res => res.json())
    .then(json => {
      if (cb) cb(json);
      else console.log(json);
    });
};

Server.prototype.update = function updateServer(server_id, params, cb) {
  return this._client
    .fetch(this._client.serverUrl + "/servers/" + server_id, {
      method: "PUT",
      body: JSON.stringify(params),
      headers: { "X-Auth-Token": this._client.tokenId }
    })
    .then(res => res.json())
    .then(json => {
      if (cb) cb(json);
      else console.log(json);
    });
};

Server.prototype.delete = function deleteServer(server_id, cb) {
  return this._client
    .fetch(this._client.serverUrl + "/servers/" + server_id, {
      method: "DELETE",
      headers: { "X-Auth-Token": this._client.tokenId }
    })
    .then(res => res.status)
    .then(json => {
      if (cb) cb(json);
      else console.log(json);
    });
};
