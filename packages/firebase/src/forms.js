import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './config.js';

/**
 * Submit a contact form to Firestore
 * @param {Object} formData - The form data to submit
 * @param {string} siteName - The name of the site submitting the form
 * @returns {Promise<string>} The ID of the created document
 */
export async function submitContactForm(formData, siteName) {
  try {
    const docRef = await addDoc(collection(db, 'contactForms'), {
      ...formData,
      site: siteName,
      timestamp: serverTimestamp(),
      status: 'pending',
    });

    return docRef.id;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}

/**
 * Submit a form with file attachments
 * @param {Object} formData - The form data to submit
 * @param {string} siteName - The name of the site submitting the form
 * @param {Array<string>} fileUrls - URLs of uploaded files from Cloud Storage
 * @returns {Promise<string>} The ID of the created document
 */
export async function submitFormWithFiles(formData, siteName, fileUrls = []) {
  try {
    const docRef = await addDoc(collection(db, 'contactForms'), {
      ...formData,
      site: siteName,
      attachments: fileUrls,
      timestamp: serverTimestamp(),
      status: 'pending',
    });

    return docRef.id;
  } catch (error) {
    console.error('Error submitting form with files:', error);
    throw error;
  }
}
