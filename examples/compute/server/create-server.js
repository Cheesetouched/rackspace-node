const Rackspace = require("../rackspace-node");

const client = new Rackspace.createClient({
  username: "your-rackspace-username",
  apiKey: "your-rackspace-api-key",
  region: "your-rackspace-region"
});

const params = {
  server: {
    name: "api-test-server-1",
    imageRef: "c2c8edc1-c819-4554-8e7f-2bf8e76fb845",
    flavorRef: "2",
    metadata: {
      "My Server Name": "API Test Server 1"
    },
    networks: [
      {
        uuid: "00000000-0000-0000-0000-000000000000"
      },
      {
        uuid: "11111111-1111-1111-1111-111111111111"
      }
    ]
  }
};

client.authorize(done => {
  client.server.create(params, server => {
    console.log(server);
  });
});
