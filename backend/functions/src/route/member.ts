import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Express from "express";
import { db, auth } from "../config";
import { Member } from "../type/firestore";

export const signUp = async (req: Express.Request, res: Express.Response) => {
  if (req.method !== "POST") {
    return res.status(400).json({ error: "Method not defined" });
  }

  try {
    const { email, name, password }: Member = req.body;

    const docRef = collection(db, "member");
    const querySnapshot = await getDocs(
      query(docRef, where("name", "==", name))
    );

    if (!querySnapshot.empty) {
      res.status(403).json({ error: "this user name is already taken" });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const memberData = {
            email,
            name,
            createAt: new Date().toISOString(),
          };
          const token = await userCredential.user.getIdToken();

          await addDoc(collection(db, "member"), memberData);

          return res.status(201).json({ token });
        })
        .catch((error) => {
          if (error instanceof Error) {
            return res.status(400).send(error.message);
          } else {
            return error;
          }
        });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send(error.message);
    } else {
      return error;
    }
  }
};
