import User from "@/app/(models)/User.model";
import { checkPwdStrength } from "@/app/(functions)/checkPwdStrength";

export const signUpCheck = async (
  fullname: string,
  email: string,
  password: string
) => {
  console.log("Sign Up");

  const errors = { fullname: "", email: "", password: "" };

  if (!fullname) errors.fullname = "Please enter your full name.";

  if (!email) errors.email = "Please enter your email.";

  if (!password) errors.password = "Please enter your password.";

  const isEmailUsed = await User.find({ email });

  if (isEmailUsed.length > 0) {
    errors.email = "Sorry this email is already in use. Try another.";
  }

  const isPwdStrong = checkPwdStrength(password);
  console.log("Password is strong: ", isPwdStrong);
  if (typeof isPwdStrong !== "boolean") {
    errors.password = isPwdStrong;
  }

  return { errors };
};
