import { NextRequest, NextResponse } from "next/server";
import User from "@/app/(models)/User.model";
import { checkPwdStrength } from "@/app/(functions)/checkPwdStrength";
import bcrypt from "bcrypt";
import { signIn } from "next-auth/react";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body = await req.json();

  const { fullname, email, password } = body;

  const isEmailUsed = await User.find({ email });

  if (isEmailUsed.length > 0)
    return NextResponse.json(
      {
        message: {
          duplicateEmailError:
            "Sorry this email is already in use. Try another.",
        },
      },
      { status: 400 }
    );

  const isPwdStrong = checkPwdStrength(password);
  console.log("lorem ipsum: ", isPwdStrong);

  if (
    isPwdStrong.pwdLengthErrorMsg ||
    isPwdStrong.specialCharErrorMsg ||
    isPwdStrong.numberErrorMsg
  ) {
    // console.log("here we goooooo: ", isPwdStrong);
    return NextResponse.json(
      {
        message:
          (isPwdStrong.pwdLengthErrorMsg && isPwdStrong.pwdLengthErrorMsg) ||
          (isPwdStrong.specialCharErrorMsg &&
            isPwdStrong.specialCharErrorMsg) ||
          (isPwdStrong.numberErrorMsg && isPwdStrong.numberErrorMsg),
      },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    fullname,
    email,
    password: hashedPassword,
  });

  if (user) {
    const data = { email, password };
    await signIn("credentials", { ...data });
    return NextResponse.json(
      { message: "Your profile has been created" },
      { status: 201 }
    );
  } else {
    return NextResponse.json(
      { message: "Something went wrong when creating your profile" },
      { status: 500 }
    );
  }
};
