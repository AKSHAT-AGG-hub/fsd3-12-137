import {EventEmitter} from "node:events";

const login = (name) => {
    console.log(`${name} logged in`)
};

const start = () => {
    console.log ("system starts");
};

const working = (name) => {
    console.log(`${name} adds added to cart`);
};

const checkout = (name) => {
    console.log(`${name} logged out`);
};

const task = new EventEmitter();
task.on("greet", login);

task.emit("greet", "akshat agarwal");

