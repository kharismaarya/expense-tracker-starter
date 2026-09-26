// PostToolUse hook: lint the .js/.jsx file Claude just wrote/edited.
// Exit 2 with ESLint output on stderr feeds the errors back to Claude.
import { spawnSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const input = JSON.parse(readFileSync(0, 'utf8'))
const file = input.tool_input?.file_path ?? input.tool_response?.filePath
if (!file || !/\.(js|jsx)$/.test(file) || /[\\/]node_modules[\\/]/.test(file)) process.exit(0)

const root = process.env.CLAUDE_PROJECT_DIR ?? process.cwd()
const eslint = join(root, 'node_modules', 'eslint', 'bin', 'eslint.js')
const res = spawnSync(process.execPath, [eslint, file], { cwd: root, encoding: 'utf8' })

if (res.status === 1) {
  process.stderr.write(`ESLint errors in ${file}:\n${res.stdout}${res.stderr}`)
  process.exit(2)
}
process.exit(0)
