# 🤝 BraynupAI Team Collaboration Guide

## 👥 Team Members & Responsibilities

- **Arshdeep**: Journey Section, Detail Modal, Course Cards
- **Member 2**: Hero Section, Header, Navigation  
- **Member 3**: Footer, Contact Form, Testimonials

## 📋 Daily Workflow (MUST FOLLOW!)

### Morning Routine (Before Starting Work)
```bash
git checkout main
git pull origin main
git checkout your-branch-name
git merge main
```

### During Work (Every 2-3 hours)
```bash
git add .
git commit -m "Clear description of changes"
git push origin your-branch-name
```

### Evening Routine (End of Day)
```bash
git add .
git commit -m "EOD: Summary of today's work"
git push origin your-branch-name
```

## 🚨 Emergency: Conflict Aaye Toh

### If Merge Conflict Happens
```bash
git status  # See which files have conflicts

# Open conflicted file in VS Code
# Look for these markers:
# <<<<<<< HEAD
# Your changes
# =======
# Their changes
# >>>>>>> branch-name

# Keep what you need, delete markers
# Then:
git add <fixed-file>
git commit -m "Resolved merge conflict in <file>"
git push
```

### If Accidentally Pushed to Main
```bash
# DON'T PANIC! Contact team immediately
# Git Master will fix it using:
git revert <commit-hash>
```

## ✅ Best Practices

1. **NEVER work directly on main branch**
2. **ALWAYS pull before starting work**
3. **Commit small, commit often**
4. **Write clear commit messages**
5. **Test before pushing**
6. **Communicate in group before merging**

## 📞 Emergency Contact

If code is broken or major conflict:
1. Stop work immediately
2. Message in WhatsApp group
3. Call Git Master: [Phone Number]
4. Don't force push without discussion

## 🔧 Useful Commands

```bash
# See your changes
git status
git diff

# Undo last commit (not pushed yet)
git reset --soft HEAD~1

# Discard local changes
git checkout -- <file>

# See who changed what
git log --oneline --graph --all

# Create backup before risky operation
cp -r project-folder project-folder-backup
```

## 🎯 File Ownership (Don't Edit Others' Files Without Permission)

- `src/pages/Home.jsx` - Arshdeep
- `src/components/Header.jsx` - Member 2
- `src/components/Footer.jsx` - Member 3
- `src/pages/Home.css` - **SHARED** - Coordinate before editing

## 📅 Weekly Sync

Every Sunday 8 PM:
- Code review call
- Merge all branches to main
- Plan next week's tasks
- Resolve any pending conflicts

---
**Remember**: Communication > Code. Always talk before making big changes!
