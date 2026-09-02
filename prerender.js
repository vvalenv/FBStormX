import puppeteer from 'puppeteer';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import http from 'node:http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');

// Todas tus rutas
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

  // Servidor local mínimo para servir los assets compilados
  const server = http.createServer((req, res) => {
    const rawPath = req.url.split('?')[0];
    const assetPath = path.join(distDir, rawPath);
    
    if (fs.existsSync(assetPath) && fs.statSync(assetPath).isFile()) {
      res.end(fs.readFileSync(assetPath));
    } else {
      res.end(indexHtml);
    }
  });

  await new Promise((resolve) => server.listen(4173, resolve));
  console.log('Iniciando prerenderizado...');

  const browser = await puppeteer.launch({ headless: true });

  for (const route of routes) {
    const page = await browser.newPage();
    await page.goto(`http://localhost:4173${route}`, { waitUntil: 'networkidle0' });
    
    // Espera breve para asegurar que React montó y useEffect cambió el title/meta
    await new Promise((r) => setTimeout(r, 1000));

    const html = await page.content();
    
    // Genera carpetas y archivos index.html para cada ruta
    const outputFolder = route === '/' ? distDir : path.join(distDir, route);
    fs.mkdirSync(outputFolder, { recursive: true });
    fs.writeFileSync(path.join(outputFolder, 'index.html'), html);

    console.log(`✓ Generado HTML para: ${route}`);
    await page.close();
  }

  await browser.close();
  server.close();
  console.log('¡Prerenderizado finalizado con éxito!');
}

prerender();