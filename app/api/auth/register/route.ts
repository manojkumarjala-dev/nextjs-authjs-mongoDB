import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import User from '@/model/User'
import clientPromise from '@/lib/db';
import { NextResponse } from 'next/server';
import connect from '@/lib/mongodb';

const SECRET_KEY = process.env.AUTH_SECRET;

export const POST = async (req: Request) => {
  const { email, password, username } = await req.json();

  try {
    await connect();
    // Check if the user already exists
    const user = await User.findOne({ email });
    if (user) {
      return new NextResponse("User already exists", {
        status: 400
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    const newUser = new User({
      email,
      password: hashedPassword,
      username,
    });

    try {
        await newUser.save();
      const response = new NextResponse("User Registration successful", {
        status: 200
      });
      return response;

    } catch (error: any) {
      return new NextResponse(error.toString(), {
        status: 500
      });
    }

  } catch (error: any) {
    return new NextResponse(error.toString(), {
      status: 500
    });
  }
};

