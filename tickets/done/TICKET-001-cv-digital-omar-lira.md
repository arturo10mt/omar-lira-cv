# TICKET-001: CV digital de Omar Lira (español, paleta azul/gris)

**Estado:** completado
**Tipo:** feature
**Prioridad:** alta
**Creado:** 2026-08-11
**Completado:** 2026-08-11

## Descripción

Nuevo proyecto (clon de la estructura de `arturomt-portfolio`, mismo stack Astro +
Tailwind) para el CV digital de Omar Lira Rangel, cliente nuevo. Mismas secciones que
arturomt.com, solo en español, con paleta de colores azul/gris estilo consultora
(Gartner/McKinsey) en vez del degradado índigo/púrpura/cian del sitio de referencia.

Fuente de contenido: `OmarLiraCV_digital/Omar Lira CV Resume SPA.docx` y `Omar.png`.

## Decisiones confirmadas con el usuario

- **Sin página de Testimonios** — Omar no tiene recomendaciones en su CV. 7 páginas en
  vez de 8. Se puede agregar después si consigue recomendaciones de LinkedIn.
- **Sin puesto "Actual"** — su último rol (SURA AFORE, Feb2023–Jul2026) ya terminó.
  El Hero dice "Disponible para roles de CIO/CTO" en vez de mostrar un puesto activo;
  ningún rol del timeline lleva el badge "Actual".
- **Ubicación:** Ciudad de México (asumida, es donde estaba su rol más reciente).
- **Foto:** actualizada (2026-08-11) — `OmarLira.PNG` (1600×2000, con transparencia
  real) reemplazó la original de baja resolución. Se recortó a un headshot cuadrado
  centrado (800×800) manteniendo el canal alfa, así que se funde de forma natural
  con el fondo oscuro del sitio sin caja blanca/negra detrás.

## Alcance

1. Scaffold del proyecto (`package.json`, `astro.config.mjs`, `tailwind.config.mjs`,
   `.gitignore`) — ya creado.
2. `src/data/cv.js` — contenido de Omar en español (perfil, logros, experiencia,
   habilidades/frameworks, programas ejecutivos como "certificaciones", educación).
3. Nueva paleta azul/gris (propuesta antes de aplicar a todas las páginas).
4. 7 páginas: Home, Sobre Mí, Experiencia, Logros, Habilidades, Certificaciones,
   Contacto — mismo diseño/estructura que arturomt.com, sin selector de idioma.
5. Nav/Footer sin el link "Testimonios".

## Criterios de aceptación

- [x] Paleta de colores propuesta y validada por el usuario antes de aplicarse a todo
- [x] 7 páginas construidas con el contenido real del CV de Omar
- [x] `npm run build` compila sin errores
- [x] Verificado en local (desktop + mobile)
- [x] PDF descargable agregado (`CV_Omar_Lira.pdf`, botón "Descargar CV" en el Nav)
- [x] Footer fijo al fondo de la ventana en todas las páginas cortas (Certificaciones,
      Contacto) — antes quedaba flotando con espacio vacío debajo
- [x] Validación responsiva completa: 7 páginas × 3 anchos (375/768/1280px), sin
      overflow horizontal — se encontró y corrigió un desbordamiento de 3px en la
      tarjeta "$200M+" de Logros en mobile (texto se recortaba)
- [x] Publicado en producción — repo `github.com/arturo10mt/omar-lira-cv`, desplegado
      en Vercel (`omar-lira-cv.vercel.app`). Dominio propio `omarlira.com` agregado en
      Vercel; se le pasaron a Omar las instrucciones para cambiar sus nameservers a
      `ns1.vercel-dns.com` / `ns2.vercel-dns.com` — pendiente de que él lo aplique y
      de que propague (no controlado desde aquí).

## Pendiente para un ticket futuro

- **Testimonios:** página omitida por completo (sin recomendaciones disponibles) —
  se puede agregar si Omar consigue recomendaciones de LinkedIn.
- **Verificar propagación de DNS** una vez Omar confirme que cambió los nameservers,
  y confirmar `omarlira.com`/`www.omarlira.com` en vivo.

## Nota técnica

Al construir las páginas después de iniciado el servidor de desarrollo, Tailwind no
recompiló las utilidades responsivas nuevas (`lg:grid-cols-5`, `lg:col-span-3/2`) hasta
reiniciar el servidor (`rm -rf .astro node_modules/.vite` + reinicio) — mismo tipo de
gotcha de caché ya visto en otros proyectos Astro de esta cuenta.
