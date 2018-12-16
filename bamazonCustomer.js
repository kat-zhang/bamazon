
var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require("console.table");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  start();
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "startShopping",
      type: "list",
      message: "Would you like to start shopping",
      choices: ["YES", "NO"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.startShopping === "YES") {
        showProducts();
        console.log("----------------------------------------------");
        console.log("            AVAILABLE FOR PURCHASE            ");
        console.log("----------------------------------------------");
        console.log("");
      }
      else {
        console.log("Goodbye")
      }
    });
}

// function showProducts () {
//   connection.query("SELECT * FROM products", function (error, response){
//     for (var i = 0;  i < response.length; i++) {
    
//       console.table ([ 
//         {
//           ITEM_ID: response[i].item_id,
//           PRODUCT: response[i].product_name,
//           DEPARTMENT: response[i].department_name,
//           PRICE: response[i].price

//         }
//       ])

//     }
//   })
// }


