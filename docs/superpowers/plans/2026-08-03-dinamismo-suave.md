# Dinamismo Suave Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the wedding invitation feel more dynamic with subtle motion and lightweight interaction.

**Architecture:** Keep the site static. Extend `script.js` with a tested countdown helper and DOM initialization for countdown plus scroll reveal. Extend `index.html` with countdown and floating RSVP markup. Extend `styles.css` with transitions, reveal states, timeline line/pins, and reduced-motion safeguards.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Node.js built-in test runner.

## Global Constraints

- No framework or build step.
- Dynamic behavior must be subtle and fit the campestre, minimalista, informal tone.
- Event date remains 2 October 2026.
- Respect `prefers-reduced-motion: reduce`.
- Keep mobile layout usable and avoid text overlap.

---

### Task 1: Countdown Helper

**Files:**
- Modify: `script.js`
- Modify: `tests/calendar.test.mjs`

**Interfaces:**
- Produces: `getDaysUntilEvent(now: Date): number`

- [ ] **Step 1: Write failing test**

```javascript
import { getDaysUntilEvent } from '../script.js';

test('getDaysUntilEvent returns remaining calendar days before the wedding', () => {
  assert.equal(getDaysUntilEvent(new Date('2026-09-30T12:00:00-03:00')), 2);
});
```

- [ ] **Step 2: Run failing test**

Run: `node --test tests/calendar.test.mjs`
Expected: FAIL because `getDaysUntilEvent` is not exported.

- [ ] **Step 3: Implement helper**

Add `getDaysUntilEvent(now)` in `script.js`, comparing against midnight Argentina time for `2026-10-02`.

- [ ] **Step 4: Run passing test**

Run: `node --test tests/calendar.test.mjs`
Expected: PASS.

### Task 2: Dynamic Markup And Behavior

**Files:**
- Modify: `index.html`
- Modify: `script.js`

**Interfaces:**
- Consumes: `getDaysUntilEvent(now)`
- Produces DOM behavior for `[data-countdown-days]` and `[data-reveal]`

- [ ] **Step 1: Add countdown and floating RSVP markup**

Add a small countdown block in the hero and a mobile floating RSVP link.

- [ ] **Step 2: Initialize countdown**

In `script.js`, set `[data-countdown-days]` to the remaining days.

- [ ] **Step 3: Initialize reveal behavior**

In `script.js`, observe `[data-reveal]` elements and add `is-visible` when they enter the viewport.

### Task 3: Motion Styling

**Files:**
- Modify: `styles.css`

**Interfaces:**
- Consumes: `.countdown`, `.floating-rsvp`, `[data-reveal]`, `.is-visible`, existing timeline markup

- [ ] **Step 1: Style countdown and floating RSVP**

Add visually quiet countdown styling and show `.floating-rsvp` only on mobile.

- [ ] **Step 2: Add reveal and button transitions**

Add opacity/transform transitions for reveal elements and hover/tap transitions for buttons.

- [ ] **Step 3: Add timeline line and points**

Add pseudo-elements for timeline items to feel more connected.

- [ ] **Step 4: Add reduced motion safeguard**

Use `@media (prefers-reduced-motion: reduce)` to remove transitions and transforms.

### Task 4: Verification And Commit

**Files:**
- Verify: `index.html`
- Verify: `styles.css`
- Verify: `script.js`
- Verify: `tests/calendar.test.mjs`
- Verify: `tests/links.test.mjs`

- [ ] **Step 1: Run tests**

Run: `node --test tests/calendar.test.mjs tests/links.test.mjs`
Expected: PASS.

- [ ] **Step 2: Run diff check**

Run: `git diff --check`
Expected: exit 0.

- [ ] **Step 3: Visual smoke check**

Use browser automation or local browser to confirm the page renders, no horizontal scroll appears, countdown text is present, and mobile floating RSVP does not cover key content.

- [ ] **Step 4: Commit**

Run:

```bash
git add index.html styles.css script.js tests/calendar.test.mjs docs/superpowers/specs/2026-08-03-invitacion-casamiento-design.md docs/superpowers/plans/2026-08-03-dinamismo-suave.md
git commit -m "Add subtle invitation interactions"
```
