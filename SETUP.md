# Flash Card App: Manual Setup

Recreates this project from an empty folder. Requires Node 18+ and npm.

## 1. Create the folder and initialize git

```bash
mkdir flashCard && cd flashCard
git init
```

## 2. Create the files

Create each file below with the exact contents from this repo's history. Each file was committed on its own, so the contents are available with `git show`, for example `git show d988b2e:package.json`. Or run `git clone` on this repo and skip to step 3.

| File | Commit |
| --- | --- |
| `.gitignore` | 69f4d71 |
| `package.json` | d988b2e |
| `package-lock.json` | 06696ee |
| `vite.config.js` | 7f8add2 |
| `index.html` | 5da20e2 |
| `src/cards.js` | e5ad74f |
| `src/main.jsx` | 5ab1cce |
| `src/components/FlashCard.jsx` | 95b055f |
| `src/components/ProgressBar.jsx` | e3849f4 |
| `src/App.jsx` | c99bcdf |
| `src/index.css` | 9036d51 |

Commit hashes are from the original history. Your hashes will differ if you commit again.

## 3. Install dependencies

```bash
npm install
```

This installs React 18.3.1, Vite 5.4.11, and `@vitejs/plugin-react` 4.3.4, pinned in `package.json`.

## 4. Run the app

```bash
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## 5. Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it with `npm run preview`.

## Adding cards

Edit the `cards` array in `src/cards.js`. Each entry is `{ question, answer }`.
