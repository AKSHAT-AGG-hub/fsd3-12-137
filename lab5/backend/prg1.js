import express from "express";
const app = express();

app.get("/", (req, res) => {
    //res.send("Hello Express");
    //res.send("<h1>HELLO EXPRESS</h1>");
    res.send{`
        <h1>HELLO server</h1>
        <h2>i am responding from express framework</h2>
        <h3>the code is minimal and easy to return</h3>
    `};
});

app.get("/about", (req, res) => {
    res.send("<h2>About Page</h2>");
});

app.get("/products", (req, res) => {
    const products = [
        {id: 1, name: "Product 1", price: 100},
        {id: 2, name: "Product 2", price: 200},
        {id: 3, name: "Product 3", price: 300}
    ];
    res.send(products);
});

//this line must be last line 
app.listen(4444, () =>console.log("Server is running on port 4444"));