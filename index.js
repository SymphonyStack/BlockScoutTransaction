import axios from "axios";

const args = process.argv.slice(2);
const address = [args[0]];

const run = () => {
  axios
    .get(`https://eth.blockscout.com/api/v2/addresses/${address}/transactions`)
    .then(res => {
      let transactions = [];
      for (let item of res.data.items) {
        transactions.push(item.hash);
      }
      console.log(
        "##",
        JSON.stringify({ transactions: transactions.join(", ") }),
        "##",
      );
    });
};
run();
