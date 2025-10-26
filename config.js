const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "O4w1mDKZ#ZfscVi3TniZj6uhlICzhFkLC4lAwXgT_xZFWezJT5k8",
  MONGODB: process.env.MONGODB || "mongodb://mongo:TtJesNveuNmqfYXbvAxYorkeFqTxQkKn@gondola.proxy.rlwy.net:52279",
  OWNER_NUM: process.env.OWNER_NUM || "94704206946",
};
