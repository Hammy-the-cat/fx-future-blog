const http = require('http');
const https = require('https');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url);
  
  // Sanity API proxy
  if (parsedUrl.pathname.startsWith('/api/sanity')) {
    const sanityUrl = `https://sfth73fb.api.sanity.io${parsedUrl.pathname.replace('/api/sanity', '')}${parsedUrl.search || ''}`;
    console.log('Proxying to:', sanityUrl);
    
    const options = {
      method: req.method,
      headers: {
        'User-Agent': 'Blog-Proxy/1.0'
      }
    };

    https.get(sanityUrl, options, (apiRes) => {
      // Copy headers but remove some that can cause issues
      const headers = { ...apiRes.headers };
      delete headers['content-encoding'];
      delete headers['transfer-encoding'];
      
      res.writeHead(apiRes.statusCode, headers);
      apiRes.pipe(res);
    }).on('error', (err) => {
      console.error('Proxy error:', err);
      res.writeHead(500);
      res.end('Proxy error: ' + err.message);
    });
    
    return;
  }

  // Static file serving
  let filePath = parsedUrl.pathname === '/' ? '/simple-blog.html' : parsedUrl.pathname;
  const fullPath = path.join(__dirname, filePath);

  fs.readFile(fullPath, (err, data) => {
    if (err) {
      if (filePath === '/favicon.ico') {
        res.writeHead(204);
        res.end();
        return;
      }
      res.writeHead(404);
      res.end('Not found');
    } else {
      const ext = path.extname(filePath);
      const contentType = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.ico': 'image/x-icon'
      }[ext] || 'text/plain';
      
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

const PORT = 8081;
server.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});