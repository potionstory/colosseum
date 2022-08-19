import admin from "firebase-admin";
import serviceAccountKey from "../../serviceAccountKey.json";
import { databaseURL, storageBucket } from "./firebase";

admin.initializeApp({
  credential: admin.credential.cert(
    JSON.parse(JSON.stringify(serviceAccountKey))
  ),
  databaseURL,
  storageBucket,
});

const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true });

export { admin, db };
