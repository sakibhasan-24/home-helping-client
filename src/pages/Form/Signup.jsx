import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
export default function Signup() {
  const { createUser, googleLogIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formValue = new FormData(e.currentTarget);
    const name = formValue.get("name");
    const email = formValue.get("email");
    const password = formValue.get("password");
    // console.log(name, email, password);
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long");
    }
    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      return toast.error("One Special Character Needed");
    }
    if (!/(?=.*?[A-Z])/.test(password)) {
      return toast.error("must need one capital letter");
    }
    createUser(email, password)
      .then((res) => {
        const userInfo = res.user;
        userInfo.displayName = name;
        // console.log(userInfo);
        toast.success("Signup Successful");
        navigate("/login");
      })
      .catch((err) => toast.error(err.message));
  };
  const handleSignInGoogle = () => {
    console.log("clicked");
    googleLogIn()
      .then((res) => {
        const userInfo = res.user;
        console.log(userInfo);
        toast.success("Signup Successful");
        navigate("/login");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="w-full mx-0 md:max-w-2xl lg:max-w-2xl md:mx-auto bg-green-500 my-6">
      <h1 className="text-center font-semibold text-gray-500 text-2xl my-6">
        Please Register
      </h1>
      <form onSubmit={handleFormSubmit} className=" my-6 rounded-lg">
        <div className="flex flex-col gap-6 items-center justify-center ">
          <input
            className="w-full md:w-3/4 px-6 py-3 border-2 border-green-300 rounded-lg focus:border-blue-950"
            type="text"
            name="name"
            id="name"
            placeholder="name"
            required
          />
          <input
            className="w-full md:w-3/4 px-6 py-3 border-2 border-green-300 rounded-lg focus:border-blue-950"
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
          />
          <input
            className="w-full md:w-3/4 px-6 py-3 border-2 border-green-300 rounded-lg focus:border-blue-950"
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="px-8 cursor-pointer py-2 border-0 rounded-lg font-bold text-white bg-green-600 text-center mx-16 lg:mx-64 md:mx-64 my-6"
        />

        <button
          className="flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-2 rounded-md mx-auto my-4"
          type="button"
          onClick={handleSignInGoogle}
        >
          <FaGoogle className=" font-bold text-xl" />
          Sign In With Google
        </button>
        <p className="text-center text-black font-bold">
          already register?
          <Link className="font-xl text-blue-800" to="/login">
            login
          </Link>
        </p>
      </form>
    </div>
  );
}
