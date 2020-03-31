const util = require("util");

function RackspaceError(message) {
  this.message = message;
}
util.inherits(RackspaceError, Error);

module.exports = { RackspaceError };
