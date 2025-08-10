const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const base = path.join(process.cwd(), 'playwright-report');
if (!fs.existsSync(base)) {
  console.error('No report folder found. Run tests first: npx playwright test');
  process.exit(1);
}

const dirs = fs.readdirSync(base)
  .map(d => ({ d, p: path.join(base, d) }))
  .filter(x => fs.statSync(x.p).isDirectory())
  .sort((a, b) => a.d.localeCompare(b.d)); // ISO timestamps sort lexically

if (dirs.length === 0) {
  console.error('No reports found inside playwright-report.');
  process.exit(1);
}

const latest = dirs[dirs.length - 1].p;
console.log('Opening latest report:', latest);

const child = spawn('npx', ['playwright', 'show-report', latest], { stdio: 'inherit', shell: true });
child.on('exit', code => process.exit(code));
