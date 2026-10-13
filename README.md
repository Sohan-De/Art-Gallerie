# Galerie Dealer d'art

Single-page bilingual art gallery website built with pure **HTML5, Vanilla CSS and JavaScript**.

## Project Structure

```text
Art/
├── index.html          # Main HTML structure with Schema.org JSON-LD and bilingual markup
├── style.css           # Vanilla CSS with responsive layouts, CSS variables, and animations
├── color.js            # Theme color palettes configuration (terracotta, midnight, sage, mono)
├── script.js           # Vanilla JS engine (Bilingual FR/EN, Themes, Live Paris Hours, Filters, Lightbox)
├── gallery-images/     # Photography assets used across the gallery
└── README.md           # Documentation
```

## How to Run

No build step or Node.js dependencies are required!

1. **Directly in Browser**: Double-click [index.html](file:///c:/Users/User/Desktop/Art/index.html) or open it in any web browser.
2. **With a Local Static Server**:
   ```sh
   npx serve .
   # or Python:
   python -m http.server 3000
   ```

## Features

- **Bilingual (FR / EN)**: Click the header language button (`FR` / `EN`) to translate the entire site in place instantly with preference saved in `localStorage`.
- **Theme & Mode Engine**:
  - Dark / Light mode toggle (`☾` / `☼`).
  - Palette selector in the bottom-right corner (`terracotta`, `midnight`, `sage`, `mono`).
- **Live Paris Hours**: Calculates open/closed status in real time against Europe/Paris timezone and highlights today's schedule row.
- **Artwork Grid & Filtering**: Filter artworks by medium (`Tout`, `Peinture`, `Dessin`, `Autres médiums`).
- **Interactive Lightbox**: Click any artwork to view high-resolution photography, navigate with arrow keys (`←`/`→`) or `Escape`, and click to inquire about the artwork directly.
- **Contact Form**: Interactive form with input validation and instant success confirmation.