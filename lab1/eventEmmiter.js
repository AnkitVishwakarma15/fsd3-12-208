import { EventEmitter} from "node:events";

const logIn=(name) => {
console.log(`${name} logged in`);
};

logIn("ankit");

const start=()=>{
    console.log("system starts");
};

const working= (name) =>{
    console.log(`${name} add items to cart`);
};

const checkout = (name) => {
    console.log(`${name} logged out`);
};
start();
working("ankit");
checkout("ankit");


const task = new EventEmitter();
task.on("greeting", logIn);


task.emit("greet","ankit vishwakarma");