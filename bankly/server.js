/** Server for bank.ly. */
require('dotenv').config();

console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_URI:", process.env.DB_URI);

const app = require("./app");

app.listen(3000, () => {
  console.log(`Server starting on port 3000`);
});
