import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"; // Or use your DB client

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Received Data:", body); // Debugging input data

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        phoneNumber: body.phoneNumber,
      },
    });

    console.log("Database Response:", user); // Debugging database response

    return NextResponse.json({ message: "User added successfully", user });
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
