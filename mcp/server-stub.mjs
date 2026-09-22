#!/usr/bin/env node
/**
 * Minimal MCP-shaped stub (documentation runtime).
 * Not a full SDK server yet — prints available tools and answers list/get/search over stdin JSON lines.
 *
 * Usage:
 *   node mcp/export-kb.js
 *   node mcp/server-stub.mjs
 *   then send: {"method":"tools/list"}
 *            {"method":"tools/call","params":{"name":"search_kb","arguments":{"q":"MCP"}}}
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const kbPath = path.join(__dirname, 'kb.json');
if (!fs.existsSync(kbPath)) {
  console.error('Missing kb.json — run: node mcp/export-kb.js');
  process.exit(1);
}
const db = JSON.parse(fs.readFileSync(kbPath, 'utf8'));
const entries = db.entries || [];

const tools = [
  { name: 'list_entries', description: 'List portfolio KB entries', inputSchema: { type: 'object', properties: { type: { type: 'string' }, tag: { type: 'string' } } } },
  { name: 'get_entry', description: 'Get one KB entry by id', inputSchema: { type: 'object', properties: { id: { type: 'string' } }, required: ['id'] } },
  { name: 'search_kb', description: 'Full-text search over KB', inputSchema: { type: 'object', properties: { q: { type: 'string' } }, required: ['q'] } },
];

function handle(msg) {
  if (msg.method === 'tools/list') return { tools };
  if (msg.method === 'tools/call') {
    const name = msg.params?.name;
    const args = msg.params?.arguments || {};
    if (name === 'list_entries') {
      let out = entries;
      if (args.type) out = out.filter(e => e.type === args.type);
      if (args.tag) out = out.filter(e => String(e.tag || '').includes(args.tag));
      return { content: [{ type: 'text', text: JSON.stringify(out.map(e => ({ id: e.id, title: e.title, tag: e.tag, type: e.type })), null, 2) }] };
    }
    if (name === 'get_entry') {
      const e = entries.find(x => x.id === args.id);
      return { content: [{ type: 'text', text: e ? JSON.stringify(e, null, 2) : 'not found' }] };
    }
    if (name === 'search_kb') {
      const q = String(args.q || '').toLowerCase();
      const hits = entries.filter(e => JSON.stringify(e).toLowerCase().includes(q)).slice(0, 25);
      return { content: [{ type: 'text', text: JSON.stringify(hits, null, 2) }] };
    }
    return { error: 'unknown tool' };
  }
  return { error: 'unknown method' };
}

console.error('portfolio-mcp stub ready (' + entries.length + ' entries). Send JSON lines on stdin.');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });
rl.on('line', line => {
  line = line.trim();
  if (!line) return;
  try {
    const res = handle(JSON.parse(line));
    process.stdout.write(JSON.stringify(res) + '\n');
  } catch (err) {
    process.stdout.write(JSON.stringify({ error: String(err) }) + '\n');
  }
});
