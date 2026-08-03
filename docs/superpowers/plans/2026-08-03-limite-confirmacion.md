# Limite Confirmacion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Communicate that guests should confirm attendance by 22 September 2026.

**Architecture:** This is a static content change. `index.html` displays the deadline near RSVP actions and in details; `styles.css` adds a small note style; `tests/links.test.mjs` verifies the deadline text remains present; the spec records the requirement.

**Tech Stack:** HTML, CSS, Node.js built-in test runner.

## Global Constraints

- Wedding date is 2 October 2026.
- RSVP deadline is 10 days before the wedding: 22 September 2026.
- Do not disable the RSVP link after the deadline.
- Keep the tone informal and practical.

---

### Task 1: RSVP Deadline Content

**Files:**
- Modify: `index.html`
- Modify: `styles.css`
- Modify: `docs/superpowers/specs/2026-08-03-invitacion-casamiento-design.md`
- Modify: `tests/links.test.mjs`

**Interfaces:**
- Produces visible text: `Confirmar antes del 22 de septiembre de 2026`

- [ ] **Step 1: Write failing test**

```javascript
test('invitation shows the RSVP deadline', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

  assert.match(html, /Confirmar antes del 22 de septiembre de 2026/);
});
```

- [ ] **Step 2: Run failing test**

Run: `node --test tests/links.test.mjs`
Expected: FAIL because the deadline copy is not in `index.html`.

- [ ] **Step 3: Add content and style**

Add the deadline copy near RSVP actions and in the details section. Add a compact `.deadline-note` style.

- [ ] **Step 4: Run tests**

Run: `node --test tests/calendar.test.mjs tests/links.test.mjs`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css tests/links.test.mjs docs/superpowers/specs/2026-08-03-invitacion-casamiento-design.md docs/superpowers/plans/2026-08-03-limite-confirmacion.md
git commit -m "Add RSVP deadline"
```
