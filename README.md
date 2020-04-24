# rackspace-node
🚀 Unofficial Node.js SDK for Rackspace Cloud Servers API v2.0 

## Status
The SDK is still in ```alpha``` stage of development and not at all production ready. I am still playing around with the original documentation and doing a lotta hit 'n trial. Feel free to clone/fork and join in. [Create an issue](https://github.com/Cheesetouched/rackspace-node/issues) or [drop a PR](#contributing), if you feel something is wrong or could be done in a better way. Happy to take 'em all up! :v:

## Installation
```
git clone https://github.com/Cheesetouched/rackspace-node.git
```

## Usage

All rackspace resources are accessed via an instance of the client. It is important to authorize the client first, like shown below. On successful authorization, your token_id & tenant_id gets saved in the client object and is used wherever necessary, automagically. So no need to repeat authorization before each call. :relieved:

```js
const Rackspace = require('../rackspace-node');

const client = new Rackspace.createClient({
    username: 'your-rackspace-username',
    apiKey: 'your-rackspace-api-key',
    region: 'your-rackspace-region'
});

client.authorize(done => {
    client.server.list(servers => {
        console.log(servers);
    });
});
```
**NOTE:** ```console.log(done)``` above to retrieve your token_id & tenant_id if you wish.

### Callback arguments

Every resource method accepts an optional callback as the last argument. If the callback argument is provided, it gets populated with the response. Otherwise, the response gets logged.

```js
// Response gets logged
client.server.list();
```

```js
// Response is in 'servers'
client.server.list((servers) => {
    // Do your thing here
});
```

### Error handling

All errors are thrown by a custom handler called RackspaceError.

**Error Format:** [RackspaceError: *Error Message*]

### General request

**Format:** client.**resource**.***method()***

**Example:**
client.**server**.***list()***

All resources, along with the methods names are given below. :point_down:

## All Resources & Methods

All given resources and methods correspond to the resources and methods given in [Rackspace Cloud Servers API v2.0](https://developer.rackspace.com/docs). Some of the methods expect custom parameters as a JavaScript object, e.g. ```{ key: 'value' }```, where the keys and values also correspond to the same in Rackspace documentation.

These are the resources that are currently available in this SDK. Each method operation has an example attached to it. If you're confused, check those out for a better picture. I'll be adding more resources and examples eventually. Keep an eye out. :eyes:
* [Cloud Servers](#cloud-servers)

### Cloud Servers
```js
client.authorize(done => {
    client.server;
});
```
* [```client.server.list([callback])```](https://github.com/Cheesetouched/rackspace-node/blob/master/examples/compute/server/list-all-servers.js)
* [```client.server.create(params, [callback])```](https://github.com/Cheesetouched/rackspace-node/blob/master/examples/compute/server/create-server.js)
* [```client.server.delete(server_id, [callback])```](https://github.com/Cheesetouched/rackspace-node/blob/master/examples/compute/server/delete-server.js)
* [```client.server.showDetails(server_id, [callback])```](https://github.com/Cheesetouched/rackspace-node/blob/master/examples/compute/server/show-server-details.js)
* [```client.server.update(server_id, params, [callback])```](https://github.com/Cheesetouched/rackspace-node/blob/master/examples/compute/server/update-server.js)

## Contributing
1. Fork this repository
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a pull request

## Fin
That's all folks! :heart:
