# 🚀 BraynupAI - Team Git Workflow

## 🎯 Golden Rules

1. **NEVER directly work on `main` branch**
2. **ALWAYS create your own feature branch**
3. **Pull main before starting work**
4. **Commit often with clear messages**
5. **Use Pull Requests for merging to main**

---

## 📋 Daily Workflow

### Morning Routine ☀️

```bash
# Step 1: Update main branch
git checkout main
git pull origin main

# Step 2: Go to your feature branch (or create new)
git checkout -b yourname-feature-name
# OR if branch exists:
git checkout yourname-feature-name

# Step 3: Merge latest main into your branch
git merge main

# Step 4: Start working!
```

### During Work 💻

```bash
# Save your work frequently (every 1-2 hours)
git add .
git commit -m "Clear description of what you did"
git push origin yourname-feature-name
```

### End of Day 🌙

```bash
# Final commit
git add .
git commit -m "EOD: Summary of today's work"
git push origin yourname-feature-name
```

---

## 🌿 Current Branches

### Main Branches
- **`main`** - Production-ready code (DON'T TOUCH DIRECTLY!)

### Feature Branches
- **`arshdeep-journey-feature`** - Learning Journey section with modal (Arshdeep)
- **`member2-hero-section`** - Hero section updates (Member 2) - TO BE CREATED
- **`member3-footer`** - Footer redesign (Member 3) - TO BE CREATED

---

## 🔀 How To Merge Your Work

### Method 1: Pull Request (RECOMMENDED)

1. Push your branch to GitHub
2. Go to https://github.com/imranpreet/braynupai
3. Click "Pull requests" → "New pull request"
4. Select: Base: `main` ← Compare: `your-branch`
5. Add description of your changes
6. Click "Create pull request"
7. Team reviews and approves
8. Click "Merge pull request"
9. Done! ✅

### Method 2: Command Line (ADVANCED)

```bash
git checkout main
git pull origin main
git merge your-branch-name
git push origin main
```

---

## 🚨 Handling Conflicts

If you see merge conflict messages:

```bash
# Step 1: See which files have conflicts
git status

# Step 2: Open conflicted files in VS Code
# Look for these markers:
# <<<<<<< HEAD (your changes)
# =======
# >>>>>>> branch-name (their changes)

# Step 3: Decide what to keep (manual editing)

# Step 4: Mark as resolved
git add <fixed-file>

# Step 5: Complete the merge
git commit -m "Resolved merge conflicts"
git push
```

---

## ⚠️ Emergency Procedures

### If You Accidentally Pushed to Main

```bash
# DON'T PANIC!
# Message team immediately in WhatsApp group
# Then:
git revert <commit-hash>
git push origin main
```

### If You Need to Undo Last Commit (Not Pushed Yet)

```bash
git reset --soft HEAD~1  # Keeps your changes
# OR
git reset --hard HEAD~1  # Deletes your changes (CAREFUL!)
```

### If Main Branch is Broken

```bash
# Message in group immediately
# Git Master will fix using:
git checkout main
git reset --hard <last-good-commit-hash>
git push --force origin main
```

---

## 📞 Team Contacts

- **Git Master**: Arshdeep (responsible for main branch)
- **Member 2**: [Name] - Hero Section
- **Member 3**: [Name] - Footer Section

---

## 📅 Weekly Sync Schedule

**Every Sunday 8 PM**:
- Video call for code review
- Merge all approved branches to main
- Plan next week's tasks
- Resolve any pending issues

---

## ✅ Checklist Before Merging to Main

- [ ] Code is tested and working
- [ ] No console errors
- [ ] Responsive design works
- [ ] Team has reviewed your PR
- [ ] No merge conflicts
- [ ] Commit messages are clear

---

## 💡 Useful Commands

```bash
# See current branch
git branch

# See all branches (local + remote)
git branch -a

# Switch to different branch
git checkout branch-name

# See your changes
git status
git diff

# See commit history
git log --oneline --graph --all

# Stash changes temporarily
git stash
git stash pop

# Delete local branch
git branch -d branch-name

# Update branch list from remote
git fetch --prune
```

---

## 🎓 Learning Resources

- Git Basics: https://git-scm.com/book/en/v2
- GitHub Flow: https://guides.github.com/introduction/flow/
- Resolving Conflicts: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts

---

**Remember**: When in doubt, ask in the group! Better to ask than break the code 😊
