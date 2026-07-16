# Flujo de trabajo de assets

Este documento describe cómo se gestionan los assets (iconos, logos, ilustraciones e imágenes) exportados desde Figma en este proyecto.

## Estructura de carpetas

```
src/assets/
├── icons/         # Iconos SVG (vectores simples, trazo/relleno)
├── logos/         # Logos e isotipos SVG
└── images/        # Fotografías e ilustraciones complejas
```

## Iconos y logos (SVG)

- Se exportan desde Figma como `.svg` y se guardan en `src/assets/icons/` o `src/assets/logos/`.
- Se importan como componentes React usando **SVGR** (`vite-plugin-svgr`), configurado en `vite.config.js`:

  ```jsx
  import { ReactComponent as IconArrow } from '@/assets/icons/arrow.svg'

  <IconArrow className="w-4 h-4 text-[--color-accent]" />
  ```

- El color debe resolverse mediante `currentColor` dentro del SVG (`fill="currentColor"` / `stroke="currentColor"`), para heredar el color del token/clase Tailwind aplicada al componente contenedor. Nunca se hardcodea un color dentro del SVG.

## Fotografías (WebP)

- Las imágenes fotográficas se exportan desde Figma y se convierten a `.webp` antes de añadirlas a `src/assets/images/`.
- Se importan como recursos estáticos normales (`import photo from '@/assets/images/photo.webp'`) y se usan con `<img>` o como `background-image`.

## Pendiente de esta sesión

- `vite-plugin-svgr` está declarado en `package.json` y configurado en `vite.config.js`, pero la instalación de `node_modules` no se pudo completar en este entorno de scaffolding por una limitación del sistema de archivos del sandbox. Ejecutar `npm install` en local resolverá la dependencia sin problema.
