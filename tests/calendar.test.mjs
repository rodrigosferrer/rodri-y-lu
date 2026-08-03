import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

async function loadBrowserScript() {
  const script = await readFile(new URL('../script.js', import.meta.url), 'utf8');
  const context = {
    Blob: class Blob {},
    URL: {
      createObjectURL: () => 'blob:calendar',
      revokeObjectURL: () => {},
    },
    document: {
      body: { appendChild: () => {} },
      createElement: () => ({ click: () => {}, remove: () => {} }),
      querySelector: () => null,
      querySelectorAll: () => [],
      documentElement: { classList: { add: () => {} } },
    },
    window: {
      addEventListener: () => {},
      scrollY: 0,
    },
  };
  context.globalThis = context;
  context.window.window = context.window;
  context.window.document = context.document;
  vm.createContext(context);
  vm.runInContext(script, context);
  return context.window.WeddingInvitation;
}

test('buildCalendarContent creates the wedding calendar event', () => {
  const { buildCalendarContent } = globalThis.WeddingInvitation;
  const ics = buildCalendarContent();

  assert.match(ics, /BEGIN:VCALENDAR/);
  assert.match(ics, /SUMMARY:Casamiento Rodri y Lu/);
  assert.match(ics, /DTSTART:20261002T150000Z/);
  assert.match(ics, /DTEND:20261002T230000Z/);
  assert.match(ics, /LOCATION:CPC Centro America y Chacras de la Villa/);
  assert.match(
    ics,
    /DESCRIPTION:Civil, almuerzo, tarde juntos y merienda con mates\./
  );
});

test('getDaysUntilEvent returns remaining calendar days before the wedding', () => {
  const { getDaysUntilEvent } = globalThis.WeddingInvitation;
  assert.equal(getDaysUntilEvent(new Date('2026-09-30T12:00:00-03:00')), 2);
});

test.before(async () => {
  globalThis.WeddingInvitation = await loadBrowserScript();
});
