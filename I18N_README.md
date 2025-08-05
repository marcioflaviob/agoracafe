# Internationalization Setup - Agora Café

This document explains how the multilingual support (English/Dutch) is implemented for the Agora Café website.

## Overview

The website now supports two languages:
- **English (en)** - Default language
- **Dutch (nl)** - Secondary language

The language is automatically detected based on the user's browser locale, and users can manually switch languages using the language switcher in the header.

## How It Works

### 1. Language Detection
- Browser language is automatically detected on first visit
- Falls back to English if the detected language is not supported
- User preference is saved in localStorage
- Supports Dutch variations (nl, nl-NL, dutch, etc.)

### 2. Translation Management
All text content is managed through Sanity CMS using a dedicated `translations` schema. This allows for:
- Easy content management without code changes
- Real-time translation updates
- Categorized organization of translations
- Fallback to English if Dutch translation is missing

### 3. Component Integration
Each component uses the `useTranslation` hook to access translations:

```jsx
import { useTranslation } from '../context/TranslationContext'

const MyComponent = () => {
  const { t } = useTranslation()
  
  return (
    <h1>{t('navigation.home', 'Home')}</h1>
  )
}
```

## File Structure

```
src/
├── context/
│   └── TranslationContext.jsx     # Translation context and provider
├── components/
│   └── LanguageSwitcher.jsx       # Language switcher component
├── utils/
│   ├── language.js                # Language detection utilities
│   └── initialTranslations.js     # Initial translation data
└── ...

sanity/
└── schemaTypes/
    └── translations.js            # Sanity schema for translations
```

## Setup Instructions

### 1. Sanity Setup
1. The translations schema is already added to your Sanity project
2. Deploy the schema to Sanity Studio:
   ```bash
   cd sanity
   npm run deploy
   ```

### 2. Populate Initial Translations
You have two options to add the initial translations:

**Option A: Manual Entry (Recommended)**
1. Open your Sanity Studio
2. Go to the "Site Translations" section
3. Manually add translations using the provided initial translations as reference

**Option B: Programmatic Import**
1. Use the `initialTranslations.js` file to bulk import:
   ```javascript
   import { client } from './src/sanity'
   import { createTranslations, initialTranslations } from './src/utils/initialTranslations'
   
   // Run this once to populate initial translations
   createTranslations(client)
   ```

### 3. Adding New Translations

To add new translatable text:

1. **Add to Sanity**: Create a new translation document in Sanity Studio
   - Key: Unique identifier (e.g., `hero.welcomeMessage`)
   - Category: Logical grouping (e.g., `hero`, `about`, `contact`)
   - English: English text
   - Dutch: Dutch text

2. **Use in Component**: Reference the translation key in your component
   ```jsx
   const { t } = useTranslation()
   return <h1>{t('hero.welcomeMessage', 'Welcome to our café')}</h1>
   ```

## Translation Key Naming Convention

Use descriptive, hierarchical keys:
- `section.element.description`
- Examples:
  - `navigation.home` - Navigation link
  - `hero.title` - Hero section title
  - `about.feature1.title` - First feature title in about section
  - `contact.openingHours` - Opening hours section title

## Language Switcher

The language switcher is automatically included in:
- Desktop header (top right)
- Mobile menu (when hamburger menu is open)

It shows:
- EN/NL buttons
- Active language is highlighted
- Immediate language switching

## Static Site Compatibility

This implementation is fully compatible with static site generation and GitHub Pages because:
- No server-side rendering required
- All translations are fetched from Sanity at build time
- Client-side language detection and switching
- Locale data stored in browser localStorage

## Browser Support

- Modern browsers that support ES6+ features
- localStorage for preference saving
- Graceful fallback to English if JavaScript is disabled

## Customization

### Adding New Languages
1. Update `SUPPORTED_LANGUAGES` in `src/utils/language.js`
2. Add language detection logic if needed
3. Add new language fields to the translations schema
4. Update the TranslationContext to handle the new language

### Changing Default Language
Update `DEFAULT_LANGUAGE` in `src/utils/language.js`

### Styling Language Switcher
Modify `src/components/LanguageSwitcher.jsx` to match your design requirements

## Content Management Workflow

1. **Content Creators**: Use Sanity Studio to add/edit translations
2. **Developers**: Deploy new translation keys and reference them in components
3. **Automatic**: Website pulls latest translations from Sanity

This setup provides a robust, maintainable internationalization solution that scales with your content needs while remaining compatible with static hosting platforms like GitHub Pages.
