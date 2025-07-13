Here is the Git Push Workflow note in **Markdown format**:

````markdown
# 🚀 Git Commands to Push Code to a Particular Branch

## ✅ 1. Initialize Git (if not already initialized)
```bash
git init
````

---

## ✅ 2. Add Remote Repository

```bash
git remote add origin https://github.com/username/repo-name.git
```

> 🔍 Use `git remote -v` to verify the remote URL.

---

## ✅ 3. Add Files to Staging Area

```bash
git add .
```

> Adds all files. For specific files:
> `git add filename.txt`

---

## ✅ 4. Commit the Changes

```bash
git commit -m "Your commit message"
```

---

## ✅ 5. Push Code to a Particular Branch

```bash
git push origin branch-name
```

📌 Replace `branch-name` with your target branch name (e.g., `main`, `dev`, `feature-x`)

---

## ✅ Optional: Set Upstream for Easier Future Pushes

```bash
git push -u origin branch-name
```

> After this, you can simply use:

```bash
git push
```

```

You can copy and paste this directly into a `.md` file or a Markdown editor (like VS Code, Obsidian, or GitHub README). Let me know if you'd like this saved as a downloadable file.
```
