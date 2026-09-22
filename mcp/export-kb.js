#!/usr/bin/env node
/**
 * Export assets/js/kb.js KB array to mcp/kb.json for MCP servers.
 * Run from repo root: node mcp/export-kb.js
 */
const fs = require('fs');
const path = require('path');
const kbPath = path.join(__dirname, '..', 'assets', 'js', 'kb.js');
const src = fs.readFileSync(kbPath, 'utf8');
const vm = require('vm');
const sandbox = { window: {}, console };
vm.createContext(sandbox);
// kb.js is an IIFE that assigns window.KB — execute it.
vm.runInContext(src + '\n;this.KB = window.KB;', sandbox);
const KB = sandbox.KB || sandbox.window.KB;
if (!Array.isArray(KB)) {
  console.error('Failed to extract KB array from kb.js');
  process.exit(1);
}
const out = path.join(__dirname, 'kb.json');
fs.writeFileSync(out, JSON.stringify({ generatedAt: new Date().toISOString(), count: KB.length, entries: KB }, null, 2));
console.log('Wrote', out, '(' + KB.length + ' entries)');
