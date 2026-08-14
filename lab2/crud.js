import  readline  from "readline/promises";
import {stdin,stdout} from "process";

const main = async()=>{
    let choice;
    const cin = readline.createInterface({input:stdin,output:stdout});
    do{
console.log("Welcome to flipkart 🎁");
console.log("1.....show cart");
console.log("2.....add to cart");
console.log("3.....remove from cart");
console.log("4.....Update Quantity");
console.log("5.....Exit");
choice = await cin.question("Enter your choice: ");
switch(choice){
    case 1:
        console.log("show products");
        break;
    case 2:
        console.log("add products");
        break;
    case 3:
        console.log("remove products");
        break;
    case 4:
        console.log("update products quantity");
        break;
    case 5:
        console.log("See you later");
        break;
    default:
        console.log("Invalid choice! try again🌹🌹");
        break;
}
    }while(choice != 5);
cin.close();
};
main();