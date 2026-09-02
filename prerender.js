import puppeteer from 'puppeteer';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import http from 'node:http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');

const routes = [
  '/',
  '/contact',
  '/services',
  '/services/window-repair-south-florida',
  '/services/sliding-front-door-repair-south-florida',
  '/services/caulking-water-intrusion-south-florida',
  '/services/roof-repair-south-florida',
  '/services/junk-removal-south-florida',
  '/services/decorative-glass-door-inserts-south-florida',
  '/us',
  '/privacy-policy',
  '/sms-terms'
];

async function prerender() {
  const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

  const server = http.createServer((req, res) => {
    const rawPath = req.url.split('?')[0];
    const assetPath = path.join(distDir, rawPath);

    if (fs.existsSync(assetPath) && fs.statSync(assetPath).isFile()) {
      // Tipos MIME básicos para servir JS y CSS correctamente
      if (assetPath.endsWith('.js')) res.setHeader('Content-Type', 'application/javascript');
      if (assetPath.endsWith('.css')) res.setHeader('Content-Type', 'text/css');
      res.end(fs.readFileSync(assetPath));
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.end(indexHtml);
    }
  });

  await new Promise((resolve) => server.listen(4173, resolve));
  console.log('Servidor temporal listo en puerto 4173.');

  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });

  for (const route of routes) {
    const page = await browser.newPage();

    // Capturar errores de React en la consola si ocurren
    page.on('pageerror', (err) => console.error(`[Error en ${route}]:`, err.message));

    await page.goto(`http://localhost:4173${route}`, { waitUntil: 'networkidle0' });

    // Esperar hasta que el div #root tenga nodos adentro (React montado)
    try {
      await page.waitForFunction(
        () => document.getElementById('root') && document.getElementById('root').children.length > 0,
        { timeout: 5000 }
      );
    } catch (e) {
      console.warn(`⚠️ Advertencia: React tardó en montar en la ruta ${route}`);
    }

    // Pequeño margen para que Helmet actualice los tags del <head>
    await new Promise((r) => setTimeout(r, 500));

    const html = await page.content();

    const outputFolder = route === '/' ? distDir : path.join(distDir, route);
    fs.mkdirSync(outputFolder, { recursive: true });
    fs.writeFileSync(path.join(outputFolder, 'index.html'), html);

    console.log(`✓ Generado HTML para: ${route}`);
    await page.close();
  }

  await browser.close();
  server.close();
  console.log('¡Prerenderizado finalizado!');
}

prerender();