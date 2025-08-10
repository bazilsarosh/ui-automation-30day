const fs = require('fs');
const path = require('path');

const base = path.join(process.cwd(), 'playwright-report');
const KEEP = 5;

if (!fs.existsSync(base)) process.exit(0);

const dirs = fs.readdirSync(base)
  .map(d => ({ d, p: path.join(base, d) }))
  .filter(x => fs.statSync(x.p).isDirectory())
  .sort((a, b) => a.d.localeCompare(b.d));

const toDelete = dirs.slice(0, Math.max(0, dirs.length - KEEP));
for (const x of toDelete) {
  console.log('Deleting old report:', x.p);
  fs.rmSync(x.p, { recursive: true, force: true });
}
