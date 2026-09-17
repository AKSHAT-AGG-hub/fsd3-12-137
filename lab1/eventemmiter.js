import {EventEmitter} from "node:events";

const login = (name) => {
    console.log(`${name} logged in`)
};

const start = () => {
    console.log ("system starts");
};

const working = (name) => {
    console.log(`${name} item added to cart`);
};

const checkout = (name) => {
    console.log(`${name} logged out`);
};

const task = new EventEmitter();
task.once("greet", start);
task.on("greet", login);
task.on("greet", working);
task.on("greet", checkout);

task.once("exit", () => {
    console.log("system shutting down");
});

task.emit("greet", "aditya saxena");
task.emit("greet", "akshat agarwal");
task.emit("greet", "avinash rai");

