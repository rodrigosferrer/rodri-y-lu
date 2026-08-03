const calendarFileName = 'casamiento-rodri-y-lu.ics';
const eventDateArgentinaMidnight = Date.UTC(2026, 9, 2, 3, 0, 0);
const dayInMilliseconds = 24 * 60 * 60 * 1000;

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

export function getDaysUntilEvent(now = new Date()) {
  const todayArgentinaMidnight = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    3,
    0,
    0
  );

  return Math.max(
    0,
    Math.ceil((eventDateArgentinaMidnight - todayArgentinaMidnight) / dayInMilliseconds)
  );
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

function initCountdown() {
  const countdownValue = document.querySelector('[data-countdown-days]');

  if (!countdownValue) {
    return;
  }

  countdownValue.textContent = String(getDaysUntilEvent(new Date()));
}

function initReveal() {
  const revealItems = [...document.querySelectorAll('[data-reveal]')];

  if (!revealItems.length) {
    return;
  }

  document.documentElement.classList.add('reveal-ready');

  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initFloatingRsvp() {
  const floatingRsvp = document.querySelector('.floating-rsvp');

  if (!floatingRsvp) {
    return;
  }

  const toggleFloatingRsvp = () => {
    floatingRsvp.classList.toggle('is-visible', window.scrollY > 420);
  };

  toggleFloatingRsvp();
  window.addEventListener('scroll', toggleFloatingRsvp, { passive: true });
}

if (typeof window !== 'undefined') {
  window.downloadCalendar = downloadCalendar;
  window.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initReveal();
    initFloatingRsvp();
  });
}
