const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  // if (url === "/") {
  //   res.setHeader("Content-Type", "text/html");
  //   res.write('<html>')
  //   res.write('<head><title>Hello</title></head>')
  //   res.write('<body><h1>This is my page</h1></body>')
  //   res.write('</head>')
  //   res.end();
  // }
   if(url==='/home'
  )
  {
    res.setHeader("Content-Type", "text/html");
    res.write('<html>')
    res.write('<head><title>Hello</title></head>')
    res.write('<body><h1>Welcome Home</h1></body>')
    res.write('</head>')
    return res.end();
  }
  else if(url==='/about'){
    res.setHeader("Content-Type", "text/html");
    res.write('<html>')
    res.write('<head><title>Hello</title></head>')
    res.write('<body><h1>About us</h1></body>')
    res.write('</head>')
    return res.end();
  }
  else if(url==='/node'){
    res.setHeader("Content-Type", "text/html");
    res.write('<html>')
    res.write('<head><title>Hello</title></head>')
    res.write('<body><h1>Welcome to node js</h1></body>')
    res.write('</head>')
    return res.end();
  }

});

server.listen(3000);
