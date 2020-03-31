const constants = require("./src/constants");
const { RackspaceError } = require("./src/error");

function createClient(options) {
  this._enforce(options, ["username", "apiKey", "region"]);
  this.username = options.username;
  this.apiKey = options.apiKey;
  this.region = options.region;
  this.authUrl = constants.DEFAULT_AUTH_URL;
  this.accessToken = undefined;
}

createClient.prototype._enforce = function(options, requiredKeys) {
  if (!options)
    throw new RackspaceError("Parameters for this call are undefined");
  requiredKeys.forEach(requiredKey => {
    if (!options[requiredKey])
      throw new RackspaceError("Missing required parameter: " + requiredKey);
  });
};

module.exports = {
  createClient: createClient
};
