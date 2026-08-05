import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('civil maps link uses the exact CPC coordinates', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

  assert.match(
    html,
    /href="https:\/\/www\.google\.com\/maps\/search\/\?api=1&amp;query=-31\.373877%2C-64\.175724"/
  );
});

test('celebration maps link uses the exact Chacras de la Villa URL', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

  assert.match(html, /href="https:\/\/maps\.app\.goo\.gl\/roh1Jn7AiqDTMNXW6"/);
});

test('invitation shows the RSVP deadline', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const occurrences =
    html.match(/Confirmar antes del 22 de septiembre de 2026/g) ?? [];

  assert.match(html, /Confirmar antes del 22 de septiembre de 2026/);
  assert.equal(occurrences.length, 1);
});

test('invitation does not show a separate song suggestion button', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

  assert.doesNotMatch(html, />\s*Sugerir canciones\s*</);
});

test('invitation loads the selected Google fonts', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

  assert.match(html, /family=Cormorant\+Garamond/);
  assert.match(html, /family=Quicksand/);
});

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
    assert.match(html, new RegExp(label.replace(/[+]/g, '\\+')));
  }
});

test('pages expose the wedding favicon', async () => {
  const indexHtml = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const fontsHtml = await readFile(new URL('../fuentes.html', import.meta.url), 'utf8');
  const favicon = await readFile(new URL('../favicon.svg', import.meta.url), 'utf8');

  const faviconLink =
    /<link rel="icon" type="image\/svg\+xml" href="favicon\.svg\?v=2">/;

  assert.match(indexHtml, faviconLink);
  assert.match(fontsHtml, faviconLink);
  assert.match(favicon, /<svg[^>]*viewBox="0 0 64 64"/);
  assert.match(favicon, />R\+L</);
});
