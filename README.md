# Portfolio — Farhod

React (Vite) + Tailwind CSS + Framer Motion + React Router + Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Framework preset: **Vite**. Build command `npm run build`, output dir `dist`. No env vars required.
4. Deploy.

## Editing content

- Hero copy / typing words: `src/pages/Home.jsx`
- About bento grid / skills: `src/pages/About.jsx`
- Projects list: `src/pages/Projects.jsx` (`projects` array)
- Colors / fonts / animation tokens: `tailwind.config.js`

## ⚠️ Telegram bot token

`src/components/ContactForm.jsx` calls the Telegram Bot API directly from the
browser with the bot token hard-coded in the client bundle. That means
**anyone who opens devtools or views the bundled JS can read your bot
token** and use it to send messages as your bot.

This is fine for a quick personal project, but before sharing this repo
publicly or if you care about the token, move the request behind a
serverless function instead:

1. Create `api/contact.js` (a Vercel serverless function).
2. Move the `fetch` call there, reading `BOT_TOKEN` from a Vercel
   environment variable (`process.env.BOT_TOKEN`) instead of hard-coding it.
3. In `ContactForm.jsx`, `fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })`
   instead of calling `api.telegram.org` directly.

This keeps the token server-side only.
# portfoliyo-2
