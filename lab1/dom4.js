import { EventEmitter } from "events";

const form = new EventEmitter();

form.on("submit", (name,password) =>{
    console.log("form submitted 😊");
    console.log(`user name: ${name}`);
    console.log(`user password: ${password}`);
});

form.emit("submit", "abc@abc.com", "1212422");