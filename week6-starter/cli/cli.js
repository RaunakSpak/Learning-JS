#!/usr/bin/env node
function parseArgs(argv) { const a = argv.slice(2), f = {}, p = []; for (let i = 0; i < a.length; i++) { const x = a[i]; if (x.startsWith('--')) { const eq = x.indexOf('='); if (eq !== -1) f[x.slice(2, eq)] = x.slice(eq + 1); else { const k = x.slice(2), n = a[i + 1]; if (n && !n.startsWith('-')) { f[k] = n; i++; } else f[k] = true; } } else p.push(x); } return { flags: f, positional: p }; }
function help() {
  console.log(`Usage:
  hello greet [--name <str>]
  hello sum <nums...>
  hello --help | --version`);
}
function version() { try { return require('./package.json').version || '0.0.0'; } catch { return '0.0.0'; } }
(async () => { const { flags, positional } = parseArgs(process.argv); if (flags.help || positional[0] === 'help' || positional.length === 0) return help(); if (flags.version) return console.log(version()); const cmd = positional[0]; if (cmd === 'greet') { const name = flags.name || positional[1] || 'world'; return console.log(`Hello, ${name}!`); } if (cmd === 'sum') { const nums = positional.slice(1).map(Number); if (!nums.length || nums.some(Number.isNaN)) { console.error('Provide numbers: hello sum 2 3 4'); process.exit(1); } return console.log(nums.reduce((a, b) => a + b, 0)); } console.error(`Unknown command: ${cmd}`); help(); process.exit(1); })().catch(e => { console.error(e); process.exit(1); });
