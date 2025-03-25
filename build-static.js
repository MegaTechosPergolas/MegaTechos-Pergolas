#!/usr/bin/env node

/**
 * Este script genera una versión estática del sitio para GitHub Pages.
 * Realiza las siguientes tareas:
 * 1. Ejecuta el build de Vite
 * 2. Crea un archivo 404.html que redirige a index.html para manejar rutas SPA en GitHub Pages
 * 3. Crea un script de redirección para SPA
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Nombre del repositorio en GitHub - Actualizado al nombre correcto
const REPO_NAME = 'MegaTechos-Pergolas';

// Ejecutar el build de Vite
console.log('Ejecutando build...');
execSync('npm run build', { stdio: 'inherit' });

// Ruta al directorio de build
//const distDir = path.resolve(__dirname, 'dist/public');
import { fileURLToPath } from 'url';

// Definir __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, 'dist/public');


// Verificar que el directorio existe
if (!fs.existsSync(distDir)) {
  console.error('El directorio de build no existe. Verifica la ruta:', distDir);
  process.exit(1);
}

// Crear archivo 404.html para manejar rutas de SPA en GitHub Pages
console.log('Creando archivo 404.html para manejo de rutas SPA...');
const notFoundContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redireccionando...</title>
  <script>
    // Construir la ruta basada en GitHub Pages
    var segmentCount = 1; // Asume que es /{repo-name}
    var location = window.location;
    var repo = '/${REPO_NAME}';
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
`;

fs.writeFileSync(path.join(distDir, '404.html'), notFoundContent);

// Modificar index.html para manejar rutas en GitHub Pages
console.log('Actualizando index.html para manejar rutas de SPA...');
const indexPath = path.join(distDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Agregar script de redirección de URL para SPA en GitHub Pages
const redirectScript = `
  <script>
    // Script para manejar redirecciones SPA en GitHub Pages
    (function() {
      // No ejecutar en desarrollo local
      if (window.location.hostname === 'localhost' || 
          window.location.hostname === '127.0.0.1') {
        return;
      }
      
      // Redireccionar hash a rutas reales
      var redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      if (redirect && redirect !== location.href) {
        history.replaceState(null, null, redirect.split('#')[0]);
      }

      // Manejo de URL para GitHub Pages
      var repo = '/${REPO_NAME}';
      var l = window.location;
      if (l.hash) {
        var mainPath = l.pathname.split('/').slice(0, 2).join('/');
        var hashPath = l.hash.substr(1);
        
        if (hashPath && !hashPath.startsWith('/')) {
          hashPath = '/' + hashPath;
        }
        
        // Actualizar la URL para quitar el hash
        window.history.replaceState(null, null, mainPath + hashPath + l.search);
      }
    })();
  </script>
`;

// Insertar el script de redirección antes del cierre de la etiqueta head
indexContent = indexContent.replace('</head>', redirectScript + '</head>');
fs.writeFileSync(indexPath, indexContent);

console.log('¡Preparación para GitHub Pages completada!');
console.log(`
Para desplegar en GitHub Pages:
1. Crea un repositorio en GitHub llamado "${REPO_NAME}"
2. Sube el contenido de la carpeta "dist/public" a la rama principal de tu repositorio
3. Activa GitHub Pages desde la configuración del repositorio para la rama "main"
4. Tu sitio estará disponible en: https://tu-usuario.github.io/${REPO_NAME}/
`);