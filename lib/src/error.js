class ApiKeyError extends Error {
  constructor(message) {
    super(message);
    this.name = "API Key Error";
    this.message = message;
  }
}

module.exports = { ApiKeyError };
