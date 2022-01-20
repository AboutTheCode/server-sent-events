const http = require('http');

let i = 0;
http.createServer(function(req, res) {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Access-Control-Allow-Origin', '*');
  console.info('test');
  res.write('data: test\n\n');
  setInterval(() => {
    res.write(`id: ${i++}\n`)
    res.write(`event: test\n`)
    res.write('data: test\n\n')
  }, 1000);
}).listen(8080);

console.info('Listen...')

