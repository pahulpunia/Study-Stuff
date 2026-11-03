# Study Quiz: setup

## 1. GitHub Pages (the app)
Keep the folder structure (`css/`, `js/`, `subjects/`, …) exactly as it is in the repo.
**Settings → Pages → Deploy from a branch → main / (root) → Save**.
Open `https://pahulpunia.github.io/Study-Stuff/` in Safari → Share → **Add to Home Screen**.

To add content later, see ADDING-CONTENT.md. Usually it's one new file in `subjects/` plus a one-line change to `subjects/registry.js`.

## 2. Accounts + leaderboard (optional, free)
Everything works without this. The leaderboard just stays hidden.

1. Go to https://console.firebase.google.com → **Add project** (Analytics can be off).
2. **Build → Authentication → Get started → Sign-in method → Email/Password → Enable → Save.**
3. Still in Authentication: **Settings → Authorized domains → Add domain →** `YOURNAME.github.io`
4. **Build → Firestore Database → Create database** (production mode, any location).
5. In Firestore, **Rules** tab: delete what's there, paste all of `firestore.rules`, and tap **Publish**.
6. In Firestore, **Data** tab: **Start collection**
   - Collection ID: `config`
   - Document ID: `invite`
   - Field: `code` (type string), value: your club password (capitals matter)
7. **Project settings (gear) → General → Your apps → Web (</>)** → register the app (no hosting).
   Copy the `firebaseConfig` values into `firebase-config.js` like this:
   ```js
   window.FIREBASE_CONFIG = {
     apiKey: "...",
     authDomain: "....firebaseapp.com",
     projectId: "...",
     appId: "..."
   };
   ```
8. Upload the edited `firebase-config.js` to the repo.

In the app: **⚙️ Settings → Account & leaderboard → Create account** (username, password, club password).

Notes
- The club password lives only in your Firestore `config/invite` document. It isn't in any file in the repo.
- The Firebase "apiKey" is not a secret; it's normal for it to be public. The rules are what protect the data.
- To change the club password, edit `config/invite → code` in Firestore.
