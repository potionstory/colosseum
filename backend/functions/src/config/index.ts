import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./firebase";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db);
const auth = getAuth(app);

export { db, auth };
