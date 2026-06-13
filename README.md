# Entrega del Chef — B2B Landing Pages

Landing pages y activos B2B para generación de leads de Entrega del Chef.

## Estructura del proyecto

```
/entrega-del-chef-b2b
├── docs/                          # Documentación estratégica y branding
│   ├── branding/                  # Guías de identidad visual
│   ├── catalogos/                 # Catálogos de productos
│   ├── estrategia/                # Análisis estratégico y briefs
│   └── referencias/               # Referencias web y competidores
│
├── assets/                        # Activos compartidos del proyecto
│   ├── logos/                     # Versiones del logotipo
│   ├── productos/                 # Fotografías de productos
│   ├── iconos/                    # Iconografía de la marca
│   └── testimonios/               # Fotos de clientes / testimonios
│
├── landing-restaurantes/          # LP 01 — Restaurantes y Cocinas Industriales
│   ├── assets/                    # Activos específicos de esta landing
│   ├── images/                    # Imágenes específicas de esta landing
│   └── components/                # Componentes HTML/CSS de esta landing
│
├── landing-catering/              # LP 02 — Empresas de Catering
│   ├── assets/
│   ├── images/
│   └── components/
│
├── landing-hoteles-casinos/       # LP 03 — Hoteles y Casinos
│   ├── assets/
│   ├── images/
│   └── components/
│
└── prompts/                       # Prompts de trabajo por fase
    ├── analisis/                  # Prompts de análisis estratégico
    ├── wireframes/                # Prompts para wireframes
    └── desarrollo/                # Prompts para desarrollo de código
```

## Principio de independencia

Cada carpeta `landing-*` es completamente autónoma y puede desplegarse de forma
independiente en Cloudflare Pages, Netlify, Vercel o cualquier hosting estático
sin depender de archivos de las otras landings.

## Landing pages

| Landing | Segmento | Directorio |
|---------|----------|------------|
| LP 01 | Restaurantes y Cocinas Industriales | `landing-restaurantes/` |
| LP 02 | Empresas de Catering | `landing-catering/` |
| LP 03 | Hoteles y Casinos | `landing-hoteles-casinos/` |

## Documentación estratégica

Ver `docs/estrategia/` para análisis estratégico completo y briefs por landing.
