
import { log } from "node:console";
import { EventEmitter} from "node:events";

const logIn=(name) => {
console.log(`${name} logged in`);
};



const start=()=>{
    console.log("system starts");
};

const working= (name) =>{
    console.log(`${name} add items to cart`);
};

const checkout = (name) => {
    console.log(`${name} logged out`);
};


// logIn("ankit");
// start();
// working("ankit");
// checkout("ankit");


const task = new EventEmitter();
task.once("greet", start);
task.on("greet", logIn);
task.on("greet", working);
task.on("greet", checkout );

task.once("exit", () =>{                     // without name function
    console.log("system shutting down");
});


task.emit("greet","vicky");
task.emit("greet","ankit vishwakarma");

task.off("greet", working);  // remove the working event 
task.emit("greet", "shyam");
task.emit("exit");