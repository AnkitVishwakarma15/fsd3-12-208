import http from "http";

const server = http.createServer((req,res) =>{
    console.log("server hot by client");
    res.write("<h2>Hello client </h2>");
    res.end();
});

server.listen(4444,() => console.log("server is running ..."));