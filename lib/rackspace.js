const fetch = require("node-fetch");
const Promise = require("bluebird");
const constants = require("./constants");
const { RackspaceError } = require("./error");

const resources = {
  Server: require("./src/compute/server")
};

function createClient(options) {
  this._enforce(options, ["username", "apiKey", "region"]);
  this.fetch = fetch;
  this.username = options.username;
  this.apiKey = options.apiKey;
  this.region = options.region;
  this.authUrl = constants.DEFAULT_AUTH_URL;
  this.tokenId = undefined;
  this.tenantId = undefined;
  this.serverUrl = undefined;
  this.resources = resources;
  this._initResources();
}

createClient.prototype._initResources = function _initResources() {
  for (var name in this.resources) {
    if ({}.hasOwnProperty.call(this.resources, name)) {
      this[name.toLowerCase()] = new resources[name](this);
    }
  }
};

createClient.prototype._enforce = function(options, requiredKeys) {
  if (!options)
    throw new RackspaceError("Parameters for this call are undefined");
  requiredKeys.forEach(requiredKey => {
    if (!options[requiredKey])
      throw new RackspaceError("Missing required parameter: " + requiredKey);
  });
};

createClient.prototype._checkForErrors = function(res) {
  if (res.ok) return res;
  else throw new RackspaceError(res.status + ": " + res.statusText);
};

createClient.prototype.authorize = function(cb) {
  const body = {
    auth: {
      "RAX-KSKEY:apiKeyCredentials": {
        username: this.username,
        apiKey: this.apiKey
      }
    }
  };
  this.fetch(this.authUrl + "/v2.0/tokens", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  })
    .then(this._checkForErrors)
    .then(res => res.json())
    .then(json => {
      if (cb) {
        this.tokenId = json.access.token.id;
        this.tenantId = json.access.token.tenant.id;
        this.serverUrl =
          "https://" +
          this.region.toLowerCase() +
          ".servers.api.rackspacecloud.com/v2/" +
          this.tenantId;
        cb({
          token_id: json.access.token.id,
          tenant_id: json.access.token.tenant.id
        });
      } else console.log("Rackspace: Authorization Successful!");
    })
    .catch(err => console.log(err));
};

module.exports = {
  createClient: createClient
};
