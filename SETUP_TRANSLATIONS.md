# Quick Setup Guide for Translations

## Step 1: Deploy Sanity Schema
First, make sure your translation schema is deployed to Sanity Studio:

```bash
cd sanity
npm run build
npm run deploy
```

## Step 2: Access Sanity Studio
Open your Sanity Studio (usually at a URL like `https://your-project.sanity.studio/`) or run locally:

```bash
cd sanity
npm run dev
```

## Step 3: Add Basic Translations
In Sanity Studio, look for **"Site Translations"** in the menu and add these 6 essential translations:

### Translation 1:
- **Key**: `navigation.home`
- **Category**: `navigation`
- **English**: `Home`
- **Dutch**: `Home`
- **Description**: `Navigation link to home section`

### Translation 2:
- **Key**: `navigation.about`
- **Category**: `navigation`
- **English**: `About`
- **Dutch**: `Over ons`
- **Description**: `Navigation link to about section`

### Translation 3:
- **Key**: `navigation.specialties`
- **Category**: `navigation`
- **English**: `Specialties`
- **Dutch**: `Specialiteiten`
- **Description**: `Navigation link to specialties section`

### Translation 4:
- **Key**: `navigation.gallery`
- **Category**: `navigation`
- **English**: `Gallery`
- **Dutch**: `Galerij`
- **Description**: `Navigation link to gallery section`

### Translation 5:
- **Key**: `navigation.contact`
- **Category**: `navigation`
- **English**: `Contact`
- **Dutch**: `Contact`
- **Description**: `Navigation link to contact section`

### Translation 6:
- **Key**: `navigation.viewMenu`
- **Category**: `navigation`
- **English**: `View Menu`
- **Dutch**: `Menu bekijken`
- **Description**: `Button text for viewing menu`

## Step 4: Publish and Test
1. **Publish** each translation in Sanity Studio
2. **Refresh** your website
3. **Test** the language switcher - you should see the text change from English to Dutch

## Step 5: Add More Translations
Once the basic ones work, you can add more translations using the complete list in `src/utils/initialTranslations.js` as reference.

## Troubleshooting

### If translations still don't work:
1. Check browser console for "Fetched translation data from Sanity" - should show your translations
2. Make sure all translations are **published** (not just saved as drafts)
3. Try hard refresh (Cmd+Shift+R or Ctrl+Shift+R)

### If you don't see "Site Translations" in Sanity Studio:
The schema might not be deployed. Make sure to run the deploy commands above.
