# Adding subjects and units

Everything you study lives in `subjects/`. The app code in `js/` doesn't need to change.

```
subjects/
├── registry.js          ← the list of subjects (edit this when adding a subject or unit)
├── english/vocab.js     ← all vocab chapters
└── math3/unit4.js       ← one file per math unit
```

## Add a new math unit (e.g. Unit 5)

1. Create `subjects/math3/unit5.js`. Start from `templates/math-unit-template.js`.
2. In `subjects/registry.js`, add it to Honors Math 3's `files`:
   ```js
   files: ["subjects/math3/unit4.js", "subjects/math3/unit5.js"],
   ```
3. Upload both files. Done: Unit 5 shows up in the section dropdown, and "All units mixed" appears automatically.

## Add a new subject (e.g. AP World, Chem)

1. Pick the type:
   - **terms**: type the term from its definition / sentence / audio (vocab, AP World terms, bio terms)
   - **problems**: typed answers with hints, worked solutions, graphs (math, chem calculations)
2. Create the content file from a template:
   - terms → `templates/terms-template.js` (e.g. `subjects/apworld/unit1.js`)
   - problems → `templates/math-unit-template.js` (e.g. `subjects/chem/unit1.js`)
3. Add an entry to `subjects/registry.js` (there's a commented AP World example at the bottom).
4. Upload. The new subject button appears on the home screen.

**Don't rename a subject's `id` or a unit's `id` later.** Your saved scores and stats are stored under them.

## The easy way

Send Claude your notes/HW/review PDFs and say which subject and unit they're for. You'll get back
one new content file plus the one-line change to `registry.js`, with answers checked by `tools/verify.js`.

## Checking math answers (optional, needs Node)

```
node tools/verify.js
```
It checks every problem: simplified answers match the original, excluded values, limits,
asymptotes/holes/intercepts, and runs each Endless Drill generator 300 times.

## Where things are

| File | What it does |
|---|---|
| `index.html` | page layout |
| `css/app.css` | all styling (theme colors are the `--variables`) |
| `js/core.js` | saving, subject loading, home screen |
| `js/terms.js` | the vocab/terms quiz |
| `js/mathcore.js` | reads, checks and typesets math answers |
| `js/kit.js` | builders used by unit files (`k.simp`, `k.lim`, `k.ask`, …) |
| `js/problems.js` | the math/problems quiz, graphs, notes |
| `js/account.js` | settings, backup, accounts + leaderboard |
| `js/boot.js` | starts the app, offline support |
| `sw.js` | offline caching (add new files in `js/` here; subject files cache automatically) |
