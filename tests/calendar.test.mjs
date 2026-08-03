import test from 'node:test';
import assert from 'node:assert/strict';
import { buildCalendarContent, getDaysUntilEvent } from '../script.js';

test('buildCalendarContent creates the wedding calendar event', () => {
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
  assert.equal(getDaysUntilEvent(new Date('2026-09-30T12:00:00-03:00')), 2);
});
