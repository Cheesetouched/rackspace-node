const Rackspace = require("../rackspace-node");

const client = new Rackspace.createClient({
  username: "your-rackspace-username",
  apiKey: "your-rackspace-api-key",
  region: "your-rackspace-region"
});

const server_id = "your-server-id";

client.authorize(done => {
  client.server.delete(server_id, server => {
    console.log(server);
  });
});
