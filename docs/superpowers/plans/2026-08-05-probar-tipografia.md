# Probar Tipografia Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Try Cormorant Garamond + Inter on the wedding invitation.

**Architecture:** This is a static typography change. `index.html` loads the selected Google Fonts; `styles.css` defines font variables and applies Cormorant Garamond to titles/large invitation copy and Inter to UI/body supporting text; `tests/links.test.mjs` verifies the font assets are referenced.

**Tech Stack:** HTML, CSS, Google Fonts, Node.js built-in test runner.

## Global Constraints

- Keep the campestre, minimalista, informal tone.
- Do not change content, links, or layout structure.
- Keep text readable on mobile.
- Use Cormorant Garamond for titles and expressive copy.
- Use Inter for interface, buttons, labels, cards, and supporting text.

---

### Task 1: Load And Apply Fonts

**Files:**
- Modify: `index.html`
- Modify: `styles.css`
- Modify: `tests/links.test.mjs`
- Create: `docs/superpowers/plans/2026-08-05-probar-tipografia.md`

**Interfaces:**
- Produces font variables: `--font-display`, `--font-ui`

- [ ] **Step 1: Write failing test**

```javascript
test('invitation loads the trial Google fonts', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

  assert.match(html, /family=Cormorant\+Garamond/);
  assert.match(html, /family=Inter/);
});
```

- [ ] **Step 2: Run failing test**

Run: `node --test tests/links.test.mjs`
Expected: FAIL because the font links are not present.

- [ ] **Step 3: Add font links and CSS variables**

Add Google Fonts preconnect and stylesheet links. Add `--font-display` and `--font-ui` variables.

- [ ] **Step 4: Apply typography**

Set body to Inter, headings and hero/intro copy to Cormorant Garamond, and keep buttons/cards/timeline details in Inter.

- [ ] **Step 5: Verify**

Run: `node --test tests/calendar.test.mjs tests/links.test.mjs`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add index.html styles.css tests/links.test.mjs docs/superpowers/plans/2026-08-05-probar-tipografia.md
git commit -m "Try Cormorant and Inter typography"
```
