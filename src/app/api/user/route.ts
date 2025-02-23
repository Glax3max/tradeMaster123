import connectionToDatabase from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

interface UserRequest {
  name: string;
  number: number;
  email: string;
}

export async function POST(request: Request) {
  try {
    await connectionToDatabase();
    const { name, number, email }: UserRequest = await request.json();

    // Check if a user with the same name & number already exists
    const existingUser = await User.findOne({ name, number });

    if (existingUser) {
        console.log("Already exist")
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Create and save a new user if not found
    const newUser = new User({ name, number, email });
    await newUser.save();

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error saving user:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
