# Brief Estratégico — LP 01
## Restaurantes y Cocinas Industriales

**Versión:** 1.0
**Fecha:** Junio 2026
**Directorio de desarrollo:** `landing-restaurantes/`
**Estado:** Aprobado para wireframe y desarrollo

---

## 1. Objetivo de la landing page

**Objetivo de negocio:**
Capturar leads calificados de dueños de restaurantes, chefs ejecutivos y gerentes de operaciones que buscan un proveedor confiable de insumos gastronómicos.

**Objetivo de conversión:**
Que el visitante deje su nombre y número de WhatsApp/teléfono para que un ejecutivo de Entrega del Chef lo contacte dentro de las siguientes 2 horas.

**Métrica de éxito primaria:**
- Tasa de conversión ≥ 4% sobre tráfico de Google Ads
- CPL objetivo: < $150 MXN

**Métrica secundaria:**
- Tiempo en página ≥ 90 segundos
- Scroll depth ≥ 70% de los visitantes

**No es objetivo de esta página:**
- Vender en línea (e-commerce)
- Explicar toda la empresa
- Comunicar los tres segmentos (solo restaurantes)

---

## 2. Audiencia objetivo

### Perfil primario (60% del tráfico esperado)

**"El dueño-operador frustrado"**
- Dueño de 1 a 3 restaurantes
- 35 a 52 años
- Lleva el negocio día a día, conoce cada detalle de la cocina
- Su proveedor actual lo ha fallado al menos una vez este mes
- Busca en Google en la mañana (7-9am antes del servicio) o de noche (10pm-12am después del cierre)
- Usa el teléfono móvil para hacer la búsqueda
- Quiere una solución rápida, no leer un ensayo

**Intención de búsqueda:** Busca en modo problema ("proveedor de alimentos para restaurante confiable") o modo comparación ("mejores distribuidores de insumos"). Ya decidió que necesita cambiar o añadir un proveedor.

### Perfil secundario (30% del tráfico esperado)

**"El chef con poder de compra"**
- Chef ejecutivo o sous chef en restaurante de 100+ cubiertos
- 28 a 45 años
- Responsable de la calidad del insumo
- Le frustra recibir producto que no cumple la especificación
- Valora más la calidad y consistencia que el precio mínimo
- Busca en Google durante su día libre o en las horas tranquilas antes del servicio de comida

### Perfil terciario (10% del tráfico esperado)

**"El gerente de cocina industrial"**
- Opera cocina de hospital, universidad, empresa o comedor corporativo
- Volúmenes más altos, proceso de compra más formal
- Busca proveedor que pueda crecer con él y facturar correctamente

---

## 3. Mapa de la página — Secciones y su función

La landing tiene exactamente **8 secciones funcionales** más el header y footer. Cada sección tiene una función de conversión específica.

```
┌─────────────────────────────────────────┐
│  HEADER MINIMAL (logo + CTA WhatsApp)   │
├─────────────────────────────────────────┤
│  S1 — HERO (atención + propuesta valor) │
├─────────────────────────────────────────┤
│  S2 — DOLORES (reconocimiento del       │
│        problema)                        │
├─────────────────────────────────────────┤
│  S3 — SOLUCIÓN (cómo Entrega del Chef   │
│        resuelve los dolores)            │
├─────────────────────────────────────────┤
│  S4 — CÓMO FUNCIONA (proceso en 3       │
│        pasos, reduce incertidumbre)     │
├─────────────────────────────────────────┤
│  S5 — BENEFICIOS ECONÓMICOS Y           │
│        OPERATIVOS                       │
├─────────────────────────────────────────┤
│  S6 — PRUEBA SOCIAL (testimonios +      │
│        número de clientes)              │
├─────────────────────────────────────────┤
│  S7 — FORMULARIO / CTA PRINCIPAL        │
│        (captura de lead)                │
├─────────────────────────────────────────┤
│  S8 — FAQ (objeciones + SEO)            │
├─────────────────────────────────────────┤
│  FOOTER MINIMAL (datos de contacto,     │
│  aviso de privacidad)                   │
└─────────────────────────────────────────┘
```

---

## 4. Especificación detallada por sección

### HEADER

**Función:** Anclar la marca y dar acceso inmediato a contacto sin bloquear la lectura del hero.

**Elementos:**
- Logo Entrega del Chef (izquierda)
- Un solo CTA (derecha): "Hablar por WhatsApp" → botón verde con ícono de WhatsApp
- Header sticky (se queda al hacer scroll)
- Sin menú de navegación (evita distracción y fuga de leads)

**Principio:** El header de una landing de performance no es el header de un sitio web. No tiene menú.

---

### S1 — HERO

**Función:** Capturar la atención en los primeros 3 segundos. Hacer que el visitante diga "esto es para mí".

**Headline principal (opción A — enfoque en problema):**
> "Tu proveedor de insumos te volvió a fallar."

**Headline principal (opción B — enfoque en promesa):**
> "El proveedor de insumos que tu cocina merece. Siempre a tiempo."

**Recomendación:** Hacer A/B test entre ambos. La opción A tiene más fuerza emocional; la opción B comunica el beneficio directo.

**Subheadline:**
> "Entrega del Chef lleva carnes, lácteos, frutas, verduras y más directo a tu cocina — con la puntualidad y calidad que un restaurante profesional exige."

**CTA principal del hero:**
- Texto: "Solicitar mi primera entrega"
- Acción: Scroll hasta formulario o abrir modal de captura
- Diseño: Botón grande, color de acento de marca, visible sin scroll en móvil

**CTA secundario (opcional):**
- Texto: "Ver catálogo de productos" → link a sección de solución o PDF del catálogo
- Diseño: Texto con flecha, menos prominente que el primario

**Elemento visual del hero:**
- Foto o imagen de una cocina profesional activa (no vacía)
- Alternativa: foto del momento de entrega en cocina (caja con productos + manos de chef revisando)
- Evitar: imágenes de banco de imágenes genéricas con chefs posando en cocinas blancas perfectas
- Prioridad: imagen propia o de un cliente real = credibilidad inmediata

**Indicador de confianza bajo el CTA:**
- "Más de 200 restaurantes confían en nosotros" (ajustar número real)
- "Primera entrega en 48 horas" 
- "Sin contratos de permanencia"

**Consideraciones técnicas del hero:**
- La imagen debe estar en formato WebP, optimizada para LCP < 2.5 segundos
- En móvil: el headline, subheadline y CTA deben ser visibles sin scroll (above the fold)
- Altura del hero en desktop: 85-100vh
- Altura del hero en móvil: contenido completo sin scroll forzoso

---

### S2 — DOLORES (Reconocimiento del problema)

**Función:** Hacer que el visitante sienta que lo entienden. Crear resonancia emocional con su situación real.

**Encabezado de sección:**
> "¿Te suena familiar alguno de estos problemas?"

**Los 4 dolores principales a mostrar (en formato visual, no lista de texto):**

**D1:** "Tu proveedor llegó tarde (otra vez) y tuviste que cambiar el menú de último momento."

**D2:** "Coordinás con 6 proveedores distintos y cada semana hay un problema diferente."

**D3:** "El producto llegó, pero no con la calidad que pediste. Y pedir reposición es un calvario."

**D4:** "No tenés claro cuánto gastás en insumos cada mes. El costeo de tus platillos es una estimación."

**Formato visual sugerido:**
- 4 tarjetas (cards) con ícono ilustrativo + texto corto
- Fondo ligeramente diferenciado del hero (puede ser gris muy suave o color complementario de la marca)
- En móvil: scroll horizontal o stack vertical de cards

**Transición hacia S3:**
Una frase puente que lleva al visitante de reconocer el problema a descubrir la solución:
> "Entrega del Chef existe para que estos problemas sean cosa del pasado."

---

### S3 — SOLUCIÓN (Cómo Entrega del Chef lo resuelve)

**Función:** Presentar la propuesta de valor de forma clara y creíble. Conectar cada dolor con un diferenciador específico.

**Encabezado de sección:**
> "Un solo proveedor. Todo lo que tu cocina necesita."

**Diferenciadores a comunicar (máximo 5):**

**Dif. 1 — Puntualidad garantizada**
"Entregamos en la ventana de tiempo acordada. Si fallamos, te lo compensamos."
→ Ícono: reloj o rayo

**Dif. 2 — Catálogo completo**
"Carnes, lácteos, frutas y verduras, abarrotes, congelados y más. Un solo pedido."
→ Ícono: caja o lista de productos

**Dif. 3 — Calidad consistente**
"Los mismos estándares semana a semana. Nada de sorpresas desagradables al abrir la caja."
→ Ícono: estrella o paloma de calidad

**Dif. 4 — Pedidos digitales**
"Haz tu pedido desde tu teléfono en cualquier momento. Historial, facturas y todo en un solo lugar."
→ Ícono: teléfono o app

**Dif. 5 — Ejecutivo dedicado**
"Un número. Una persona que conoce tu cocina y responde cuando la necesitas."
→ Ícono: auricular o persona

**Formato visual:**
- Grid de 2 o 3 columnas en desktop, stack en móvil
- Ícono + título en negrita + descripción corta (2 líneas máximo)

---

### S4 — CÓMO FUNCIONA (Proceso en 3 pasos)

**Función:** Reducir la incertidumbre del "¿qué pasa después de que lleno el formulario?". Hacer el proceso transparente y no intimidante.

**Encabezado de sección:**
> "Empezar es más fácil de lo que crees"

**Paso 1:**
**"Solicita tu cotización"**
"Llena el formulario o escríbenos por WhatsApp. En menos de 2 horas te contactamos."
→ Ícono: formulario o mensaje

**Paso 2:**
**"Diseñamos tu pedido"**
"Un ejecutivo te asesora para armar la lista de insumos que tu operación necesita."
→ Ícono: lista con palomita

**Paso 3:**
**"Tu primera entrega en 48 horas"**
"Recibís tus insumos directamente en tu cocina. Revisás la calidad. Si todo está bien, empezamos a trabajar juntos."
→ Ícono: camión de entrega

**Elemento de confianza:**
Bajo los pasos, agregar: "Sin contratos forzosos. Sin cuotas de inscripción. Prueba sin riesgo."

---

### S5 — BENEFICIOS ECONÓMICOS Y OPERATIVOS

**Función:** Dar al dueño-operador los argumentos concretos para justificar el cambio de proveedor.

**Encabezado de sección:**
> "Lo que gana tu negocio al trabajar con nosotros"

**Beneficios a presentar (elegir 4-6 según espacio):**

| Beneficio | Descripción |
|-----------|-------------|
| Reducción de merma | Insumos de calidad consistente = menos producto tirado = menor costo real |
| Ahorro de tiempo | De 7 llamadas a 1 pedido. Recupera horas de tu semana |
| Costeo preciso | Precios predecibles = margen controlado = menú bien costeado |
| Mejor flujo de caja | Condiciones de crédito B2B disponibles |
| Sin viajes de emergencia | Cuando el proveedor cumple, tú no tienes que improvisar |
| Escalabilidad | Crece tu negocio sin cambiar de proveedor |

**Formato visual:**
- Formato de lista con íconos o tabla limpia
- Considerar estadísticas o estimaciones: "Los restaurantes que trabajan con nosotros reportan hasta 15% de reducción en costos de insumos"

---

### S6 — PRUEBA SOCIAL

**Función:** Es la sección más importante para vencer la objeción de confianza. Un visitante que no confía, no convierte.

**Encabezado de sección:**
> "Restaurantes que ya dejaron de preocuparse por sus insumos"

#### Sub-sección A — Indicadores de confianza cuantificados

Mostrar en formato visualmente llamativo (números grandes):

```
[200+]                [5 años]              [48h]
Restaurantes activos  De experiencia        Primera entrega
```
*(Ajustar todos los números a los datos reales del negocio)*

#### Sub-sección B — Testimonios

**Formato recomendado para cada testimonio:**
- Foto del cliente (o del restaurante) — la autenticidad importa mucho
- Nombre del cliente + nombre del restaurante + ciudad
- Cita de 2-4 líneas enfocada en UN beneficio específico

**Testimonio ideal #1 — Enfoque en confiabilidad:**
> "Llevaba años cambiando de proveedor cada 3 meses. Con Entrega del Chef llevo ya [X tiempo] y nunca me han fallado en una entrega."
> — [Nombre], Chef ejecutivo de [Restaurante], [Ciudad]

**Testimonio ideal #2 — Enfoque en tiempo ahorrado:**
> "Antes pasaba mis mañanas coordinando 6 proveedores. Ahora hago un solo pedido y me enfoco en la cocina."
> — [Nombre], Dueño de [Restaurante], [Ciudad]

**Testimonio ideal #3 — Enfoque en calidad:**
> "La consistencia en la calidad de la carne cambia todo. Mis platillos salen igual todos los días."
> — [Nombre], Chef de [Restaurante], [Ciudad]

**Nota de implementación:**
Si no hay testimonios reales al momento del lanzamiento, usar el indicador cuantificado + un testimonio con foto real de un cliente que haya dado permiso. Nunca usar fotos de stock como testimonios.

#### Sub-sección C — Logos de clientes (opcional)

Si hay permiso de los clientes: mostrar 6-10 logos de restaurantes conocidos en la zona de cobertura. Si no hay permiso: omitir esta sub-sección y fortalecer los testimonios de texto.

---

### S7 — FORMULARIO / CTA PRINCIPAL

**Función:** La razón de existencia de toda la landing. Capturar el dato de contacto del lead.

**Encabezado del formulario:**
> "Solicita tu cotización sin compromiso"

**Subtexto:**
> "Un ejecutivo te llama en menos de 2 horas en horario de oficina."

**Campos del formulario (mínimo viable):**

| Campo | Tipo | Requerido |
|-------|------|-----------|
| Nombre completo | Texto | Sí |
| WhatsApp / Teléfono | Número | Sí |
| Nombre del restaurante | Texto | Sí |
| Email | Email | No (opcional) |
| ¿Cuántos días a la semana operas? | Selección | No |

**Principio:** Pedir solo lo estrictamente necesario para hacer el primer contacto comercial. Cada campo adicional reduce la tasa de conversión.

**Texto del botón de envío:**
> "Quiero mi cotización →"

**Texto alternativo para botón:** "Hablar con un ejecutivo"

**Bajo el formulario:**
- Candado + "Tu información es confidencial y no se comparte con terceros"
- "Sin contratos forzosos. Sin costo de inscripción."

**Versión móvil del CTA:**
Además del formulario, botón de WhatsApp directo:
> "O escríbenos directo por WhatsApp →" [Botón verde]

**Estado de confirmación (post-envío):**
Página o modal de agradecimiento con:
- Mensaje: "¡Listo! Recibimos tu solicitud."
- Expectativa: "Un ejecutivo te contactará en las próximas 2 horas."
- Siguiente paso sugerido: "Mientras tanto, descarga nuestro catálogo de productos" (opcional)

---

### S8 — FAQ

**Función dual:**
1. **CRO:** Resolver las objeciones que impiden la conversión
2. **SEO:** Capturar búsquedas de cola larga con schema FAQPage

**Encabezado de sección:**
> "Preguntas frecuentes"

**Preguntas y respuestas:**

**P1: ¿Cuál es el pedido mínimo?**
R: "Nuestro pedido mínimo está diseñado para adaptarse a restaurantes de todos los tamaños. Contáctanos para darte la información específica según tu volumen de operación." *(Ajustar con dato real)*

**P2: ¿En qué zonas hacen entregas?**
R: "Actualmente tenemos cobertura en [zonas/ciudades]. Escríbenos para confirmar si llegamos a tu dirección." *(Ajustar con cobertura real)*

**P3: ¿Qué pasa si el producto llega en mal estado?**
R: "Lo reponemos sin costo y sin burocracia. La calidad es nuestra responsabilidad desde que sale nuestro almacén hasta que llega a tu cocina."

**P4: ¿Tienen crédito o debo pagar de contado?**
R: "Ofrecemos condiciones de crédito B2B una vez establecida la relación comercial. Al inicio manejamos pago contra entrega o transferencia previa. Platícanos tu caso."

**P5: ¿Qué productos manejan?**
R: "Manejamos carnes, lácteos, frutas y verduras, abarrotes, congelados y más. El catálogo completo está disponible para ti — solicítalo al contactarnos."

**P6: ¿Cuánto tiempo tarda la primera entrega?**
R: "Una vez aprobado tu primer pedido, hacemos la entrega en un plazo de 48 horas hábiles."

**P7: ¿Necesito firmar contrato?**
R: "No. Trabajamos con pedidos individuales. Puedes hacer una prueba sin ningún compromiso de permanencia."

**Formato visual:**
- Acordeón (accordion) expandible
- Máximo 7-8 preguntas
- Implementar schema `FAQPage` en JSON-LD para SEO

---

### FOOTER

**Función:** Dar datos de contacto oficiales y cumplir con obligaciones legales sin distraer del objetivo de conversión.

**Elementos:**
- Logo Entrega del Chef
- Teléfono / WhatsApp de contacto
- Email de contacto
- Dirección fiscal (si aplica y es relevante para la credibilidad)
- Link: Aviso de Privacidad
- Copyright: © 2026 Entrega del Chef

**Lo que NO va en el footer de una landing de performance:**
- Links a redes sociales (fuga de tráfico)
- Menú de navegación extenso
- Mapa de sitio

---

## 5. CTA flotante (elemento persistente)

**En móvil:** Barra inferior fija con dos opciones:
```
[  📞 Llamar  ] [  💬 WhatsApp  ]
```

**En desktop:** Botón flotante de WhatsApp en esquina inferior derecha (estilo FAB).

**Comportamiento:** Aparece después de que el usuario hace scroll más allá del hero (scroll depth > 20%).

---

## 6. Decisiones de diseño estratégicas

### Paleta visual
- Usar paleta oficial del branding (pendiente de recibir guía)
- Recomendación de dirección: Colores que transmitan profesionalismo, confianza y frescura de producto alimenticio
- Evitar: paletas que remitan a fast food o supermercado masivo

### Tipografía
- Usar tipografías del branding oficial
- Jerarquía clara: H1 (48-64px desktop / 32-40px móvil), H2 (32-40px / 24-28px), Body (16-18px)

### Fotografía
- Prioridad 1: Imágenes reales de la operación (entregas, productos, equipo)
- Prioridad 2: Fotografía profesional de productos del catálogo
- Prioridad 3: Imágenes de cocinas profesionales reales (no stock genérico)
- Prohibido: Imágenes de banco de imágenes con personas en traje de chef posando

### Iconografía
- Estilo consistente (línea o sólido, elegir uno)
- Tamaño uniforme en todas las secciones

---

## 7. Requisitos técnicos

### Performance
- LCP (Largest Contentful Paint): < 2.5 segundos
- CLS (Cumulative Layout Shift): < 0.1
- FID / INP: < 100ms
- Imágenes: formato WebP con fallback JPEG
- JavaScript: mínimo, solo lo estrictamente necesario

### Dispositivos objetivo
- Móvil (iOS/Android): 65% del tráfico esperado — prioridad absoluta
- Desktop: 35% del tráfico
- Approach: Mobile-first en todo el diseño y desarrollo

### Analytics y tracking
- Google Analytics 4: evento de conversión en submit del formulario
- Google Tag Manager: implementar antes del lanzamiento
- Google Ads: conversión vinculada al submit para optimización de campaña
- Meta Pixel: si se van a hacer campañas de retargeting en Meta Ads
- Hotjar o Microsoft Clarity: heatmaps y grabación de sesiones desde día 1

### SEO
- Meta title: "Proveedor de Insumos para Restaurantes | Entrega del Chef"
- Meta description: "Distribuidor B2B de insumos gastronómicos con entrega puntual a tu cocina. Carnes, lácteos, verduras y más. Primera entrega en 48 horas. Sin contratos forzosos."
- URL: `/restaurantes` o subdominio `restaurantes.entregadelchef.com`
- Schema markup: LocalBusiness + FAQPage
- Open Graph para compartir en redes (aunque no es el canal principal)

### Formulario
- Envío asíncrono (sin recargar la página)
- Confirmación visual inmediata al enviar
- Notificación en tiempo real al equipo de ventas (email + WhatsApp Business API o Zapier)
- Almacenamiento en CRM o base de datos desde día 1

---

## 8. Elementos que NO debe tener esta landing

Para mantener el foco en la conversión:

- ❌ Menú de navegación completo
- ❌ Links a redes sociales (salvo en footer)
- ❌ Sección "Sobre nosotros" extensa
- ❌ Blog o artículos relacionados
- ❌ Catálogo de precios completo (lleva a parálisis de análisis)
- ❌ Video autoreproducible con sonido
- ❌ Pop-up de bienvenida (ya es un pop-up de conversión en sí misma)
- ❌ Chat en vivo genérico (reemplazarlo con botón de WhatsApp específico)
- ❌ Contadores de descuento ficticios (dañan la credibilidad en B2B)

---

## 9. Hipótesis de testing (post-lanzamiento)

Una vez lanzada la landing, las siguientes hipótesis deben testearse en orden de impacto potencial:

| # | Hipótesis | Test | Métrica |
|---|-----------|------|---------|
| H1 | El headline enfocado en problema convierte más que el enfocado en solución | A/B test S1 headline | CTR al formulario |
| H2 | El formulario con 3 campos convierte más que con 5 campos | A/B test formulario | Tasa de submit |
| H3 | Mostrar el número de teléfono del ejecutivo en el header sube conversión | A/B test header | Llamadas + formulario |
| H4 | El botón "Hablar por WhatsApp" convierte más que "Solicitar cotización" | A/B test CTA text | Leads totales |
| H5 | Mostrar precio de referencia (o rango) reduce el abandono | A/B test S3 | Tiempo en página + conversión |

---

## 10. Checklist pre-lanzamiento

### Contenido
- [ ] Headline y textos revisados y aprobados
- [ ] Testimonios reales con permiso firmado
- [ ] Número de clientes verificado y actualizado
- [ ] FAQ con respuestas actualizadas (cobertura, mínimos, productos)
- [ ] Información de contacto verificada
- [ ] Aviso de privacidad redactado y publicado

### Diseño
- [ ] Branding consistente con guía oficial
- [ ] Imágenes propias o con licencia
- [ ] Versión móvil aprobada
- [ ] Versión desktop aprobada
- [ ] CTA flotante funcionando en móvil

### Técnico
- [ ] LCP < 2.5s verificado con PageSpeed Insights
- [ ] Formulario funcionando y notificaciones activas
- [ ] GA4 con evento de conversión disparando correctamente
- [ ] Google Ads conversion tracking verificado
- [ ] Schema markup validado con Rich Results Test de Google
- [ ] Meta tags revisados
- [ ] Aviso de privacidad con CFDI vinculado (si aplica)
- [ ] HTTPS activo

### Pre-lanzamiento Ads
- [ ] Campaña de Google Ads configurada con la URL de esta landing
- [ ] Extensiones de anuncio activadas
- [ ] Audiencia de remarketing creada
- [ ] Presupuesto diario definido
- [ ] Conversiones vinculadas en Google Ads

---

## 11. Personas que deben revisar y aprobar este brief

| Rol | Responsabilidad en este brief |
|-----|-------------------------------|
| Dueño/Director | Aprobar mensajes clave, testimonios, condiciones comerciales |
| Equipo de ventas | Validar que el flujo de leads es manejable operativamente |
| Diseñador | Traducir el brief a wireframe y diseño visual |
| Desarrollador | Validar requisitos técnicos y confirmar tecnología de implementación |
| Responsable de Google Ads | Alinear mensajes de la landing con los anuncios de la campaña |

---

*Documento estratégico — Entrega del Chef B2B | LP 01 Restaurantes*
*Siguiente paso: Wireframe de baja fidelidad por sección*
