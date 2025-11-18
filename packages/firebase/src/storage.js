import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './config.js';

/**
 * Upload a file to Firebase Cloud Storage
 * @param {File} file - The file to upload
 * @param {string} siteName - The name of the site (used for organizing files)
 * @param {string} folder - Optional folder path within the site's storage
 * @returns {Promise<string>} The download URL of the uploaded file
 */
export async function uploadFile(file, siteName, folder = 'uploads') {
  try {
    const timestamp = Date.now();
    const fileName = `${timestamp}_${file.name}`;
    const filePath = `${siteName}/${folder}/${fileName}`;

    const storageRef = ref(storage, filePath);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);

    return downloadURL;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}

/**
 * Upload multiple files to Firebase Cloud Storage
 * @param {FileList|Array<File>} files - The files to upload
 * @param {string} siteName - The name of the site
 * @param {string} folder - Optional folder path
 * @returns {Promise<Array<string>>} Array of download URLs
 */
export async function uploadMultipleFiles(files, siteName, folder = 'uploads') {
  try {
    const uploadPromises = Array.from(files).map(file =>
      uploadFile(file, siteName, folder)
    );

    return await Promise.all(uploadPromises);
  } catch (error) {
    console.error('Error uploading multiple files:', error);
    throw error;
  }
}
