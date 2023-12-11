import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";

export default function Header() {
  const { user, userLogOut } = useContext(AuthContext);
  const handleLogOut = () => {
    console.log("cl");
    userLogOut()
      .then(() => {
        toast.success("Logged Out Successfully");
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <header className=" bg-blue-950 px-2 py-6 text-white flex items-center justify-between font-semibold">
      <div>
        <Link to="">Home</Link>
      </div>
      <div className="flex items-center justify-center space-x-4 ">
        <Link to="">About</Link>
        <Link to="">Service</Link>
        <Link to="">Blog</Link>
        <Link to="/signup">Contact</Link>
        {user?.email ? (
          <>
            {" "}
            <Link to="/profile">{user.displayName}</Link>
            <Link onClick={handleLogOut} to="/login">
              LogOut
            </Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </header>
  );
}
