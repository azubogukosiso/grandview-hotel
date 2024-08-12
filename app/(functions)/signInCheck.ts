import User from "@/app/(models)/User.model";
import bcrypt from "bcrypt";

export const signInCheck = async (email: string, password: string) => {
  console.log("Sign In");

  const errors = { email: "", password: "" };

  if (!email) errors.email = "Please enter your email.";

  if (!password) errors.password = "Please enter your password.";

  const user = await User.findOne({ email });

  if (!user) {
    errors.email = "No user with this email was found.";
    return { errors };
  } else {
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      errors.password = "The password is wrong.";
      return { errors };
    }

    return { user };
  }
};
