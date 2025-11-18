# JDE Websites Monorepo

A monorepo containing multiple Astro.js websites with shared components, Firebase integration, and Tailwind CSS styling.

## Project Structure

```
jde-websites/
├── apps/                              # Individual website applications
│   ├── utahfoundationcertification/  # Port 6001
│   ├── utahelevationcertificate/     # Port 6002
│   ├── metalbuildingfoundations/     # Port 6003
│   ├── utahsepticdesign/             # Port 6004
│   ├── utahroofingconsulting/        # Port 6005
│   ├── watertankengineers/           # Port 6006
│   ├── retainingwallengineers/       # Port 6007
│   └── firestationdesigners/         # Port 6008
├── packages/                          # Shared packages
│   ├── ui/                           # Shared Astro components
│   ├── firebase/                     # Firebase utilities
│   └── tailwind-config/              # Tailwind v4 configuration
├── .env.example                      # Environment variables template
├── firebase.json                     # Firebase Hosting configuration
├── .firebaserc                       # Firebase project configuration
└── package.json                      # Root workspace configuration
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm (comes with Node.js)
- Firebase CLI (for deployment): `npm install -g firebase-tools`

### Initial Setup

1. **Clone and install dependencies:**

   ```bash
   npm install
   ```

   This will install all dependencies for the root workspace and all packages/apps.

2. **Configure environment variables:**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your Firebase configuration values from the Firebase Console.

3. **Configure Firebase project:**

   Edit [.firebaserc](.firebaserc) and replace `your-project-id` with your actual Firebase project ID.

### Development

#### Run all sites concurrently:

```bash
npm run dev
```

This will start all sites on different ports:
- Utah Foundation Certification: http://localhost:6001
- Utah Elevation Certificate: http://localhost:6002
- Metal Building Foundations: http://localhost:6003
- Utah Septic Design: http://localhost:6004
- Utah Roofing Consulting: http://localhost:6005
- Water Tank Engineers: http://localhost:6006
- Retaining Wall Engineers: http://localhost:6007
- Fire Station Designers: http://localhost:6008

#### Run individual sites:

```bash
npm run dev:utahfoundationcertification    # Port 6001
npm run dev:utahelevationcertificate       # Port 6002
npm run dev:metalbuildingfoundations       # Port 6003
npm run dev:utahsepticdesign               # Port 6004
npm run dev:utahroofingconsulting          # Port 6005
npm run dev:watertankengineers             # Port 6006
npm run dev:retainingwallengineers         # Port 6007
npm run dev:firestationdesigners           # Port 6008
```

### Building for Production

#### Build all sites:

```bash
npm run build
```

#### Build individual sites:

```bash
npm run build:utahfoundationcertification
npm run build:utahelevationcertificate
npm run build:metalbuildingfoundations
npm run build:utahsepticdesign
npm run build:utahroofingconsulting
npm run build:watertankengineers
npm run build:retainingwallengineers
npm run build:firestationdesigners
```

## Shared Packages

### UI Components (`packages/ui`)

Shared Astro components used across all sites:

- **Header** - Navigation header with mobile menu
- **Footer** - Site footer with links
- **Hero** - Hero section with CTAs (variants: default, centered, split, minimal)
- **ProcessSteps** - Multi-step process display (variants: grid, list)
- **TeamSection** - Team member showcase
- **FAQ** - Accordion-style FAQ section
- **ContactForm** - Firebase-integrated contact form with dropdown support
- **FeatureCards** - Grid of feature cards with icons
- **ContentSection** - Flexible content block with optional images
- **ExpertCard** - Expert/team member profile card

**Usage example:**

```astro
---
import Header from 'ui/Header.astro';
import Hero from 'ui/Hero.astro';
import FeatureCards from 'ui/FeatureCards.astro';
import ContentSection from 'ui/ContentSection.astro';
import ExpertCard from 'ui/ExpertCard.astro';
import ContactForm from 'ui/ContactForm.astro';
---

<Header siteName="My Site" navItems={[...]} />
<Hero title="Welcome" variant="minimal" />
<FeatureCards features={[...]} />
<ContentSection title="About" content="<p>...</p>" />
<ExpertCard name="John Doe" title="Engineer" bio="..." />
<ContactForm siteName="mysite" includeFileUpload={true} />
```

See [packages/ui/README.md](packages/ui/README.md) for detailed component documentation.

### Firebase (`packages/firebase`)

Firebase configuration and utilities for:

- Firestore database access
- Cloud Storage file uploads
- Contact form submissions

**Usage example:**

```javascript
import { submitContactForm, uploadFile } from 'firebase';

const docId = await submitContactForm(formData, 'sitename');
const fileUrl = await uploadFile(file, 'sitename', 'folder');
```

See [packages/firebase/README.md](packages/firebase/README.md) for detailed API documentation.

### Tailwind Config (`packages/tailwind-config`)

Shared Tailwind v4 CSS configuration with:

- Color palette (primary, secondary)
- Typography scale
- Spacing system
- Pre-built utility classes

**Usage in sites:**

```css
/* src/styles/global.css */
@import "tailwind-config";
```

See [packages/tailwind-config/README.md](packages/tailwind-config/README.md) for theming details.

## Firebase Setup

### Firestore Database

The contact forms write to a `contactForms` collection with the following structure:

```javascript
{
  name: "John Doe",
  email: "john@example.com",
  phone: "555-1234",
  message: "Contact message...",
  site: "utahfoundationcertification",  // Site identifier
  attachments: ["url1", "url2"],         // Optional file URLs
  timestamp: Timestamp,
  status: "pending"
}
```

### Email Trigger Extension

Install the "Trigger Email from Firestore" extension in your Firebase Console:

1. Go to Firebase Console > Extensions
2. Install "Trigger Email from Firestore"
3. Configure to watch the `contactForms` collection
4. Set up email templates and SMTP settings

### Cloud Storage

Files uploaded through contact forms are stored in Firebase Cloud Storage organized by site:

```
/utahfoundationcertification/contact-forms/timestamp_filename.jpg
/utahelevationcertificate/contact-forms/timestamp_document.pdf
/metalbuildingfoundations/uploads/timestamp_image.png
```

### Firebase Hosting Setup

The monorepo is configured for Firebase Hosting with multiple sites. To set up:

1. **Login to Firebase:**

   ```bash
   firebase login
   ```

2. **Create hosting sites in Firebase Console:**

   - Go to Firebase Console > Hosting
   - Add new sites for each domain:
     - utahfoundationcertification
     - utahelevationcertificate
     - metalbuildingfoundations

3. **Link sites to targets:**

   ```bash
   firebase target:apply hosting utahfoundationcertification utahfoundationcertification
   firebase target:apply hosting utahelevationcertificate utahelevationcertificate
   firebase target:apply hosting metalbuildingfoundations metalbuildingfoundations
   ```

4. **Deploy all sites:**

   ```bash
   npm run build
   firebase deploy --only hosting
   ```

5. **Deploy individual sites:**

   ```bash
   npm run build:utahfoundationcertification
   firebase deploy --only hosting:utahfoundationcertification
   ```

## Adding a New Site

To add a new site to the monorepo:

1. **Create site directory:**

   ```bash
   mkdir -p apps/newsitename/{src/{pages,styles},public}
   ```

2. **Copy configuration from an existing site:**

   ```bash
   cp apps/utahfoundationcertification/package.json apps/newsitename/
   cp apps/utahfoundationcertification/astro.config.mjs apps/newsitename/
   cp apps/utahfoundationcertification/tsconfig.json apps/newsitename/
   ```

3. **Update package.json:**

   - Change `name` to `newsitename`
   - Change dev port to an available port (e.g., 3003)

4. **Add scripts to root package.json:**

   ```json
   {
     "scripts": {
       "dev:newsitename": "npm run dev --workspace=apps/newsitename",
       "build:newsitename": "npm run build --workspace=apps/newsitename"
     }
   }
   ```

5. **Add to Firebase configuration:**

   Add to [firebase.json](firebase.json) hosting array:

   ```json
   {
     "target": "newsitename",
     "public": "apps/newsitename/dist",
     "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
     "cleanUrls": true,
     "trailingSlash": false
   }
   ```

6. **Create the site content using shared components!**

## Workspace Management

This monorepo uses npm workspaces for dependency management.

### Installing dependencies:

```bash
# Install in root (affects all packages)
npm install package-name

# Install in specific site
npm install package-name --workspace=apps/utahfoundationcertification

# Install in shared package
npm install package-name --workspace=packages/ui
```

### Running commands:

```bash
# Run in all workspaces
npm run build --workspaces

# Run in specific workspace
npm run dev --workspace=apps/utahfoundationcertification
```

## Tech Stack

- **Framework:** Astro 5.x
- **Styling:** Tailwind CSS v4
- **Backend:** Firebase (Firestore, Cloud Storage, Hosting)
- **Language:** JavaScript (not TypeScript)
- **Package Manager:** npm with workspaces

## Best Practices

1. **Use shared components** from `packages/ui` whenever possible
2. **Keep site-specific code** in individual app directories
3. **Update shared packages** when changes benefit multiple sites
4. **Test all sites** after modifying shared packages
5. **Follow the existing naming conventions** for consistency

## Common Issues

### Module resolution errors

If you see errors importing shared packages, ensure:

1. Dependencies are installed: `npm install`
2. Vite SSR config includes workspace packages in `astro.config.mjs`:

   ```javascript
   vite: {
     ssr: {
       noExternal: ['ui', 'firebase', 'tailwind-config']
     }
   }
   ```

### Tailwind classes not working

Make sure you're importing the shared config in your site's CSS:

```css
@import "tailwind-config";
```

### Firebase not initialized

Verify:

1. `.env` file exists with valid Firebase credentials
2. Environment variables are prefixed with `PUBLIC_`
3. You're importing from the firebase package correctly

## Support

For questions or issues:

1. Check the package-specific README files
2. Review the example sites for implementation patterns
3. Consult the [Astro documentation](https://docs.astro.build)
4. Check [Firebase documentation](https://firebase.google.com/docs)

## License

Private - All rights reserved
