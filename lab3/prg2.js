import http from "http"

const server = http.createServer((req,res) => {
    console.log("server hit by client");
    res.write("<h1>hello client welcome to my website </h1>");
    res.end();
});

server.listen(3333, () => console.log("server is running..."));