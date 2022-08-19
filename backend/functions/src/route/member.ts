import { db } from "../config";

export const signUp = async (req: any, res: any) => {
  if (req.method !== "POST") {
    return res.status(400).json({ error: "Method not defined" });
  }

  try {
    const member = {
      email: req.body.email,
      name: req.body.name,
    };
    const memberDoc = await db.collection("member").add(member);

    res.status(200).send(`new Member: ${memberDoc.id}`);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    }
  }
};
