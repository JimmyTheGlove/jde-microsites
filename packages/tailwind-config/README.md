# Tailwind Config Package

Shared Tailwind CSS v4 configuration and design tokens for all sites in the monorepo.

## Features

- Tailwind v4 CSS-based configuration
- Shared color palette (primary, secondary)
- Typography scale and fonts
- Spacing system
- Border radius utilities
- Shadow utilities
- Responsive breakpoints
- Pre-built component classes

## Usage

### In your Astro site's main CSS file

```css
/* src/styles/global.css */
@import "tailwind-config";

/* Your site-specific styles here */
```

### Available Utility Classes

#### Buttons
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style
- `.btn-outline` - Outline button style

#### Layout
- `.container-custom` - Responsive container with padding
- `.section-padding` - Consistent section padding

### Customization

You can extend or override the theme in your site-specific CSS:

```css
@import "tailwind-config";

@theme {
  /* Override or add your own colors */
  --color-accent: oklch(65% 0.2 30);
}
```

## Color Palette

- **Primary**: Blue tones (50-950 scale)
- **Secondary**: Cyan tones (50-950 scale)

Use in your HTML:
```html
<div class="bg-primary-600 text-white">...</div>
<button class="bg-secondary-500 hover:bg-secondary-600">...</button>
```
