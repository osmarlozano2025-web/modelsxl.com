# MODEL SxL - Guía de Estilo Web

## Paleta de Colores

### Colores Principales
- **Fondo Principal**: `#0a0a0a` - Negro profundo
- **Fondo Secundario**: `#1a1a1a` - Negro más claro
- **Fondo Secciones**: `#0f0f0f` - Negro medio

### Colores de Acento
- **Dorado Principal**: `#d4af37`
- **Dorado Claro**: `#f4d03f`
- **Degradado Dorado**: `linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)`

### Colores de Texto
- **Texto Principal**: `#ffffff` - Blanco
- **Texto Secundario**: `#b0b0b0` - Gris claro
- **Títulos con Gradiente**: `linear-gradient(135deg, #ffffff 0%, #d4af37 100%)`

### Efectos y Transparencias
- **Fondo Cards**: `rgba(255,255,255,0.03)`
- **Borde Cards**: `rgba(212,175,55,0.2)`
- **Borde Cards Hover**: `rgba(212,175,55,0.4)`
- **Glow Effect**: `radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)`

## Tipografía

### Familia Principal
**Outfit** - Google Fonts
URL: [https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap](https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap)

### Pesos Utilizados
- **Regular**: 400 - Texto normal, subtítulos
- **Semi-Bold**: 600 - Títulos de cards, énfasis
- **Bold**: 700 - Títulos principales (h1)

### Tamaños de Fuente
- **H1 Hero**: 5rem (80px)
- **Subtítulo Hero**: 1.5rem (24px)
- **H3 Features**: 1.5rem (24px)
- **Párrafos**: 1rem (16px)
- **Botones CTA**: 1rem (16px)

### Responsive
- **Mobile H1**: 3rem (48px)
- **Mobile Subtítulo**: 1.2rem (19.2px)

## Componentes de UI

### Botones CTA
```css
padding: 18px 45px;
background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%);
color: #0a0a0a;
border-radius: 50px;
font-weight: 600;
box-shadow: 0 10px 30px rgba(212,175,55,0.3);
```
**Hover:**
```css
transform: translateY(-3px);
box-shadow: 0 15px 40px rgba(212,175,55,0.5);
```

### Feature Cards
```css
padding: 40px;
background: rgba(255,255,255,0.03);
border: 1px solid rgba(212,175,55,0.2);
border-radius: 20px;
```
**Hover:**
```css
background: rgba(255,255,255,0.05);
border-color: rgba(212,175,55,0.4);
transform: translateY(-5px);
```

## Espaciado y Layout

### Padding General
- **Secciones**: 100px vertical, 5% horizontal
- **Hero**: 80px vertical, 5% horizontal
- **Cards**: 40px en todos los lados

### Grid Features
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 40px;
max-width: 1200px;
```

### Ancho Máximo de Contenido
- **General**: 1200px
- **Subtítulos**: 700px

## Efectos y Animaciones

### Float Animation (Glow Effect)
```css
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-30px); }
}
animation: float 8s ease-in-out infinite;
```

### Transiciones
- **General**: `all 0.3s`
- **Hover Cards**: `transform: translateY(-5px)`
- **Hover Botones**: `transform: translateY(-3px)`

## Filosofía de Diseño
- **Premium y Sofisticado**: Fondo oscuro que transmite exclusividad. Dorado como acento de lujo discreto.
- **Profesional sin ser Frío**: Tipografía moderna y legible (Outfit). Balance entre tech y calidez.
- **Ticket Alto**: Minimalismo elegante. Sin saturación visual. Jerarquía clara.
