import Header from "./Header";
import { useState, useRef } from "react";
import { CheckValidData } from "../utils/checkValidData";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [SignInPage, setSignInPage] = useState(true);

  const [errorMessage, setErrotMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const handleButtonClick = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);
    if (SignInPage) {
      const msg = CheckValidData(email.current.value, password.current.value);
      setErrotMessage(msg);
      if (msg) return;
    }

    if (!SignInPage) {
      const msg = CheckValidData(
        email.current.value,
        password.current.value,
        userName.current.value
      );
      setErrotMessage(msg);
      if (msg) return;
    }
    // if(!msg){
    //sign in/signup
    // } OR not want to write code in if consdition

    if (!SignInPage) {
      //signinpage
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          // setErrotMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      //signuppage
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (
            errorCode + errorMessage ===
            "auth/invalid-credentialFirebase: Error (auth/invalid-credential)."
          ) {
            setErrotMessage("Account doesn't exsist");
          }
        });
    }
  };

  const toggleSigninForm = () => {
    setSignInPage(!SignInPage);
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
        onSubmit={(e) => e.preventDefault()}
        className="p-10 absolute bg-black rounded-lg w-3/12 my-40 mx-auto right-0 left-0 text-white bg-opacity-85"
      >
        <h1 className="text-3xl  text-opacity-40 p-1 mb-4 font-bold">
          {SignInPage ? "Sign In" : "Sign Up"}
        </h1>
        {!SignInPage && (
          <input
            ref={userName}
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
          type="password"
          placeholder="Password"
        />
        <p className="text-red-600 text-md mx-2">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="rounded-lg bg-red-600 w-full my-5 p-4 font-bold"
        >
          {SignInPage ? "Sign In" : "Sign Up"}
        </button>

        <p className="mt-2 cursor-pointer" onClick={toggleSigninForm}>
          {SignInPage ? "are you new" : "already a member"}? click here to sign
          {!SignInPage ? " in" : " up"}
        </p>
      </form>
    </div>
  );
};
export default Login;
