import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '@/utils/models/User';
import dbConnect from '@/libs/mongoDb';

const secretKey = process.env.JWT_SECRET!;

export const POST = async (req: NextRequest) => {
  await dbConnect();

  try {
    const { email, password } = await req.json();
    console.log('email', email, password);

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }
    const token = jwt.sign(
      { id: user._id, email: user.email }, 
      secretKey,
      { expiresIn: '1d' }
    );

    return NextResponse.json({ user: { email: user.email, id: user._id, firstName:user.firstName, lastName:user.lastName , contactMode: user.contactMode}, token }, { status: 200 });
  } catch (error) {
    console.error('Sign In error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
};
