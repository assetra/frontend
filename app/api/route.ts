import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../lib/mongodb";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  // Check if email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  try {
    const client = await connectToDatabase();
    const db = client.db();

    const collection = db.collection("newsletter");

    // Perform MongoDB operation
    await collection.insertOne({ email });

    return NextResponse.json(
      { message: "Email successfully stored!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing request:", error);

    // Check if it's a MongoDB connection error
    if (
      error instanceof Error &&
      error.message.includes("Failed to connect to MongoDB")
    ) {
      return NextResponse.json(
        {
          message: "Failed to connect to the database. Please try again later.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
