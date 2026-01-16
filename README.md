# Swarm Telemetry

This branch is a write-only sink for agent usage statistics.

## Format
Agents should commit JSON files to stats/{agent_id}/{timestamp}.json.

json
{
"skill_id": "bithub.file-io",
"success": true,
"runtime_ms": 45,
"agent_version": "1.0.0"
}

