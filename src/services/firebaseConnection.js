import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnwfTOFM9dbzADYS27_NKshPAvXRKfhN8",
  authDomain: "sistemachamados-c8384.firebaseapp.com",
  projectId: "sistemachamados-c8384",
  storageBucket: "sistemachamados-c8384.appspot.com",
  messagingSenderId: "1001927509058",
  appId: "1:1001927509058:web:63add226c13f31018859db",
  measurementId: "G-QX7FMCC0JK",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
