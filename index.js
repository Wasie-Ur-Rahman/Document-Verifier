// connect to Moralis server
const serverUrl = "https://br8aiteeqnkc.usemoralis.com:2053/server";
const appId = "Jphppqdr2ecBO3SNhxbZf48FxhZrdgkr2urQRrdO";
Moralis.start({ serverUrl, appId });



async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate();
  }
  console.log("logged in user:", user);
}

// LOG OUT
async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}


// refresh stats
function getStats() {
  const user = Moralis.User.current();
  if (user) {
    getUserTransactions(user);
  }
  getAverageGasPrices();
}

// HISTORICAL TRANSACTIONS
async function getUserTransactions(user) {
  // create query
  const query = new Moralis.Query("EthTransactions");
  query.equalTo("from_address", user.get("ethAddress"));

  // subscribe to query updates
  const subscription = await query.subscribe();
  handleNewTransaction(subscription);

  // run query
  const results = await query.find();
  console.log("user transactions:", results);
}

// REAL-TIME TRANSACTIONS
async function handleNewTransaction(subscription) {
  // log each new transaction
  subscription.on("create", function (data) {
    console.log("new transaction: ", data);
  });
}

// CLOUD FUNCTION
async function getAverageGasPrices() {
  const results = await Moralis.Cloud.run("getAvgGas");
  console.log("average user gas prices:", results);
  renderGasStats(results);
}

function renderGasStats(data) {
  const container = document.getElementById("gas-stats");
  container.innerHTML = data
    .map(function (row) {
      return `<li>${Math.round(row.avgGas)} gwei</li>`;
    })
    .join("");
}

//get stats on page load
getStats();