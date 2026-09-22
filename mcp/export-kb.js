#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const kbPath = path.join(__dirname, '..', 'assets', 'js', 'kb.js');
const src = fs.readFileSync(kbPath, 'utf8');
const sandbox = { window: {}, console };
vm.createContext(sandbox);
vm.runInContext(src + '\n;this.KB = window.KB;', sandbox);
const KB = sandbox.KB || sandbox.window.KB;
if (!Array.isArray(KB)) { console.error('Failed to extract KB'); process.exit(1); }
const out = path.join(__dirname, 'kb.json');
fs.writeFileSync(out, JSON.stringify({ generatedAt: new Date().toISOString(), count: KB.length, entries: KB }, null, 2));
console.log('Wrote', out, '(' + KB.length + ' entries)');
