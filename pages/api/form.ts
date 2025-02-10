import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { name, email, phoneNumber } = req.body;

      // ✅ Add user to the database
      const user = await prisma.user.create({
        data: { name, email, phoneNumber },
      });

      res.status(200).json({ message: "User added successfully", user });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Database error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
