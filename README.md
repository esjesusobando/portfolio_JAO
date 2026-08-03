# Portfolio de Jesús Obando

> Portfolio profesional único con vista Creativa. Proyecto Next.js 16 con React 19, Tailwind CSS v4 y Motion.

## 📋 Descripción del Proyecto

Portfolio personal de **Jesús Alfonso Obando Ramones**, Ingeniero de Petróleo con 11 años en Oil & Gas y 7 años en transformación digital. El proyecto presenta dos vistas diferenciadas:

- **Portfolio Creativo** (`/creative`): Diseño visual premium con animaciones, componentes magnéticos y mayor densidad de contenido

## 🛠️ Tecnologías

| Categoría | Tecnología | Versión |
|-----------|-------------|---------|
| Framework | Next.js | 16.2.1 |
| UI Library | React | 19.2.4 |
| Styling | Tailwind CSS | v4 |
| Animations | Motion | 11.18.2 |
| Icons | Phosphor Icons | 2.1.10 |
| Theme | next-themes | 0.4.6 |
| Components | shadcn/ui | 4.1.0 |
| Testing | Playwright | 1.58.2 |

## 🎨 Sistema de Diseño

### Fuentes

- **Headers**: Outfit (Google Fonts)
- **Body**: Inter (Google Fonts)

### Colores

| Token | Valor OKLCH | Hex | Uso |
|-------|------------|-----|-----|
| `--primary` / `--azul` | `oklch(0.70 0.18 210)` | `#00b4d8` | Acento principal, CTAs, highlights |
| `--background` | `oklch(0.99 0.003 250)` | ~`#fafafa` | Fondo claro |
| `--foreground` | `oklch(0.42 0.03 250)` | ~`#6b7280` | Texto principal |
| `--card` | `oklch(1 0 0)` | `#ffffff` | Tarjetas |
| `--border` | `oklch(0.93 0.005 250)` | ~`#e5e7eb` | Bordes |

### Dark Mode

Sistema completo de tokens para modo oscuro con `--azul` como color de acento neon que destaca sobre fondos profundos.

## 📁 Estructura del Proyecto

```
portfolio_jesus_obando/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout + theme script (EC-013)
│   │   ├── page.tsx               # Landing page con CTA único
│   │   ├── globals.css            # Tokens CSS + theme + edge cases
│   │   ├── creative/
│   │   │   ├── page.tsx           # Portfolio visual premium
│   │   │   └── opengraph-image.tsx
│   │   └── professional/  # Redirects to /creative
│   │       ├── page.tsx           # CV minimalista ATS-friendly
│   │       └── opengraph-image.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── scroll-progress.tsx
│   │   │   ├── theme-provider.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   └── theme-provider.tsx
│   │   └── sections/
│   │       └── footer.tsx
│   └── lib/
│       ├── data.ts                 # Datos del portfolio (experience, skills, etc.)
│       └── utils.ts                # Utility functions (cn)
├── public/
│   └── Jesus_Obando.PNG           # Imagen de perfil
├── tests/
│   └── e2e/
│       └── portfolio.spec.ts       # Tests E2E con Playwright
├── package.json
├── tsconfig.json
├── tailwind.config.ts             # Configuración Tailwind v4
├── postcss.config.mjs
├── playwright.config.ts
└── README.md
```

## 🚀 Desarrollo Local

```bash
# Navegar al directorio del proyecto
cd portfolio_jesus_obando

# Instalar dependencias
npm install
# o con bun
bun install

# Iniciar servidor de desarrollo
npm run dev

# Abrir en navegador
open http://localhost:3000
```

### Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo (hot reload) |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción |
| `npm run lint` | Verificación ESLint |

### Testing E2E

```bash
# Instalar Playwright
npx playwright install chromium

# Ejecutar tests
npx playwright test
```

## 📄 Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Landing page con CTA único hacia Portfolio Creativo |
| `/creative` | Portfolio visual premium con animaciones |

## 🔗 Deploy

El proyecto está configurado para deploy en Vercel:

1. Conectar repositorio a Vercel
2. Importar proyecto
3. Vercel detecta automáticamente Next.js y configura build

## 📊 Estado del Proyecto

| Componente | Estado |
|------------|--------|
| Landing page | ✅ Completo |
| Portfolio Creativo | ✅ Completo |
| Dark Mode | ✅ Completo |
| Theme toggle | ✅ Completo |
| FOUC prevention (EC-013) | ✅ Completo |
| Phone encoding (EC-001) | ✅ Completo |
| LinkedIn encoding (EC-002) | ✅ Completo |
| E2E Tests | ✅ Completo |
| OG Images | ✅ Completo |
| Responsive | ✅ Completo |

## 📝 Notas Técnicas

### Edge Cases Resueltos

- **EC-001**: Teléfono con `+58` y espacios en `href="tel:"` → URL encoding con `%20` y `%2B`
- **EC-002**: LinkedIn URL con tildes → Pre-encoding `jes%C3%BAs`
- **EC-013**: FOUC (Flash of Unstyled Content) → Script bloqueante en `<head>` antes de React hydration
- **EC-017**: prefers-reduced-motion → Fallback de animaciones
- **EC-006**: Viewport < 320px → Overflow prevention

### Sistema de Theme

- next-themes para gestión de temas
- localStorage para persistencia
- Script inline en layout para evitar FOUC
- Tokens OKLCH para consistencia entre light/dark

---

*Proyecto creado como parte del ecosistema PersonalOS — Sistema operativo personal impulsado por IA.*