import { EventEmitter } from "events";

const button = new EventEmitter();

button.on("click", (uname)=>{
    console.log(`button clicked by ${uname}`);
});

button.emit("click","Raju");
button.emit("click", "ankit");
button.emit("click", "rani");
button.emit("click");