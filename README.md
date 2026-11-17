# TapperPay Website

The marketing website for TapperPay, live at **https://tapperpay.org**. Built with Next.js 16.4.6 and Tailwind CSS.

This guide covers how to get the latest code, the routine to follow every time you work, and how to fix common git errors.

## Get the latest code

Open Terminal and run these in order. Each step says what you should see.

1. Go to the project folder (change the path to wherever you cloned it).

   ```bash
   cd ~/path/to/Tapperpay-website
   ```

2. One-time setup: tell git to combine changes by merging. This stops the "divergent branches" error later.

   ```bash
   git config pull.rebase false
   ```

3. Check for unsaved work.

   ```bash
   git status
   ```

   - It says `nothing to commit, working tree clean` → skip to step 5.
   - It lists files → do step 4 first.

4. Only if step 3 listed files: put your unfinished work aside safely.

   ```bash
   git stash -u
   ```

5. Switch to the main branch.

   ```bash
   git checkout main
   ```

6. Download the latest code. `--no-edit` stops git from opening a confusing text editor.

   ```bash
   git pull --no-edit origin main
   ```

   - If `package.json` or `package-lock.json` is in the list of changed files, the packages changed, so step 7 matters.

7. Install the packages. This uses the exact versions in `package-lock.json`.

   ```bash
   npm ci
   ```

   - It should end with `found 0 vulnerabilities`.

8. Check the Next.js version.

   ```bash
   npx next --version
   ```

   - It must print `Next.js v16.4.6`.

9. Only if you did step 4: bring your unfinished work back.

   ```bash
   git stash pop
   ```

10. Start the site and open http://localhost:3000 in your browser.

    ```bash
    npm run dev
    ```

## Every time you work

Pull before you start and again before you push. Most git problems come from skipping one of these.

**Before you start coding:**

```bash
git checkout main
git pull --no-edit origin main
```

If the pull lists `package.json` or `package-lock.json`, also run `npm ci`.

**When you finish and want to share your work:**

```bash
npm run build
git status
git add .
git commit -m "Short description of what you changed"
git pull --no-edit origin main
git push origin main
```

- `npm run build` must finish without errors before you push. If it fails, fix that first.
- `git status` shows what will be saved. Secret files (`.env`), `node_modules` and build folders are already ignored, so they won't be added.
- Pushing to GitHub does not update the live site at tapperpay.org. The project owner deploys it to Vercel.

## If something goes wrong

Find the message git showed you, then run the fix. If it still fails, stop and ask before trying anything else.

| Git says | What it means | Fix |
| --- | --- | --- |
| `Your local changes ... would be overwritten by merge` | You have unsaved changes the pull would overwrite | `git stash -u`, then pull again, then `git stash pop` |
| `! [rejected] main -> main (fetch first)` | Someone pushed since your last pull | `git pull --no-edit origin main`, then `git push origin main` |
| `Need to specify how to reconcile divergent branches` | The one-time setup (step 2) was skipped | `git config pull.rebase false`, then pull again |
| `CONFLICT (content): Merge conflict in ...` | You and someone else changed the same lines | `git merge --abort` puts everything back as before the pull. Then ask for help |
| A screen full of text opens and you can't type | Git opened the Vim editor for a message | Type `:wq` and press Enter |
| `npx next --version` doesn't show 16.4.6 | Old packages are still installed | Run `npm ci` again |

**Never run these unless a teammate tells you to.** They can permanently delete work, yours or other people's:

- `git push --force`
- `git reset --hard`
- `git clean -fd`
- `git checkout .`
