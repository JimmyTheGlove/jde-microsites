# Quick Start Guide

Get your monorepo up and running in minutes!

## 1. Install Dependencies

```bash
npm install
```

This installs all dependencies for all sites and packages.

## 2. Set Up Environment Variables

```bash
cp .env.example .env
```

Edit `.env` and add your Firebase configuration from the Firebase Console.

## 3. Update Firebase Project ID

Edit [.firebaserc](.firebaserc) and replace `your-project-id` with your actual Firebase project ID.

## 4. Start Development

### Run all sites at once:

```bash
npm run dev
```

Sites will be available at:
- http://localhost:3000 - Utah Foundation Certification
- http://localhost:3001 - Utah Elevation Certificate
- http://localhost:3002 - Metal Building Foundations

### Or run one site at a time:

```bash
npm run dev:utahfoundationcertification
```

## 5. Build for Production

```bash
npm run build
```

## 6. Deploy to Firebase

First, make sure you've:
1. Created the hosting sites in Firebase Console
2. Configured the targets (see main README)

Then deploy:

```bash
firebase deploy --only hosting
```

## Adding Your 4 Additional Sites

You mentioned needing 5-7 total sites. You currently have 3. To add more:

1. **Copy an existing site:**

   ```bash
   cp -r apps/utahfoundationcertification apps/newsite
   ```

2. **Update the package.json:**
   - Change the `name` field
   - Change the dev port number

3. **Update root package.json** to add dev/build scripts

4. **Add to firebase.json** hosting array

5. **Create unique content** for the new site

See the "Adding a New Site" section in [README.md](README.md) for detailed steps.

## Next Steps

- Customize the shared components in `packages/ui`
- Adjust the Tailwind theme in `packages/tailwind-config`
- Set up the Firebase email trigger extension
- Configure your custom domains in Firebase Hosting
- Add site-specific content and images

## Need Help?

Check the main [README.md](README.md) for comprehensive documentation!
