export const checkPwdStrength = (password: string): any => {
  console.log("checkPwdStrength fxn");
  if (password.length < 6) {
    // console.log("too short");
    return "Your password is too short. It must be up to 6 characters";
  }

  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?\/]/.test(password);
  if (!hasSpecialChar) {
    // console.log("no special char");
    return "Your password must have a special character";
  }

  const hasNumber = /\d/.test(password);
  if (!hasNumber) {
    // console.log("no number");
    return "Your password must have a number";
  }

  return true;
};
