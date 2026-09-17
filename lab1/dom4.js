import { EventEmitter } from "events";

const form = new EventEmitter();

form.on("submit", (uname, password) => {
    console.log("form submitted");
    console.log(`user name: ${uname}`);
    console.log(`user password: ${password}`);
});

form.emit("submit", "akshat.agg2008@gmail.com", "8595101030🔢");