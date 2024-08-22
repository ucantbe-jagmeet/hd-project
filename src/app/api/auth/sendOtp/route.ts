import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import User from '@/utils/models/User';
import dbConnect from '@/libs/mongoDb';
import crypto from 'crypto';

export const POST = async (req: NextRequest) => {
  await dbConnect();

  try {
    const { email } = await req.json();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    console.log('user email', email)

    const otp = crypto.randomInt(100000, 999999).toString();
    user.otp = otp;
    user.otpExpires = Date.now() + 3600000; 
    await user.save();

    const authorMail = process.env.NEXT_PUBLIC_EMAIL!
    const authorPass = process.env.NEXT_PUBLIC_PASSWORD!

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: authorMail,
        pass: authorPass,
      },
    });

    const mailOptions = {
      from: authorMail,
      to: email,
      subject: 'Password Reset OTP',
      text: `Your OTP for password reset is ${otp}. It is valid for 1 hour.`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'OTP sent to email' }, { status: 200 });
  } catch (error) {
    console.error('Error sending OTP:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
};
