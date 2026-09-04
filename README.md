# Fitness AI Frontend — Milestone 4

React (Vite) frontend for the explainable AI-powered strength training
recommendation system. Talks to the FastAPI backend from Milestones 1-3.

## What's here

```
fitness-ai-frontend/
├── src/
│   ├── App.jsx              # main flow: form -> loading -> result
│   ├── api.js                # fetch calls to the backend
│   ├── index.css             # all styling (design tokens at the top)
│   └── components/
│       ├── ProfileForm.jsx   # goal/experience/equipment form
│       ├── ProgrammeView.jsx # displays the generated programme
│       └── ExerciseCard.jsx  # one exercise, with the "Why?" toggle
├── index.html
├── package.json
└── vite.config.js
```

## Setup (not tested in the sandbox this was built in — no internet there)

**Prerequisite: your backend must already be running** (Milestones 1-3),
normally at `http://127.0.0.1:8000` — this frontend expects that exact
address (see the `BASE_URL` constant in `src/api.js`).

1. **Install dependencies:**
   ```bash
   cd fitness-ai-frontend
   npm install
   ```

2. **Run the dev server:**
   ```bash
   npm run dev
   ```

3. **Open the app:** the terminal will print a URL, normally
   `http://localhost:5173` — open that in your browser.

## How it works

1. User fills in email + goal + experience + equipment, clicks
   "Generate my programme"
2. The app creates a user, attaches a profile, then asks the backend to
   generate a programme (this is the same flow you tested in Swagger —
   `POST /users/`, `POST /users/{id}/profile/`, `POST /users/{id}/programmes/`)
3. Each recommended exercise appears as a card with sets/reps; clicking
   "Why this exercise?" reveals the AI-generated explanation

## Design notes (for your dissertation)

- **The "Why this exercise?" toggle is the signature interaction.** It's
  deliberately click-to-reveal rather than always-visible, so a future
  usability study can literally measure engagement with explanations
  (does the person click it? how often?) alongside the trust/quality
  survey questions from Section 2.4 of your report.
- **No real authentication** — a random password is generated automatically
  on submit. This app is a research prototype for testing recommendations
  and explanations, not a production login system, so building real auth
  would be effort spent outside the actual research question.
- **Hardcoded backend URL** (`http://127.0.0.1:8000`) — fine for local
  testing and your AE3 demo. If you ever deploy this somewhere, that
  constant in `src/api.js` is the one place to change.

## Troubleshooting

- **"Failed to fetch" errors:** make sure the backend (`uvicorn`) is
  actually running first, in a separate terminal.
- **CORS errors in the browser console:** the backend's `main.py` already
  allows `http://localhost:5173` — if you changed the frontend's port,
  add the new one to `allow_origins` in `app/main.py` and restart uvicorn.
