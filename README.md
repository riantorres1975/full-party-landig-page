# 🎉 Full Party Uruapan — Landing Page

Landing page ultra-llamativa y 100% responsive para Full Party Uruapan, construida con **React + Vite + Tailwind CSS**.

---

## 🚀 Instalación y arranque

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo (http://localhost:5173)
npm run dev

# 3. Build de producción (carpeta /dist)
npm run build

# 4. Vista previa del build
npm run preview
```

---

## 📁 Estructura del proyecto

```
src/
├── assets/                    ← Pon aquí tu logo e imágenes
│   ├── logo.png               ← Logo de la tienda (recomendado: 200×200px)
│   ├── catalog-products.png   ← Captura de productos (image_3.png)
│   ├── catalog-confirm.png    ← Captura de confirmación (image_6.png)
│   └── catalog-tracking.png  ← Captura de rastreo (image_5.png)
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── ui/
│   │   └── Card.jsx
│   ├── PageLoader.jsx
│   ├── FloatingWhatsapp.jsx
│   ├── HeroSection.jsx
│   ├── CatalogHighlight.jsx
│   ├── ProductCategories.jsx
│   ├── LocationsSection.jsx
│   └── ContactSection.jsx
├── data/
│   ├── productData.js         ← Categorías de productos
│   └── locationData.js        ← Datos de sucursales y links de Maps
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

---

## 🖼️ Cómo agregar tus imágenes

### Logo
1. Copia tu logo como `src/assets/logo.png`
2. En **`Navbar.jsx`**, descomenta el bloque del `<img>` del logo
3. En **`PageLoader.jsx`**, descomenta el bloque del `<img>` del logo
4. En **`HeroSection.jsx`**, descomenta el bloque del `<img>` del logo

### Capturas del catálogo (sección "¿Cómo funciona?")
1. Copia las 3 imágenes en `src/assets/`:
   - `catalog-products.png` → captura de la pantalla de productos (image_3.png)
   - `catalog-confirm.png`  → captura de la confirmación de pedido (image_6.png)
   - `catalog-tracking.png` → captura del rastreo de pedido (image_5.png)
2. En **`CatalogHighlight.jsx`**, descomenta las 3 líneas de importación arriba del todo
3. En el array `STEPS`, descomenta `// img: imgProducts`, `// img: imgConfirm`, `// img: imgTracking`

---

## 📍 Cómo actualizar los links de Google Maps

Abre `src/data/locationData.js` y reemplaza el campo `mapUrl` de cada sucursal:

```js
// Sucursal 1
mapUrl: 'https://maps.app.goo.gl/TU_LINK_REAL_1',

// Sucursal 2
mapUrl: 'https://maps.app.goo.gl/TU_LINK_REAL_2',
```

También actualiza `address`, `schedule` y `name` si quieres ajustar los datos.

---

## 🎨 Paleta de colores

| Variable          | Color     | Uso                     |
|-------------------|-----------|-------------------------|
| `brand-purple`    | `#7e22ce` | Principal / acentos     |
| `brand-magenta`   | `#db2777` | CTAs / destacados       |
| `brand-cyan`      | `#0891b2` | Categorías / textos     |
| `brand-lime`      | `#65a30d` | Categorías / textos     |
| `brand-orange`    | `#ea580c` | Categorías / textos     |
| `brand-yellow`    | `#facc15` | Acentos / badges        |

---

## 🌐 Deploy en Vercel / Netlify

```bash
npm run build
# Sube la carpeta /dist
```

- **Vercel**: conecta el repo y listo (detecta Vite automáticamente)
- **Netlify**: Build command `npm run build`, Publish directory `dist`

---

## 🔗 Links importantes

- Tienda Online: https://full-party-store.vercel.app/
- WhatsApp: +52 452 104 0377
- Facebook: https://www.facebook.com/profile.php?id=100068298698109
