const Rackspace = require("../rackspace-node");

const client = new Rackspace.createClient({
  username: "your-rackspace-username",
  apiKey: "your-rackspace-api-key",
  region: "your-rackspace-region"
});

const server_id = "your-server-id";

const params = {
  server: {
    name: "new-service-name"
  }
};

client.authorize(done => {
  client.server.update(server_id, params, server => {
    console.log(server);
  });
});
