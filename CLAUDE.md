# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

This is a training starter for a Claude Code course. It **intentionally** contains a bug, poor UI, and messy code. Do not fix, refactor, or restyle any of it unless explicitly asked — keep changes scoped to the request, even when you notice other problems.

## Stack & commands

- React 19 + Vite 7, plain JavaScript (JSX), npm.
- `npm run dev` — dev server at http://localhost:5173
- There is no test suite. Verify changes with `npm run lint` and `npm run build`.

## Architecture

- `App.jsx` owns the `transactions` state (in-memory only, no persistence) and the `categories` list, and passes them down as props to:
  - `Summary` — derives income/expense/balance totals from `transactions`.
  - `TransactionForm` — owns its own input state; calls `onAdd(transaction)` on submit.
  - `TransactionList` — owns the type/category filter state and renders the table.
- Transaction `amount` is always a number — convert form input with `Number()` before storing.
- Components are flat in `src/` (one default-exported function component per file); all styles live in `App.css`.

## Git

- Use Conventional Commits (`feat:`, `fix:`, `refactor:`, `style:`, `chore:`).
