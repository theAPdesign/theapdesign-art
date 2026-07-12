import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const outputDir = new URL('../qa-screenshots/', import.meta.url);
await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const viewports = [
  { name: 'desktop', width: 1440, height: 1100 },
  { name: 'mobile', width: 390, height: 1200 },
];
const results = [];

for (const viewport of viewports) {
  const page = await browser.newPage({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: 1,
  });
  const errors = [];

  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') {
      errors.push(message.text());
    }
  });

  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' });

  const metrics = await page.evaluate(() => ({
    title: document.title,
    bodyWidth: document.body.scrollWidth,
    innerWidth: window.innerWidth,
    pageHeight: document.documentElement.scrollHeight,
    h1: document.querySelector('h1')?.innerText,
    imageCount: document.images.length,
    images: [...document.images].map((image) => ({
      src: image.getAttribute('src'),
      complete: image.complete,
      width: image.naturalWidth,
      height: image.naturalHeight,
    })),
    svgLogoExists: Boolean(document.querySelector('img[src="/ap-logo.svg"]')),
  }));

  await page.screenshot({
    path: fileURLToPath(new URL(`${viewport.name}.png`, outputDir)),
    fullPage: false,
  });

  results.push({
    viewport: viewport.name,
    errors,
    horizontalOverflow: metrics.bodyWidth > metrics.innerWidth + 1,
    metrics,
  });

  await page.close();
}

await browser.close();
await writeFile(new URL('results.json', outputDir), JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
