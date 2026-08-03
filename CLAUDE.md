# CLAUDE.md — Portfolio JAO

## Importante: Info de Trabajo

### Cuentas
| Servicio | Cuenta | Email |
|----------|--------|-------|
| GitHub | `esjesusobando` | esjesusobando@outlook.com |
| Vercel | `esjesusobando` | — |
| Platzi | `jesusobando` | — |

### Git
- **Remote**: `https://github.com/esjesusobando/portfolio_JAO.git`
- **Branch**: `master`
- **Local**: `C:\Users\sebas\Playground\portfolio_jesus_obando-main`
- **Backup**: `C:\Users\sebas\Playground\00_Backup_Porfolio`

### Despliegue
- **Vercel**: `https://portfoliojesusobando-main.vercel.app`
- Auto-deploy en cada push a `master`

### Estructura
- Página única: `/creative` — portfolio completo
- `/` → landing con CTA único → `/creative`
- `/professional` → redirect a `/creative`

### Stack
Next.js 16 · React 19 · Tailwind CSS v4 · Motion · shadcn/ui · next-themes · Playwright

### Convenciones
- Todo en español
- Tema light por defecto
- Edge cases: EC-XXX IDs secuenciales
- Teléfonos: encoding `%20` y `%2B` en `tel:` hrefs
- LinkedIn: `Jesús` → `jes%C3%BAs` pre-encoded
- Países: Venezuela (2008-2019), México (2020-2024), México/Venezuela (2024-presente)

### Archivos Clave
| Archivo | Propósito |
|---------|-----------|
| `src/lib/data.ts` | Datos centralizados (experience, skills, contact) |
| `src/app/creative/page.tsx` | Página principal del portfolio |
| `src/app/page.tsx` | Landing page |
| `src/app/layout.tsx` | Root layout + theme script |
| `README.md` | Documentación del proyecto |
| `RTM.md` | Edge cases y decisiones técnicas |
| `INSIGHTS.md` | Análisis profesional |
| `Resumen_Day/` | Notas de sesión |

---

## GOALS

1. **Deploy en Vercel** — ✅ En vivo en `portfoliojesusobando-main.vercel.app`
2. **Consolidar a página única** — ✅ Solo `/creative`, `/professional` redirige
3. **Agregar país en experiencia** — ✅ Campo `country` en `data.ts`
4. **Corregir ubicación PDVSA** — ✅ Lagunillas/Bachaquero
5. **Mantener esencia y colores** — Azul `#00b4d8`, Outfit + Inter, light default
6. **Siguiente**: Mejoras UI/UX en la página creativa manteniendo colores y esencia
