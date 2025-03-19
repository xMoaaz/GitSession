// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     console.log(req.method  );
//     console.log(req.headers);

//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<h2 style="font-family: sans-serif">Hallo From Node</h2>');
//     res.write('</html>');
//     res.end();
// })

// server.listen(3000);

const fs = require('fs');

const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<form action="/test" method="POST"><h1>Form</h1><input type"text" name="userMsg" /><button type="submit">Submit</button></form>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/test' && method === 'POST') {
        // receive reqest
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        res.on('end', () => {
            const parsedBody = Buffer.concat(body)   
        })
        // res.setHeader('Location', '/');
        // res.statusCode = 302;
        res.writeHead(302, {'Location': '/'});
        fs.writeFileSync('msg.txt', 'Dummy Text');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hallo From Node js</h1>');
    res.end();
});

server.listen(3000);