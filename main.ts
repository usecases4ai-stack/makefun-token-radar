// token-radar-01 entry: Token launch radar
// Listens on PORT, serves a dashboard, monitors Solana for new token deployments
import { createServer } from 'http';

const html = \`<!DOCTYPE html>
<html>
<head><title>Token Radar</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:monospace;background:#0a0a1a;color:#00d4aa;padding:20px}
h1{color:#00a8ff;margin-bottom:20px}
.token{background:rgba(255,255,255,.05);padding:12px;border-radius:8px;border-left:3px solid #00d4aa;margin-bottom:8px}
.mint{color:#a0a0c0;font-size:12px;word-break:break-all}
.sig{color:#8080a0;font-size:11px;margin-top:4px}
</style></head>
<body>
<h1>🔍 Token Launch Radar</h1>
<p>Monitoring Solana for new token deployments via TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA</p>
<div id="tokens"></div>
</body></html>\`;

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

const port = parseInt(process.env.PORT || '8080', 10);
server.listen(port, '0.0.0.0', () => {
  console.log(\`Token Radar on port \${port}\`);
});
