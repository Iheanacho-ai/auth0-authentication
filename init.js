import { Appwrite } from 'appwrite';
export const sdk = new Appwrite();
sdk
  .setEndpoint('http://localhost/v1') // Replace this with your endpoint
  .setProject('6288b2e2d4391140267a'); // Replace this with your ProjectID

