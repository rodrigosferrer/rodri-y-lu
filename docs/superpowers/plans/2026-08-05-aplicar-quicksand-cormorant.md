# Aplicar Quicksand Cormorant Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the selected Quicksand + Cormorant Garamond typography to the main wedding invitation.

**Architecture:** Keep the existing static site structure. Update `index.html` to load Quicksand and Cormorant Garamond, update `styles.css` font variables so headings use Quicksand and supporting/body text uses Cormorant Garamond, and update the static test that checks selected fonts.

**Tech Stack:** HTML, CSS, Google Fonts, Node.js built-in test runner.

## Global Constraints

- Do not change invitation content, links, calendar behavior, or layout structure.
- Apply the selected font combination from `fuentes.html`: Quicksand + Cormorant Garamond.
- Keep the page readable on mobile.
- Keep `fuentes.html` available for comparison.

---

### Task 1: Apply Selected Fonts

**Files:**
- Modify: `index.html`
- Modify: `styles.css`
- Modify: `tests/links.test.mjs`
- Create: `docs/superpowers/plans/2026-08-05-aplicar-quicksand-cormorant.md`

**Interfaces:**
- Produces font variables: `--font-display: Quicksand`, `--font-ui: Cormorant Garamond`

- [ ] **Step 1: Write failing test**

Update `tests/links.test.mjs` so the invitation font test expects `family=Quicksand` and `family=Cormorant+Garamond`.

- [ ] **Step 2: Run failing test**

Run: `node --test tests/links.test.mjs`
Expected: FAIL because `index.html` does not yet load Quicksand.

- [ ] **Step 3: Update font links and CSS variables**

Change the Google Fonts URL in `index.html` and update `--font-display` / `--font-ui` in `styles.css`.

- [ ] **Step 4: Verify**

Run: `node --test tests/calendar.test.mjs tests/links.test.mjs`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css tests/links.test.mjs docs/superpowers/plans/2026-08-05-aplicar-quicksand-cormorant.md
git commit -m "Apply Quicksand and Cormorant typography"
```
