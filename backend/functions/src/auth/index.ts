import Express from "express";

export const firebaseAuth = (req: Express.Request, res: Express.Response) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split("Bearer ")[1];
  } else {
    console.error("No token found");
    return res.status(403).send({ error: "Unauthorized " });
  }

  return token;
};
