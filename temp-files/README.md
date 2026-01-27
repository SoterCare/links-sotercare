# SoterCare Links Page

This directory contains the standalone "Links" page for SoterCare. It is designed to be a lightweight, single-page reference for social media and contact links.

## Overview

- **Path**: `/links`
- **Purpose**: Central hub for social and contact links.
- **Design**: Matches the main SoterCare landing page aesthetic (clean, minimal, "wellness simplified").

## Files

- `page.tsx`: The React component (Next.js page).
- `links.css`: The standalone stylesheet.

## Deployment Instructions

### Option 1: As part of the Next.js App (Current)

This page is already integrated into the `src/app` directory. No further action is needed other than deploying the main app.

- Access at: `https://your-domain.com/links`

### Option 2: Standalone Static HTML

If you wish to host this as a completely separate `index.html` file (e.g., on a different server or S3 bucket):

1. **Create an `index.html` file** with the structure below.
2. **Link the `links.css` file**.
3. **Include the Logo image** in the correct path.
4. **Use an Icon Library** (e.g., Lucide, FontAwesome) or SVG strings for the icons.

#### HTML Template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SoterCare Links</title>
    <link rel="stylesheet" href="links.css" />
    <!-- Optional: Add Favicon -->
  </head>
  <body>
    <main class="links-page">
      <div class="links-container">
        <!-- Header -->
        <div class="header-section">
          <!-- LOGO: Update src to your logo location -->
          <div class="logo-wrapper">
            <img
              src="./assets/SoterCare-Primary-logo-brandblue.png"
              alt="SoterCare"
              class="logo"
            />
          </div>
          <p class="tagline">wellness simplified</p>
        </div>

        <!-- Mission -->
        <div class="mission-section">
          <h1>
            "Care without the weight,<br />
            <span class="highlight">Love without the Worry."</span>
          </h1>
        </div>

        <!-- Links List -->
        <div class="links-list">
          <!-- Website Link -->
          <a
            href="https://sotercare.com"
            target="_blank"
            rel="noopener noreferrer"
            class="link-card"
          >
            <div class="icon-wrapper">
              <!-- ICON: Replace with SVG or Font Icon -->
              <svg ...>...</svg>
            </div>
            <div class="text-wrapper">
              <span class="link-name">Website</span>
              <span class="link-label">sotercare.com</span>
            </div>
          </a>

          <!-- REPEAT for LinkedIn, Instagram, Email -->
        </div>

        <!-- Footer -->
        <div class="footer-note">© 2026 SoterCare. All rights reserved.</div>
      </div>
    </main>
  </body>
</html>
```

## Customization Guide

### Changing the Title

To change the page title in the Next.js app, export metadata from `page.tsx`:

```tsx
export const metadata = {
  title: "SoterCare Links",
  description: "Connect with SoterCare",
};
```

### Changing Icons

The current implementation uses `lucide-react`.
To change an icon:

1. Open `page.tsx`.
2. Update the `icon` property in the `links` array:
   ```tsx
   {
       name: 'New Link',
       icon: <NewIconComponent size={20} />, // Import your new icon
       // ...
   }
   ```
   **Note**: If hosting standalone, you must replace the React components with raw SVG code or `<i>` tags for your chosen icon font.

### Changing Colors

Edit `links.css` variables at the top of the file:

```css
:root {
  --primary-blue: #3b82f6; /* Change this for the highlight color */
  --light-blue: #eff6ff; /* Change this for the icon background */
}
```
