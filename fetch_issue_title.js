const https = require('https');
https.get('https://api.github.com/repos/tscircuit/rp2040-zero/issues/2', { headers: { 'User-Agent': 'node' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(JSON.parse(data).title));
});
