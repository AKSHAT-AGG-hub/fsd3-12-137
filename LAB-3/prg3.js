import http from "http"

const server = http.createServer((req,res) => {
    res.writeHead(200,{"content-type": "text/html"});
    res.end("<h2>HELLO CLIENT</h2>");
    console.log("server hit");
});

server.listen(5555,() => console.log("server is running..."));