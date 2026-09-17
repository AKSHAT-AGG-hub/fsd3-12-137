//DOM->DOCUMENT OBJECT MODEL
import { EventEmitter } from "events";

const button = new EventEmitter();
 button.on("click", () => {
    console.log("Button clicked");
 });

 button.emit("click");