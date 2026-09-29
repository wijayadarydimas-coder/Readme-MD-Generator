# README AI

Starter project for a modern AI-powered README.md generator.

## Current scope

- Next.js + TypeScript
- Tailwind CSS
- Dark/light theme
- GitHub repository URL UI
- Gemini/OpenAI/DeepSeek provider selector
- Model selector
- Markdown editor and preview
- README.md download
- Settings page
- Private `.env.local` preparation

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Environment

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

The API keys are intentionally unused in this starter. We will connect them on the server in the next phase.

## Important

Never commit `.env.local` or private API keys to GitHub.
