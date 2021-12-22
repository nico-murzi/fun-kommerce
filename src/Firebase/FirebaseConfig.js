// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0lXCO22GAa0lOXaM7sCzidoe8I1-J4hY",
  authDomain: "funko-mmerce.firebaseapp.com",
  projectId: "funko-mmerce",
  storageBucket: "funko-mmerce.appspot.com",
  messagingSenderId: "379678573496",
  appId: "1:379678573496:web:b8f3895f0a50cb88d0854d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
