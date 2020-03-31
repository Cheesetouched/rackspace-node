const Rackspace = require("../rackspace-node");

const client = new Rackspace.createClient({
  username: "your-rackspace-username",
  apiKey: "your-rackspace-api-key",
  region: "your-rackspace-region"
});

client.authorize(done => {
  client.server.list(servers => {
    console.log(servers);
  });
});
