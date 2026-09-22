# Portfolio MCP (scaffold)

Expose Pulin Prabhu's portfolio knowledge base to agents via MCP.

## Data source

- Authoritative in-browser KB: `../assets/js/kb.js` (`window.KB`)
- Snapshot for servers: `kb.json` (generated)

Regenerate the snapshot:

```bash
node mcp/export-kb.js
```

## Planned tools

| Tool | Purpose |
|------|---------|
| `list_entries` | List KB ids/titles/tags (optional `type` / `tag` filter) |
| `get_entry` | Fetch one entry by id |
| `search_kb` | Simple full-text search over title/body/tag |
| `list_sections` | Human-site sections (about, work, toolkit, bag, …) |

## Planned resources

- `portfolio://kb` — full KB JSON
- `portfolio://kb/{id}` — single entry
- `portfolio://machine` — same content shape as Machine view markdown

## Status

Scaffold only. Wire a real MCP server (TypeScript `@modelcontextprotocol/sdk` or Python) when ready to connect Chat or external agents. No API keys live in this folder.
