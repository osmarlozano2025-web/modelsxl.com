# MODEL SxL - Conversaciones que Convierten 🚀

MODEL SxL es una solución premium de bots conversacionales empáticos y omnicanal diseñada a medida para empresas que buscan elevar el estándar de su atención al cliente y maximizar su conversión de ventas.

Este repositorio contiene la landing page oficial de **MODEL SxL**, construida bajo estándares de diseño premium B2B y optimizada para la conversión.

## 📌 Objetivo del Proyecto

Posicionar a MODEL SxL como un servicio de ticket alto, diferenciado de los SaaS genéricos, mediante una experiencia web elegante, clara y orientada a resultados (ROI).

## 🛠️ Stack Tecnológico

- **Framework:** Vite + React (TypeScript)
- **Animaciones:** Framer Motion (para transiciones suaves y premium)
- **Iconografía:** Lucide React
- **Estilos:** Vanilla CSS (Diseño a medida con variables, glassmorphism y dark mode)
- **Deployment:** Sitio 100% estático compatible con Hostinger y cualquier CDN.

## 📁 Estructura del Proyecto

```text
/
├── assets/             # Recursos estáticos (Imágenes, fondos)
├── src/
│   ├── App.tsx          # Estructura principal de la One-Page
│   ├── index.css        # Sistema de diseño y estilos globales
│   ├── main.tsx         # Punto de entrada de React
│   └── vite-env.d.ts    # Tipados de Vite
├── index.html           # Plantilla base
├── package.json         # Dependencias y scripts
├── tsconfig.json        # Configuración de TypeScript
└── vite.config.ts       # Configuración de Vite
```

## 🚀 Instalación y Desarrollo

### Requisitos
- Node.js (v18.0.0 o superior)
- npm (v9.0.0 o superior)

### Pasos
1. Clonar el repositorio.
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 🏗️ Build para Producción

Para generar los archivos estáticos listos para subir a Hostinger:

```bash
npm run build
```

Este comando generará una carpeta `dist/` con el código optimizado, minificado y listo para producción.

## 🌐 Deploy en Hostinger

1. Ejecuta `npm run build`.
2. Accede a tu panel de Hostinger -> **Administrador de Archivos**.
3. Sube el contenido de la carpeta `dist/` a la raíz del dominio (`public_html`).
4. ¡Listo! El sitio es 100% estático y no requiere configuración extra de servidor.

## 📧 Contacto

- **Email Principal:** hola@modelsxl.com
- **Soporte:** sebastian@modelsxl.com / nazareno@modelsxl.com

---
*Desarrollado con enfoque en conversión y excelencia visual por el equipo de Producto de MODEL SxL.*
