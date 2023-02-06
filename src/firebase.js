// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb_gxPkE7nSqDfKAKQLowSVu59D9v1ZUw",
  authDomain: "fileupload-ee3bf.firebaseapp.com",
  projectId: "fileupload-ee3bf",
  storageBucket: "fileupload-ee3bf.appspot.com",
  messagingSenderId: "852856136234",
  appId: "1:852856136234:web:3fda009e5421e6ff519953",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const storage = getStorage(app);
