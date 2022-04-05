
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDSdv8hdb6syIgTPbgjvpeo8GESkS9BGww",
  authDomain: "booksbookaholic.firebaseapp.com",
  projectId: "booksbookaholic",
  storageBucket: "booksbookaholic.appspot.com",
  messagingSenderId: "567475127155",
  appId: "1:567475127155:web:7b4321b047e374321b7b06"
};


const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);