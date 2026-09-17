import http from "http";
const server = http.createServer();

server.on("request", (red,res) =>{
    res.write("hello from server");
    res.end();
});

server.listen(4444, () =>{
    console.log("server is running....");
})