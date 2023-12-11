import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";

// import { toast } from "react-toastify";
// import { AuthContext } from "../context/AuthProvider";

export default function Login() {
  const { userLogIn, googleLogIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    // a new way try
    const formValue = new FormData(e.currentTarget);
    const email = formValue.get("email");
    const password = formValue.get("password");
    // console.log(email, password);

    userLogIn(email, password)
      .then((res) => {
        console.log(res.user);
        navigate("/");
        toast.success("Logged in successfully");
      })
      .catch((e) => toast.error("Invalid email or password"));
    // Sakib@
  };
  const handleSignInGoogle = () => {
    googleLogIn()
      .then((res) => {
        console.log(res.user);
        navigate("/");
        toast.success("Logged in successfully");
      })
      .catch((e) => toast.error("Invalid email or password"));
  };
  return (
    <div className="w-full mx-0 md:max-w-2xl lg:max-w-2xl md:mx-auto bg-green-500 my-6">
      <h1 className="text-center font-semibold text-gray-500 text-2xl my-6">
        Please Login
      </h1>
      <form onSubmit={handleLogIn} className=" my-6 rounded-lg">
        <div className="flex flex-col gap-6 items-center justify-center ">
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
          value="Login"
          className="px-8 cursor-pointer py-2 border-0 rounded-lg font-bold text-white bg-green-600 text-center mx-16 lg:mx-64 md:mx-64 my-6"
        />

        <button
          onClick={handleSignInGoogle}
          className="flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-2 rounded-md mx-auto my-4"
          type="button"
        >
          <FaGoogle className=" font-bold text-xl" />
          Sign In With Google
        </button>
        <p className="text-center text-black font-bold">
          didn't register?
          <Link className="font-xl text-blue-800" to="/signup">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
