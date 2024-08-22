import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/utils/models/User';
import dbConnect from '@/libs/mongoDb';

export const POST = async (req: NextRequest) => {
  await dbConnect();

  try {
    const { email, oldPassword, newPassword } = await req.json();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: 'Incorrect old password' }, { status: 401 });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;
    await user.save();

    return NextResponse.json({ message: 'Password changed successfully' }, { status: 200 });
  } catch (error) {
    console.error('Change Password error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
};
