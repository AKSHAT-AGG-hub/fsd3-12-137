import  readline  from 'readline/promises';
import {stdin,stdout} from 'process';



const main = async () => {
    let choice;
    const cin = readline.createInterface({ input:stdin, output:stdout });
    console.log("welcome to flipkart 😊");
    console.log("1..........Show cart");
    console.log("2..........add project");
    console.log("3..........remove product");
    console.log("4..........update quantity");
    console.log("5..........exit");
    choice = await cin.question("enter your choice");
    switch (choice) {
      case 1:
        console.log("show products");
        break;
      case 2:
        console.log("product added");
        break;
      case 3:
        console.log("remove product");
        break;
      case 4:
        console.log("update product quantity");
        break;
      case 5:
        console.log("see you later");
        break;
      default:
        console.log("invalid choice ! try again😡")
    }


};

main();
