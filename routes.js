
const fs = require('fs');


const reqHandler=(req,res)=>{
    const url=req.url
    const method=req.method
if (url === "/") {
    fs.readFile("message.txt",{encoding:'utf-8'},(err,data)=>{
      if(err){
        console.log(err)
      }
      res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write(`<body>${data}</body>`)
    res.write('<body><form action="/message" method="POST"><label id="msg"></label><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('<script> document.getElementById("msg").value="message" </script>')
    res.write('</html>');
    return res.end();
    })
   
  }
  else if (url === '/message' && method === 'POST') {
    const body=[]
    req.on('data',(chunk)=>{
      body.push(chunk)
    })
    req.on('end',()=>{
      const parsed=Buffer.concat(body).toString()
      const message=parsed.split('=')[1]
      fs.writeFileSync('message.txt', message,(err)=>{
        if(err){
          console.log(err)
        }
      res.statusCode = 302;
      res.setHeader('Location', "/");
      return res.end();
      });
     
    })
  }
  else{
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
  }
}

module.exports=reqHandler