# Instrucciones para Desplegar en GitHub Pages

Este documento proporciona instrucciones detalladas para desplegar esta aplicación como un sitio estático en GitHub Pages.

## Preparación del Repositorio

1. Crea un nuevo repositorio en GitHub con el nombre que desees (por ejemplo, `megatechos-pergolas`).
2. Clona este repositorio a tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/megatechos-pergolas.git
   cd megatechos-pergolas
   ```

## Construcción del Sitio Estático

1. Clona o descarga este proyecto
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Construye la versión de producción:
   ```bash
   npm run build
   ```
4. El comando generará una carpeta `dist` con los archivos compilados estáticos.

## Configuración para GitHub Pages

1. Crea un archivo `.nojekyll` en la carpeta `dist` para evitar que GitHub Pages procese los archivos con Jekyll:
   ```bash
   touch dist/.nojekyll
   ```

2. (Opcional) Crea un archivo `404.html` en la carpeta `dist`:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <meta charset="utf-8">
     <title>Redireccionando...</title>
     <script>
       // Construir la ruta basada en GitHub Pages
       var segmentCount = 1; // Asume que es /{repo-name}
       var location = window.location;
       var repo = '/megatechos-pergolas'; // Cambia esto al nombre de tu repositorio
       var l = location.pathname.split('/').slice(0, 1 + segmentCount).join('/') || '/';
       l = l.replace(/\/$/, '');
       var path = location.pathname.slice(l.length);
       
       // Redirigir a la página principal con el hash
       var redirectUrl = l + '/#' + path + location.search + location.hash;
       window.location.replace(redirectUrl);
     </script>
   </head>
   <body>
     <h1>Redireccionando...</h1>
     <p>Si no eres redirigido automáticamente, haz clic <a href="/">aquí</a>.</p>
   </body>
   </html>
   ```

## Despliegue a GitHub Pages

### Opción 1: Despliegue Automático con GitHub Actions

1. Crea una carpeta `.github/workflows` en la raíz del proyecto:
   ```bash
   mkdir -p .github/workflows
   ```

2. Crea un archivo de flujo de trabajo `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches:
         - main

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3

         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: 18

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build

         - name: Create .nojekyll file
           run: touch dist/.nojekyll

         - name: Deploy to GitHub Pages
           uses: JamesIves/github-pages-deploy-action@v4
           with:
             folder: dist
             branch: gh-pages
   ```

3. Haz commit y push de todos los cambios a tu repositorio:
   ```bash
   git add .
   git commit -m "Configuración para GitHub Pages"
   git push origin main
   ```

4. GitHub Actions construirá y desplegará automáticamente tu sitio cada vez que hagas push a la rama `main`.

### Opción 2: Despliegue Manual

1. Después de construir el proyecto, puedes desplegar manualmente la carpeta `dist` a GitHub Pages:
   ```bash
   cd dist
   git init
   git add .
   git commit -m "Deploy"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/megatechos-pergolas.git
   git push -f origin main:gh-pages
   ```

2. Alternativamente, puedes usar una herramienta como `gh-pages`:
   ```bash
   npm install -g gh-pages
   gh-pages -d dist
   ```

## Configuración en GitHub

1. Ve a la configuración de tu repositorio en GitHub (`Settings` > `Pages`).
2. En "Source", selecciona la rama `gh-pages` y guarda.
3. Tu sitio estará disponible en: `https://tu-usuario.github.io/megatechos-pergolas/`

## Ajustes Adicionales para SPA (Single Page Application)

Si experimentas problemas con las rutas, asegúrate de:

1. Usar un enfoque basado en hash en el enrutador (ya implementado en este proyecto).
2. Configurar correctamente el archivo `404.html` para redireccionar a las rutas internas.

## Problemas Conocidos y Soluciones

### Enlaces Directos y Refrescos

Si los usuarios intentan acceder directamente a una URL como `https://tu-usuario.github.io/megatechos-pergolas/catalogo`, podrían recibir un error 404. Para solucionarlo:

1. Asegúrate de tener implementado el archivo `404.html` correctamente.
2. Comunica a los usuarios que deben usar los enlaces internos de navegación.

### Formularios y Funcionalidad de Servidor

Recuerda que GitHub Pages solo puede servir contenido estático. Para formularios de contacto:

1. Considera usar servicios de terceros como Formspree, Netlify Forms o AWS Lambda.
2. Alterna a servicios de mensajería como WhatsApp o Telegram para contacto directo.

## Recursos Adicionales

- [Documentación oficial de GitHub Pages](https://docs.github.com/es/pages)
- [Creación de sitios de una sola página (SPA) en GitHub Pages](https://github.com/rafgraph/spa-github-pages)