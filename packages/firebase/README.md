# Firebase Package

Shared Firebase configuration and utilities for all sites in the monorepo.

## Features

- Shared Firebase app initialization
- Firestore database access
- Cloud Storage integration
- Form submission utilities
- File upload helpers

## Usage

### Basic Import

```javascript
import { db, storage, submitContactForm, uploadFile } from 'firebase';
```

### Submit a Contact Form

```javascript
import { submitContactForm } from 'firebase';

const formData = {
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Hello!',
};

const docId = await submitContactForm(formData, 'utahfoundationcertification');
```

### Upload Files

```javascript
import { uploadFile, submitFormWithFiles } from 'firebase';

// Upload a single file
const fileUrl = await uploadFile(file, 'utahfoundationcertification', 'contact-forms');

// Submit form with multiple files
const fileUrls = await uploadMultipleFiles(files, 'utahfoundationcertification');
await submitFormWithFiles(formData, 'utahfoundationcertification', fileUrls);
```

## Configuration

Make sure your `.env` file contains the Firebase configuration:

```
PUBLIC_FIREBASE_API_KEY=your-api-key
PUBLIC_FIREBASE_AUTH_DOMAIN=your-domain
PUBLIC_FIREBASE_PROJECT_ID=your-project-id
PUBLIC_FIREBASE_STORAGE_BUCKET=your-bucket
PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
PUBLIC_FIREBASE_APP_ID=your-app-id
```
