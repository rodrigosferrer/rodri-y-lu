# Primera Version Invitacion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static one-page wedding invitation for Rodri y Lu.

**Architecture:** The site is static HTML, CSS, and JavaScript with no build step. `index.html` owns content and structure, `styles.css` owns responsive visual presentation, `script.js` owns calendar file generation, and `tests/calendar.test.mjs` verifies the calendar behavior.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Node.js built-in test runner.

## Global Constraints

- Implement as a static site without framework or build step.
- Use the existing photo `20251215_083449.jpg` as the primary image.
- Event date is 2 October 2026 from 12:00 to 20:00.
- Civil location is CPC Centro America, Cordoba Capital.
- Celebration location is Chacras de la Villa, Cordoba/Villa Allende.
- Confirmation and song suggestions use `https://docs.google.com/forms/d/e/1FAIpQLSd9v9ZdfLHnsJlfOEsQNqAsKjIE3yErO4AVZEZRMTmeijRGEQ/viewform?usp=publish-editor`.
- Photo uploads use `https://drive.google.com/drive/folders/1p0uRSj1Km4AF0QkchjCwYqbOYrl7e0Zj?usp=drive_link`.
- Tone is campestre, minimalista, informal, sin protocolo.
- Attire copy says there is no dress code and guests can come as they want.

---

### Task 1: Calendar Module

**Files:**
- Create: `script.js`
- Create: `tests/calendar.test.mjs`

**Interfaces:**
- Produces: `buildCalendarContent(): string`
- Produces: `downloadCalendar(): void`

- [ ] **Step 1: Write the failing test**

```javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import { buildCalendarContent } from '../script.js';

test('buildCalendarContent creates the wedding calendar event', () => {
  const ics = buildCalendarContent();

  assert.match(ics, /BEGIN:VCALENDAR/);
  assert.match(ics, /SUMMARY:Casamiento Rodri y Lu/);
  assert.match(ics, /DTSTART:20261002T150000Z/);
  assert.match(ics, /DTEND:20261002T230000Z/);
  assert.match(ics, /LOCATION:CPC Centro America y Chacras de la Villa/);
  assert.match(ics, /DESCRIPTION:Civil, almuerzo, tarde juntos y merienda con mates./);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/calendar.test.mjs`
Expected: FAIL because `script.js` does not exist or does not export `buildCalendarContent`.

- [ ] **Step 3: Write minimal implementation**

Create `script.js` exporting `buildCalendarContent` and `downloadCalendar`. The generated ICS uses UTC times corresponding to Argentina UTC-3: 12:00 becomes `20261002T150000Z` and 20:00 becomes `20261002T230000Z`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/calendar.test.mjs`
Expected: PASS.

### Task 2: Static Page Content

**Files:**
- Create: `index.html`

**Interfaces:**
- Consumes: `downloadCalendar()` from `script.js`

- [ ] **Step 1: Create page structure**

Create a single page with hero, event summary, day rhythm, location buttons, attire, music, confirmation, photo upload, and footer.

- [ ] **Step 2: Wire external links**

Use Google Maps search URLs for both locations, the Google Form URL for RSVP and music, and the Drive URL for photos.

- [ ] **Step 3: Wire calendar action**

Add a button with `id="calendarButton"` that calls `downloadCalendar()` through `script.js`.

### Task 3: Responsive Styling

**Files:**
- Create: `styles.css`

**Interfaces:**
- Consumes: classes and ids from `index.html`

- [ ] **Step 1: Add mobile-first styling**

Style the page with warm light background, olive/sage accents, large touch targets, readable spacing, and contained sections.

- [ ] **Step 2: Add desktop layout**

At wider viewports, make the hero use a two-column composition while keeping content centered and readable.

- [ ] **Step 3: Check image crop**

Ensure `20251215_083449.jpg` uses `object-fit: cover` and stable responsive dimensions without text overlap.

### Task 4: Verification And Commit

**Files:**
- Verify: `index.html`
- Verify: `styles.css`
- Verify: `script.js`
- Verify: `tests/calendar.test.mjs`

**Interfaces:**
- Consumes: the complete static site

- [ ] **Step 1: Run automated test**

Run: `node --test tests/calendar.test.mjs`
Expected: PASS.

- [ ] **Step 2: Run static server**

Run: `python -m http.server 8000`
Expected: page available at `http://localhost:8000/`.

- [ ] **Step 3: Visual check**

Open or inspect the page at desktop and mobile sizes. Confirm no obvious overlap, blank image, or broken layout.

- [ ] **Step 4: Commit**

Run:

```bash
git add index.html styles.css script.js tests/calendar.test.mjs docs/superpowers/specs/2026-08-03-invitacion-casamiento-design.md docs/superpowers/plans/2026-08-03-primera-version-invitacion.md
git commit -m "Build first wedding invitation version"
```
