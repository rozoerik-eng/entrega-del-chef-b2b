# Brief Estratégico — LP 01
## Restaurantes y Cocinas Industriales

**Versión:** 2.0 (revisada con materiales reales)
**Fecha:** Junio 2026
**Directorio de desarrollo:** `landing-restaurantes/`
**URL objetivo:** `entregadelchef.com/restaurantes` o subdominio en Cloudflare Pages
**Fuentes:** Manual de Marca V3 · Estrategia Google Ads B2B · Web actual entregadelchef.com · Imágenes de referencia

---

## 1. Contexto estratégico (leer antes de tocar cualquier elemento)

### Qué es Entrega del Chef
Empresa colombiana (Bogotá) que fabrica y distribuye **platos listos y ultracongelados** sin conservantes, sin almidones, sin azúcares añadidos. El proceso de uso es: descongelar → calentar 10 minutos → servir. Tiene +30 SKUs en líneas de pollo, cerdo, pescado y vegetariana.

### Por qué esta landing existe
El sitio actual (entregadelchef.com, WordPress + WooCommerce) es 100% e-commerce D2C orientado al consumidor individual keto. Un gerente de restaurante que llega al sitio hoy no encuentra ningún mensaje que le hable. La estrategia Google Ads no puede funcionar sin una página B2B dedicada. **Esta landing es el destino de todos los anuncios del Grupo 1 (Restaurantes).**

### Qué NO es esta página
No es un carrito de compras. No es una tienda online. Es una página de captura de leads B2B cuyo único objetivo es que el visitante haga clic al WhatsApp y empiece una conversación de cotización.

---

## 2. Objetivo

**Objetivo de negocio:**
Que dueños de restaurantes, chefs y gerentes de cocina en Colombia — buscando en Google activamente — entren a conversar por WhatsApp para cotizar platos listos por volumen.

**Métrica de conversión primaria:**
Clic al botón de WhatsApp → conversación iniciada.

**Benchmarks objetivo (confirmados en estrategia de Ads):**
- Tasa de conversión: ≥ 5% (clic → WhatsApp)
- CPL objetivo: < $40.000 COP por conversación iniciada
- % leads realmente B2B: > 70% de las conversaciones

**Número de WhatsApp:** +57 319 6583037
**URL de WhatsApp con mensaje pre-cargado:**
```
https://wa.me/573196583037?text=Hola%2C+soy+de+un+restaurante+y+quiero+cotizar+pedidos+al+por+mayor.
```

---

## 3. Audiencia objetivo

### Perfil primario (60% del tráfico)

**"El dueño-operador con problema de personal"**
- Dueño de 1-3 restaurantes en Bogotá o ciudades principales
- 35-52 años, opera el negocio día a día
- Su problema inmediato: el cocinero falló, el plato no sale consistente, la nómina de cocina destruye el margen
- Busca en Google desde el teléfono en horario de mañana o tarde noche
- Intención: ya decidió que necesita una solución, busca alternativas al status quo

**Palabras clave por las que llega (del documento de estrategia):**
- `"proveedor comida congelada para restaurantes bogotá"`
- `"alimentos ultracongelados para restaurantes"`
- `"comida preparada congelada al por mayor bogotá"`
- `"proveedor platos listos para restaurantes"`
- `"alimentos sin chef especializado restaurante"`
- `"reducir costos operativos cocina restaurante"`

### Perfil secundario (30% del tráfico)

**"El chef ejecutivo que quiere optimizar"**
- Chef o gerente de cocina en restaurante de 100+ cubiertos
- 28-45 años, busca complementar carta con platos listos de alta calidad
- Valora que el producto sea sin conservantes (no "congelado de supermercado")
- Busca durante su día libre o en las horas quietas antes del servicio

### Perfil terciario (10% del tráfico)

**"El gerente de cocina industrial"**
- Opera cocina de comedor corporativo, universidad u hospital
- Necesita volúmenes altos, factura electrónica, proveedor formal
- Ciclo de compra más largo pero ticket más alto

---

## 4. Branding aplicado a esta landing

### Colores
```css
/* Paleta oficial — Manual de Marca V3 */
--verde-principal:     #559C33;   /* Fondo hero, botones primarios, header */
--verde-medio:         #89B15F;   /* Fondos secundarios, íconos */
--verde-claro:         #DAE4CB;   /* Fondos de secciones alternadas */
--naranja-acento:      #F59B1A;   /* CTAs principales, números grandes, énfasis */
--naranja-claro:       #FEE7CB;   /* Badges, tags, fondos de destacados */
--negro:               #000000;   /* Texto principal */
--blanco:              #FFFFFF;   /* Texto sobre verde, fondos limpios */
```

### Aplicación de color por sección
- **Header y hero:** fondo verde `#559C33`, texto e ícono del logo en blanco
- **Botones WhatsApp:** fondo naranja `#F59B1A`, texto blanco
- **Secciones de contenido:** alternancia entre blanco y verde claro `#DAE4CB`
- **Números de impacto:** naranja `#F59B1A`, tamaño grande
- **Footer:** fondo negro `#000000`, texto blanco

### Tipografía web (equivalente a Myriad Pro)
- **Headlines:** Barlow Condensed Bold o Oswald Bold (Google Fonts)
- **Subheadlines:** Barlow Condensed Regular o Oswald Regular
- **Cuerpo de texto:** Inter o Open Sans, 16-18px, color negro

### Logo
Usar versión blanca del logo sobre fondo verde `#559C33` en el header.
El ícono es el sombrero de chef + cloche, estilo outline en blanco.

---

## 5. Mapa de secciones

```
┌─────────────────────────────────────────────┐
│  HEADER sticky                              │
│  Logo blanco | CTA: "Cotizar por WhatsApp"  │
├─────────────────────────────────────────────┤
│  S1 — HERO                                  │
│  Headline + subheadline + CTA WhatsApp      │
│  Imagen: producto en entorno de cocina      │
├─────────────────────────────────────────────┤
│  S2 — DOLORES                               │
│  "¿Esto te suena familiar?"                 │
│  4 tarjetas con problemas reales            │
├─────────────────────────────────────────────┤
│  S3 — SOLUCIÓN                              │
│  "Así funciona Entrega del Chef"            │
│  Proceso 3 pasos adaptado a B2B             │
├─────────────────────────────────────────────┤
│  S4 — PRODUCTO                              │
│  "+30 platos listos para tu restaurante"    │
│  Grid de líneas de producto con fotos       │
├─────────────────────────────────────────────┤
│  S5 — BENEFICIOS                            │
│  Argumentos económicos y operativos         │
├─────────────────────────────────────────────┤
│  S6 — PRUEBA SOCIAL                         │
│  Testimonios B2B + indicadores cuantificados│
├─────────────────────────────────────────────┤
│  S7 — CTA PRINCIPAL                         │
│  Botón WhatsApp + número visible + garantía │
├─────────────────────────────────────────────┤
│  S8 — FAQ                                   │
│  Objeciones resueltas (SEO + CRO)           │
├─────────────────────────────────────────────┤
│  FOOTER                                     │
│  Datos de contacto + aviso de privacidad    │
└─────────────────────────────────────────────┘
```

---

## 6. Especificación detallada por sección

### HEADER

**Elementos:**
- Logo Entrega del Chef (versión blanca, izq.)
- Fondo: verde `#559C33`
- CTA único (der.): botón naranja `#F59B1A` → "Cotizar por WhatsApp" → abre WhatsApp
- Sticky (fijo al hacer scroll)
- Sin menú de navegación

**Principio:** La landing de performance no tiene menú. Cada link que lleva a otro lugar es un lead que se pierde.

---

### S1 — HERO

**Función:** Capturar la atención en 3 segundos. El visitante debe pensar "esto es exactamente lo que necesito."

**Headline (versión A — enfoque en el problema operativo):**
> "Sirve platos de calidad. Sin depender de un chef."

**Headline (versión B — enfoque en el beneficio principal):**
> "Platos listos en 10 minutos para tu restaurante. Sin conservantes."

**Hacer A/B test.** La opción A tiene mayor tensión emocional (problema); la B comunica directamente el diferenciador.

**Subheadline:**
> "Entrega del Chef suministra platos ultracongelados listos para servir — pollo, cerdo, pescado y más — directamente a tu restaurante. Porciones estandarizadas, sin almidones, sin azúcares añadidos."

**CTA principal:**
- Texto: "Cotizar para mi restaurante →"
- Color: naranja `#F59B1A`
- Acción: abrir WhatsApp con mensaje pre-cargado B2B
- Tamaño: grande, clickeable en móvil con pulgar

**Imagen del hero:**
- Prioridad 1: foto real de producto Entrega del Chef en bandeja o empaque institucional (no el empaque al vacío D2C individual)
- Prioridad 2: foto de cocina profesional activa con uno de sus platos en preparación
- Prioridad 3: foto del producto ya servido en plato de restaurante
- Evitar absolutamente: imágenes de banco con chefs posando en cocinas perfectas

**Indicadores de confianza debajo del CTA (barra horizontal):**
```
[✓ Sin conservantes]  [✓ Listo en 10 minutos]  [✓ Cadena de frío]  [✓ Factura electrónica]
```

**Consideraciones técnicas:**
- Imagen en formato WebP, < 200KB, LCP < 2.5s
- En móvil: headline (32px), subheadline (16px) y CTA visible sin scroll
- Fondo: verde `#559C33` o imagen de fondo semitransparente

---

### S2 — DOLORES

**Función:** Resonancia emocional. El visitante siente que lo entienden.

**Encabezado:** "¿Alguno de estos problemas te suena familiar?"

**Las 4 tarjetas de dolor:**

**Tarjeta 1 — Personal:**
Ícono: persona con X
"Tu cocinero no llegó y el servicio empieza en 2 horas."

**Tarjeta 2 — Inconsistencia:**
Ícono: platos diferentes
"El mismo plato sale diferente según quién esté en cocina."

**Tarjeta 3 — Costo:**
Ícono: calculadora / dinero
"Tu margen se va en nómina de cocineros para tener 5 platos en el menú."

**Tarjeta 4 — Merma:**
Ícono: contenedor / basura
"Compraste materia prima. Sobró el 30%. Ya no sirve. Pérdida directa."

**Formato:** 4 cards en grid 2x2 (desktop) / stack (móvil). Fondo verde claro `#DAE4CB`, ícono en verde `#559C33`, texto negro.

**Transición:** "Entrega del Chef existe para que ninguno de estos sea tu problema mañana."

---

### S3 — CÓMO FUNCIONA (SOLUCIÓN)

**Función:** Claridad total sobre el producto y su uso en cocina profesional. Reducir incertidumbre.

**Encabezado:** "Más sencillo de lo que imaginas"

**Proceso en 3 pasos (adaptado a B2B):**

**Paso 1 — Cotiza y pide**
"Escríbenos por WhatsApp. En menos de 2 horas te confirmamos disponibilidad y precio por volumen."
Ícono: teléfono con WhatsApp / mensaje

**Paso 2 — Recibe en tu cocina**
"Entrega directa a tu restaurante. Producto ultracongelado, empacado al vacío, cadena de frío garantizada."
Ícono: caja de entrega / camión

**Paso 3 — Sirve en 10 minutos**
"Calienta. No cocines. Cada plato sale igual, siempre, sin importar quién esté en el turno."
Ícono: sartén / reloj

**Bajo el proceso:**
> "Sin contratos forzosos. Sin cuota de inscripción. Solicita tu primera entrega y prueba el producto."

**Color de sección:** Fondo blanco, íconos y números en naranja `#F59B1A`.

---

### S4 — PRODUCTO

**Función:** Mostrar la amplitud del catálogo. Que el visitante vea que hay variedad suficiente para su menú.

**Encabezado:** "+30 platos listos para servir en tu restaurante"

**Subheadline:** "Sin conservantes · Sin almidones · Sin azúcares añadidos · Compatibles con menús saludables y keto"

**Líneas de producto a mostrar (basadas en el sitio actual):**

**Línea Pollo**
- Texto: "Múltiples recetas de pollo preparado y congelado al vacío"
- Foto: imagen del producto en empaque institucional o servido

**Línea Cerdo y Pescado**
- Ejemplos confirmados: Costillas de cerdo con salsa BBQ · Cerdo desmechado con hojas · Pescado meunière
- Foto: plato servido

**Línea Vegetariana**
- Texto: "Opciones plant-based listas para ampliar tu oferta"
- Foto: plato vegetariano

**Repostería**
- Texto: "Para desayunos, snacks y opciones de postre sin complicación"
- Foto: producto de repostería

**CTA en sección:**
Botón naranja: "Ver catálogo completo por WhatsApp →"
→ Abre WhatsApp con: `"Hola, quiero ver el catálogo completo para mi restaurante."`

**Nota de implementación:**
Al recibir el catálogo en formato digital, usar las fotos reales de los productos. Evitar fotos de stock. Las fotos de productos del sitio actual (https://entregadelchef.com) son las referencias visuales a usar.

---

### S5 — BENEFICIOS

**Función:** Argumentos de ROI para que el dueño-operador justifique el cambio ante sí mismo.

**Encabezado:** "Lo que gana tu restaurante"

**6 beneficios a mostrar (formato íconos + cifras cuando aplique):**

| # | Beneficio | Copy |
|---|-----------|------|
| 1 | Hasta 40% menos en costo de mano de obra por plato | "Sin técnica de cocina avanzada requerida para servir platos complejos" |
| 2 | Cero merma | "Compras lo que necesitas. Congelas el resto. No botás nada." |
| 3 | Consistencia garantizada | "Mismo sabor. Mismas porciones. Siempre. Sin depender del turno." |
| 4 | Menú ampliado sin contratar | "Ofrece cerdo desmechado, pescado meunière y más sin un chef especializado" |
| 5 | Opción saludable en tu carta | "Sin conservantes, sin azúcares. La opción keto que tus clientes piden." |
| 6 | Listo en 10 minutos | "Velocidad de servicio en hora pico sin sacrificar calidad" |

**Formato:** Grid 2x3 (desktop) / stack (móvil). Número grande en naranja `#F59B1A` + texto descriptivo.

---

### S6 — PRUEBA SOCIAL

**Función:** La sección más importante para vencer la desconfianza. Un lead que no confía, no convierte.

**Encabezado:** "Restaurantes que ya sirven platos Entrega del Chef"

#### Sub-sección A — Números de impacto

```
[  5+  ]          [  +30  ]         [  10   ]
Años en el mercado  Platos disponibles  Minutos para servir
```
*(Ajustar "5+ años" según fecha de fundación real: 2021 = 4-5 años)*

#### Sub-sección B — Testimonios B2B

**IMPORTANTE:** Los testimonios actuales del sitio (Ximena Neira, Roberto Zarama, Natalia Mejía) son 100% C2C keto. NO usar en esta landing. Solicitar al cliente testimonios de restauranteros reales.

**Formato ideal para cada testimonio:**
- Foto del restaurante o del dueño/chef
- Nombre completo + nombre del restaurante + ciudad
- Cita de 2-3 líneas enfocada en 1 beneficio concreto B2B

**Testimonio tipo A — Sobre consistencia:**
> "Desde que usamos Entrega del Chef en el cerdo desmechado, el plato sale igual en todos los turnos. Antes dependía de quién cocinara."
> — [Nombre], Dueño de [Restaurante], Bogotá

**Testimonio tipo B — Sobre costo operativo:**
> "Redujimos la dependencia de cocineros especializados y el margen en esos platos mejoró. El producto llegó a tiempo y la calidad es consistente."
> — [Nombre], Chef Ejecutivo, [Restaurante], [Ciudad]

**Testimonio tipo C — Sobre la opción saludable:**
> "Nuestros clientes pedían opciones keto. Con Entrega del Chef los añadimos al menú sin cambiar nada en la cocina."
> — [Nombre], Gerente, [Restaurante], [Ciudad]

**Si no hay testimonios B2B disponibles al lanzamiento:**
Usar solo los números de impacto + una cita del fundador sobre el estándar de calidad para negocios. No usar testimonios C2C en la landing B2B.

---

### S7 — CTA PRINCIPAL

**Función:** La razón de existencia de toda la landing.

**Encabezado:** "¿Listo para simplificar tu cocina?"

**Subheadline:** "Escríbenos ahora y recibe tu primera cotización en menos de 2 horas."

**Botón principal (grande, ancho completo en móvil):**
```
💬  Cotizar por WhatsApp
```
Color fondo: naranja `#F59B1A`
Color texto: blanco
Tamaño: mínimo 56px de altura, texto 18px

**Alternativa de contacto:**
```
📞  O llámanos: +57 319 6583037
```

**Mensaje pre-cargado en WhatsApp (fuerza el filtro B2B desde el primer mensaje):**
```
Hola, soy [nombre] de [restaurante/negocio] en [ciudad] y quiero conocer sus condiciones 
para pedidos de platos congelados al por mayor.
```

**Texto de confianza debajo del botón:**
> "Atendemos exclusivamente a restaurantes, hoteles, empresas de catering y distribuidores."
> "Sin contratos de permanencia. Sin costos de inscripción."

**Nota CRO:** No usar formulario de email como CTA principal. La estrategia define WhatsApp como conversión principal. Si se quiere captura de email como respaldo, usar un campo opcional secundario muy discreto.

---

### S8 — FAQ

**Función dual:** Resolver objeciones (CRO) + posicionar en búsquedas long-tail (SEO con schema FAQPage).

**Encabezado:** "Preguntas frecuentes"

**8 preguntas y respuestas:**

**P1: ¿Son realmente platos sin conservantes?**
R: "Sí. Toda nuestra línea de carnes listas está elaborada sin conservantes, sin almidones y sin azúcares añadidos. Son productos cocidos, congelados y empacados al vacío — la conservación es por frío, no por químicos."

**P2: ¿Cómo sé que la calidad es buena si son congelados?**
R: "El ultracongelado es la técnica que usan los mejores restaurantes del mundo para mantener calidad. Nuestros platos se congelan inmediatamente después de su preparación para preservar textura y sabor. El resultado en el plato es el mismo de siempre."

**P3: ¿Cuánto tarda el primer pedido en llegar?**
R: "Una vez cotizado y confirmado el primer pedido, hacemos la entrega según nuestra ruta en tu zona. Escríbenos por WhatsApp y te confirmamos el tiempo exacto para tu ubicación en Bogotá."

**P4: ¿Tienen pedido mínimo?**
R: "Sí. Trabajamos con pedidos mínimos por volumen para asegurar la eficiencia logística. Escríbenos para darte la información específica según el tipo de negocio y los platos que te interesan."

**P5: ¿Cuántos platos distintos tienen disponibles?**
R: "Más de 30 platos en líneas de pollo, cerdo, pescado y vegetariana. También manejamos repostería. Escríbenos y te enviamos el catálogo completo con disponibilidad actual."

**P6: ¿Hacen entrega fuera de Bogotá?**
R: "Tenemos cobertura en Colombia. Escríbenos con tu ciudad para confirmar disponibilidad y costos de envío a tu ubicación."

**P7: ¿Dan factura electrónica?**
R: "Sí. Emitimos factura electrónica para tu operación comercial."

**P8: ¿Tienen platos compatibles con menús saludables o keto?**
R: "Toda nuestra línea está elaborada sin azúcares añadidos, sin almidones y sin conservantes. Son compatibles con menús keto, low-carb y libre de ultraprocesados — una ventaja competitiva para restaurantes que quieren ofrecer opciones saludables sin complejidad en cocina."

**Implementar schema JSON-LD tipo FAQPage para todas las preguntas.**

---

### FOOTER

**Elementos obligatorios:**
- Logo Entrega del Chef (versión verde sobre blanco)
- WhatsApp: +57 319 6583037 (clic directo)
- Email: info@entregadelchef.com
- Dirección: Calle 77 # 69R - 16, Bogotá - Colombia
- Link: Aviso de Privacidad
- Copyright: © 2026 Entrega del Chef

**NO incluir en footer de landing B2B:**
- Links a redes sociales (fuga de tráfico hacia perfiles C2C keto)
- Menú de navegación hacia la tienda online D2C
- Link a "Tienda" o "Mis Pedidos" del WooCommerce

---

## 7. CTA flotante (elemento persistente)

**En móvil:** Barra inferior fija permanente:
```
┌────────────────────────────────────────────────┐
│  💬  Cotizar por WhatsApp     📞  Llamar       │
└────────────────────────────────────────────────┘
```
Fondo naranja `#F59B1A`, texto blanco.

**En desktop:** Botón flotante de WhatsApp (FAB) en esquina inferior derecha.

**Comportamiento:** Aparece luego del 20% del scroll.

---

## 8. Decisiones de diseño estratégicas

### Lo que el sitio actual hace MAL (y esta landing no debe replicar)
Revisando las capturas de entregadelchef.com:

| Sitio actual (D2C) | Esta landing (B2B) |
|--------------------|--------------------|
| Hero: "COMBOS A PRECIOS ESPECIALES" | Hero: propuesta de valor para restaurantes |
| Nav con "Tienda", "Carrito" | Sin menú, sin carrito |
| CTA: "Añadir al carrito" | CTA: "Cotizar por WhatsApp" |
| Proceso: "Saca del congelado → para ti" | Proceso: "Pide → Recibe → Sirve en tu negocio" |
| Testimonios de personas en dieta keto | Testimonios de restauranteros y chefs |
| Banner: "Opciones para alimentación Keto" | Banner: "Soluciones para cocinas profesionales" |
| Precios unitarios visibles ($5.XXX/plato) | Sin precios unitarios — cotización por volumen |
| Facebook + Instagram prominentes | Sin redes sociales en el CTA |

### Paleta aplicada a secciones
| Sección | Fondo | Texto principal | Acento |
|---------|-------|-----------------|--------|
| Header | #559C33 verde | #FFFFFF blanco | — |
| Hero | #559C33 verde o imagen | #FFFFFF blanco | #F59B1A naranja (CTA) |
| Dolores | #DAE4CB verde claro | #000000 negro | #559C33 verde |
| Cómo funciona | #FFFFFF blanco | #000000 negro | #F59B1A naranja |
| Producto | #DAE4CB verde claro | #000000 negro | #559C33 verde |
| Beneficios | #FFFFFF blanco | #000000 negro | #F59B1A naranja |
| Prueba social | #559C33 verde | #FFFFFF blanco | #F59B1A naranja |
| CTA principal | #F59B1A naranja | #FFFFFF blanco | — |
| FAQ | #FFFFFF blanco | #000000 negro | #559C33 verde |
| Footer | #000000 negro | #FFFFFF blanco | — |

---

## 9. Requisitos técnicos

### Performance
- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): < 0.1
- Imágenes: WebP con fallback JPEG
- Nada de Elementor — landing estática HTML/CSS/JS mínimo

### Mobile-first
- 65%+ del tráfico viene de móvil (confirmado por la estrategia de Ads)
- El hero debe ser completamente visible sin scroll en pantalla de 390px
- Botón de WhatsApp debe ser alcanzable con el pulgar (parte inferior de pantalla)

### Tracking (configuración confirmada en estrategia de Ads)

**Conversión 1 — Clic al botón WhatsApp (principal)**
- En GTM: Trigger → Clic en enlace que contiene `wa.me/`
- Tag: Conversión de Google Ads "Clic WhatsApp B2B"
- Valor: $50.000 COP por conversión
- Ventana: 30 días

**Conversión 2 — Clic en número de teléfono**
- Trigger: Clic en enlace `tel:` del sitio
- Tag: Conversión Google Ads "Llamada desde landing"

**GA4:**
- Evento `generate_lead` al hacer clic en WhatsApp
- Evento `scroll` a 25%, 50%, 75%, 100%

**Herramientas de análisis:**
- Microsoft Clarity (gratis) o Hotjar — heatmaps desde día 1
- Activar antes del lanzamiento de Ads

### SEO
- Meta title: `"Platos Congelados Listos para Restaurantes en Bogotá | Entrega del Chef"`
- Meta description: `"Platos ultracongelados listos para servir en tu restaurante. Sin conservantes, sin chef especializado. +30 recetas disponibles. Cotiza por WhatsApp hoy."`
- URL canónica: `entregadelchef.com/restaurantes`
- Schema JSON-LD: LocalBusiness + FAQPage
- Open Graph: imagen del producto, título y descripción B2B

---

## 10. Coherencia Ads → Landing (crítico para Quality Score)

Los anuncios RSA del Grupo 1 (del documento de estrategia) usan estos mensajes:
- "Sin Chef Especializado Necesario"
- "Platos Listos Para Tu Restaurante"
- "Reduce Costos De Tu Cocina"
- "Alimentos Congelados Al Por Mayor"
- "Cotiza Precios Mayoristas Hoy"
- "Cadena De Frío Garantizada"

**Estos términos DEBEN aparecer textualmente en la landing** — en el hero o en los primeros 2 scrolls. Si el anuncio dice "Sin Chef Especializado" y la landing no menciona eso, el Quality Score baja y el CPC sube.

URL del anuncio: `entregadelchef.com/restaurantes` (o equivalente en Cloudflare Pages)
URL display del anuncio: `entregadelchef.com/Restaurantes`

---

## 11. Elementos que esta landing NO debe tener

- ❌ Menú de navegación (ni links al sitio D2C)
- ❌ Carrito de compras o precios unitarios individuales
- ❌ Testimonios de consumidores individuales keto
- ❌ Palabras: "dieta", "keto personal", "bajar de peso", "para ti"
- ❌ Links a redes sociales en posición prominente
- ❌ Precios unitarios (eso atrae C2C, no B2B)
- ❌ "Comprar ahora" como CTA (implica ecommerce individual)
- ❌ Video con reproducción automática con sonido
- ❌ Pop-up de bienvenida
- ❌ Contadores regresivos o urgencia falsa

---

## 12. Hipótesis A/B testing (post-lanzamiento)

| # | Hipótesis | Variable | Métrica |
|---|-----------|----------|---------|
| H1 | "Sin depender de un chef" convierte más que "Listo en 10 minutos" | Headline S1 | CTR al botón WA |
| H2 | Mostrar precios de referencia por volumen sube conversión | S4 producto | % conversión |
| H3 | 4 dolores > 3 dolores en la sección S2 | Número de tarjetas | Scroll depth + WA clic |
| H4 | "Cotizar para mi restaurante" > "Cotizar por WhatsApp" | Texto del CTA | CTR botón |
| H5 | Video de 30s del producto sube conversión vs. foto estática | Hero visual | % conversión |

---

## 13. Checklist pre-lanzamiento

### Contenido
- [ ] Headlines revisados y aprobados por el cliente
- [ ] Testimonios B2B conseguidos y con permiso del cliente
- [ ] Catálogo actualizado con disponibilidad real
- [ ] Número de WhatsApp verificado y activo
- [ ] Mensaje pre-cargado de WhatsApp probado en iOS y Android
- [ ] FAQ con respuestas aprobadas (tiempos de entrega, mínimos, cobertura real)

### Diseño
- [ ] Paleta `#559C33` / `#F59B1A` aplicada correctamente
- [ ] Logo versión blanca sobre verde en header
- [ ] Fotos del producto (no stock genérico)
- [ ] Versión móvil aprobada (390px y 414px)
- [ ] Versión desktop aprobada (1280px y 1440px)
- [ ] Botón WhatsApp flotante funcionando en móvil

### Técnico
- [ ] LCP < 2.5s verificado con PageSpeed Insights
- [ ] GTM instalado y triggers activos
- [ ] Conversión "Clic WhatsApp B2B" disparando en Google Ads
- [ ] GA4 con evento `generate_lead` activo
- [ ] Schema FAQPage validado en Rich Results Test
- [ ] Meta title y description revisados
- [ ] Aviso de Privacidad en footer con link activo
- [ ] HTTPS activo

### Alineación con Ads
- [ ] URL de destino en Google Ads apunta a esta landing (no a homepage)
- [ ] Términos del anuncio ("sin chef", "platos listos", "cotiza") aparecen en la landing
- [ ] Lista de keywords negativas cargada en la cuenta antes del lanzamiento
- [ ] Conversión vinculada en Google Ads (no importada de GA4)
- [ ] Campaña en Bogotá D.C. únicamente — Fase 1

---

*Brief estratégico — Entrega del Chef B2B | LP 01 Restaurantes y Cocinas Industriales | Versión 2.0*
*Siguiente paso: Wireframe de baja fidelidad → Diseño visual → Desarrollo HTML estático*
