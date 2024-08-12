"use client";

import { useState } from "react";

type userDetailsType = {
  name: string;
  email: string;
  image: string;
  id: string;
  fullname: string;
  role: string;
};

interface userDetailsProp {
  userDetails: userDetailsType;
}

const CustomerDashboardComponent = ({ userDetails }: userDetailsProp) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [fullnameBtnDisabled, setFullnameBtnDisabled] = useState(false);
  const [emailBtnDisabled, setEmailBtnDisabled] = useState(false);
  const [passwordBtnDisabled, setPasswordBtnDisabled] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    email: "",
    fullname: "",
    password: "",
  });

  return (
    <section className="font-cinzelDec flex flex-col items-center justify-center text-white h-[50vh] text-center relative">
      <div className="absolute -top-40 w-[70%]">
        <div>
          <h5 className="text-left">Welcome, {userDetails.fullname}</h5>
          <div className="p-10 bg-slate-200"></div>
        </div>

        <div className="mt-3 p-10 bg-slate-200">
          <h4 className="text-slate-700 text-left">USER PROFILE</h4>

          <form className="text-left mt-5">
            <label htmlFor="fullname" className="text-slate-700">
              Full Name:{" "}
            </label>
            <div className="flex justify-between items-end">
              <input
                id="fullname"
                type="text"
                value={fullname}
                required={true}
                className="focus:!outline-none border-b border-slate-600 font-sans p-1 text-slate-600 w-[60%]"
                onChange={(e) => setFullname(e.target.value)}
              />
              <button className="px-4 py-2 bg-slate-600 text-white transition-all active:scale-95 hover:bg-slate-700">
                {" "}
                Change full name
              </button>
            </div>
          </form>

          <form className="text-left mt-5">
            <label htmlFor="email" className="text-slate-700">
              Email:{" "}
            </label>
            <div className="flex justify-between items-end">
              <input
                id="email"
                type="email"
                value={email}
                required={true}
                className="focus:!outline-none border-b border-slate-600 font-sans p-1 text-slate-600 w-[60%]"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="px-4 py-2 bg-slate-600 text-white transition-all active:scale-95 hover:bg-slate-700">
                {" "}
                Change email
              </button>
            </div>
          </form>

          <form className="text-left mt-5">
            <label htmlFor="password" className="text-slate-700">
              Password:{" "}
            </label>
            <div className="flex justify-between items-end">
              <div className="flex justify-between border-b border-slate-600 items-center bg-white">
                <input
                  id="password"
                  type="password"
                  value={password}
                  required={true}
                  className="focus:!outline-none font-sans w-full p-2"
                  onChange={(e) => setPassword(e.target.value)}
                />

                {showPassword ? (
                  <svg
                    width="40"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pr-2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <path d="M9.34268 18.7819L7.41083 18.2642L8.1983 15.3254C7.00919 14.8874 5.91661 14.2498 4.96116 13.4534L2.80783 15.6067L1.39362 14.1925L3.54695 12.0392C2.35581 10.6103 1.52014 8.87466 1.17578 6.96818L3.14386 6.61035C3.90289 10.8126 7.57931 14.0001 12.0002 14.0001C16.4211 14.0001 20.0976 10.8126 20.8566 6.61035L22.8247 6.96818C22.4803 8.87466 21.6446 10.6103 20.4535 12.0392L22.6068 14.1925L21.1926 15.6067L19.0393 13.4534C18.0838 14.2498 16.9912 14.8874 15.8021 15.3254L16.5896 18.2642L14.6578 18.7819L13.87 15.8418C13.2623 15.9459 12.6376 16.0001 12.0002 16.0001C11.3629 16.0001 10.7381 15.9459 10.1305 15.8418L9.34268 18.7819Z" />
                  </svg>
                ) : (
                  <svg
                    width="40"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pr-2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z" />
                  </svg>
                )}
              </div>
              <button className="px-4 py-2 bg-slate-600 text-white transition-all active:scale-95 hover:bg-slate-700">
                {" "}
                Change password
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CustomerDashboardComponent;
