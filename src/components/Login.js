import Header from "./Header";
import { useState, useRef } from "react";
import { CheckValidData } from "../utils/checkValidData";

const Login = () => {
  const [SignUpPage, setSignUpPage] = useState(true);

  const email = useRef();
  const password = useRef();

  const handleButtonClick = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);
    const msg = CheckValidData(email.current.value,password.current.value)
    console.log(msg)
};

  const toggleSigninForm = () => {
    setSignUpPage(!SignUpPage);
  };

  return (
    <div className="">
      <Header></Header>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Bg-Img"
        />
      </div>

      <form 
      onSubmit={(e)=>e.preventDefault()}
      className="p-10 absolute bg-black rounded-lg w-3/12 my-40 mx-auto right-0 left-0 text-white bg-opacity-85">
        <h1 className="text-3xl  text-opacity-40 p-1 mb-4 font-bold">
          {SignUpPage ? "Sign In" : "Sign Up"}
        </h1>
        {!SignUpPage && (
          <input
            className="rounded-sm  my-5 p-4 w-full bg-gray-800 bg-opacity-80"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="rounded-sm  my-5 p-4 w-full bg-gray-800 bg-opacity-80"
          type="text"
          placeholder="Email"
        />

        <input
          ref={password}
          className="rounded-sm  my-5 p-4 w-full bg-gray-800 bg-opacity-80"
          type="text"
          placeholder="Password"
        />

        <button
          onClick={handleButtonClick}
          className="rounded-lg bg-red-600 w-full my-5 p-4 font-bold"
        >
          {SignUpPage ? "Sign In" : "Sign Up"}
        </button>

        <p className="mt-2 cursor-pointer" onClick={toggleSigninForm}>
          {SignUpPage ? "are you new" : "already a member"}? click here to sign
          {!SignUpPage ? " in" : " up"}
        </p>
      </form>
    </div>
  );
};
export default Login;
