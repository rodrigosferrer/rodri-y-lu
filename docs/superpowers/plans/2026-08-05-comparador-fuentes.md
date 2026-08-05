# Comparador Fuentes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a separate font comparison page for choosing the wedding invitation typography.

**Architecture:** Add a standalone static page `fuentes.html` and stylesheet `fuentes.css`. The comparison page loads selected Google Fonts and renders repeated invitation samples with the same content across six font pairings. Existing `index.html` remains unchanged.

**Tech Stack:** HTML, CSS, Google Fonts, Node.js built-in test runner.

## Global Constraints

- Do not alter the main invitation layout or content.
- Page URL is `/fuentes.html`.
- Show six font combinations.
- Use real invitation copy so choices are judged in context.
- Keep the comparison page responsive and readable on mobile.

---

### Task 1: Font Comparison Page

**Files:**
- Create: `fuentes.html`
- Create: `fuentes.css`
- Modify: `tests/links.test.mjs`
- Create: `docs/superpowers/plans/2026-08-05-comparador-fuentes.md`

**Interfaces:**
- Produces page: `fuentes.html`

- [ ] **Step 1: Write failing test**

```javascript
test('font comparison page includes all trial combinations', async () => {
  const html = await readFile(new URL('../fuentes.html', import.meta.url), 'utf8');

  for (const label of [
    'Cormorant Garamond + Inter',
    'Fraunces + Nunito Sans',
    'Lora + Source Sans 3',
    'Libre Baskerville + Work Sans',
    'Playfair Display + DM Sans',
    'Quicksand + Cormorant Garamond',
  ]) {
    assert.match(html, new RegExp(label.replace(/[+]/g, '\\\\+')));
  }
});
```

- [ ] **Step 2: Run failing test**

Run: `node --test tests/links.test.mjs`
Expected: FAIL because `fuentes.html` does not exist.

- [ ] **Step 3: Create `fuentes.html`**

Add Google Fonts links, header, and six sample cards. Each sample includes names, date, lead copy, mini details, and buttons.

- [ ] **Step 4: Create `fuentes.css`**

Style the page as a comparison grid and define one class per font pairing.

- [ ] **Step 5: Verify**

Run: `node --test tests/calendar.test.mjs tests/links.test.mjs`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add fuentes.html fuentes.css tests/links.test.mjs docs/superpowers/plans/2026-08-05-comparador-fuentes.md
git commit -m "Add font comparison page"
```
