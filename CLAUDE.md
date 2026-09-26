# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

This is a training starter for a Claude Code course. It **intentionally** contains a bug, poor UI, and messy code. Do not fix, refactor, or restyle any of it unless explicitly asked — keep changes scoped to the request, even when you notice other problems.

## Stack & commands

- React 19 + Vite 7, plain JavaScript (JSX), npm. The whole app currently lives in `src/App.jsx`.
- `npm run dev` — dev server at http://localhost:5173
- There is no test suite. Verify changes with `npm run lint` and `npm run build`.

## Git

- Use Conventional Commits (`feat:`, `fix:`, `refactor:`, `style:`, `chore:`).
