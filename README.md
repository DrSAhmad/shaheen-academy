# Shaheen Academy — Learn Without Limits

Free, mobile-first, installable PWA e-learning platform: Punjab Board school curriculum (Classes 1–12), MDCAT / ECAT / CSS test prep, and practical skills courses (web development, Python, freelancing, digital marketing).

- **Live site:** https://drsahmad.github.io/shaheen-academy/
- **Stack:** static HTML/CSS/JS — no backend, no build step. Works offline after first visit via service worker.
- **Progress:** XP, levels, daily streaks, per-course progress and printable completion certificates, all stored on-device (`localStorage`).

## Project layout

| Path | Purpose |
|---|---|
| `index.html` | App shell, loads data files then the engine |
| `styles.css` | Mobile-first emerald + gold theme |
| `app.js` | Hash router, quiz engine, XP/streaks, certificates, search |
| `data/school.js` | Class 9 (Punjab Board) |
| `data/school10.js` | Class 10 (Punjab Board) |
| `data/school-other.js` | Classes 1–8 & 11–12 structures + seeded lessons |
| `data/testprep.js` | MDCAT, ECAT, CSS |
| `data/skills.js` | Web dev, Python, freelancing, digital marketing |
| `manifest.json`, `sw.js`, `icons/` | PWA installability + offline |

## Content counts

- **82 courses · 628 chapters** (158 with full lessons, 470 honestly labelled "coming soon")
- **527 lessons · 2,098 MCQ questions** with explanations

## Honesty rules (do not break)

- Certificates are **internal completion awards only** — the site never claims board, university, HEC, or government accreditation (disclaimer printed on every certificate).
- `comingSoon: true` chapters must stay empty — never fake lessons.
- No personal email/phone numbers on public pages.
