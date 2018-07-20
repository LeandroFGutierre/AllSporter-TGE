const ganacheOptions = {
  accounts: [{balance: 1000000000000000000000, secretKey: process.env.PRIVATE_KEY}],
  gasLimit: 30000000,
  time: new Date()
};


const Ganache = require('ganache-core');
const server = Ganache.server(ganacheOptions);
(async () => {
  server.listen(process.env.GANACHE_PORT, (err, blockchain) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Ganache listening on port ${process.env.GANACHE_PORT}`);
    }
  });
})();
