const { ApiKeyError } = require("./src/error");
const Client = require("./src/client");

module.exports = {
  client: key => _instantiateClient(key)
};

function _instantiateClient(key) {
  if (key === undefined || key === null || key === "") {
    throw new ApiKeyError("Rackspace API Key Not Provided");
  } else {
    return new Client(key);
  }
}
