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
