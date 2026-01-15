const crypto = require('crypto');
const https = require('https');

async function fetchSkill(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
        const parts = body.split('\n---\n');
        if (parts.length < 2) return reject(new Error('Invalid skill format'));
        
        const frontMatter = parts[0];
        const code = parts.slice(1).join('\n---\n');
        
        const hash = crypto.createHash('sha256').update(code).digest('hex');
        const declaredMatch = frontMatter.match(/hash: sha256:([a-f0-9]+)/);
        
        if (!declaredMatch || hash !== declaredMatch[1]) {
          return reject(new Error('Hash mismatch'));
        }
        resolve(code);
      });
    }).on('error', reject);
  });
}
