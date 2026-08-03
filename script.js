const calendarFileName = 'casamiento-rodri-y-lu.ics';

function escapeIcsText(value) {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/\n/g, '\\n');
}

export function buildCalendarContent() {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Rodri y Lu//Invitacion Casamiento//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:casamiento-rodri-lu-20261002@boda.local',
    'DTSTAMP:20260803T000000Z',
    'DTSTART:20261002T150000Z',
    'DTEND:20261002T230000Z',
    `SUMMARY:${escapeIcsText('Casamiento Rodri y Lu')}`,
    `LOCATION:${escapeIcsText('CPC Centro America y Chacras de la Villa')}`,
    `DESCRIPTION:${escapeIcsText(
      'Civil, almuerzo, tarde juntos y merienda con mates.'
    )}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ];

  return `${lines.join('\r\n')}\r\n`;
}

export function downloadCalendar() {
  const blob = new Blob([buildCalendarContent()], {
    type: 'text/calendar;charset=utf-8',
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.download = calendarFileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

if (typeof window !== 'undefined') {
  window.downloadCalendar = downloadCalendar;
}
