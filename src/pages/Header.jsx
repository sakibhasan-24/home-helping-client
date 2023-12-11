import { useContext, useState } from "react";
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

  //
  const [themeNumber, setThemeNumber] = useState(0);
  const ariaLevel = ["Default", "Retro", "Cyberpunk", "Valentine", "Aqua"];
  const value = ["default", "retro", "cyberpunk", "valentine", "aqua"];
  const handleTheme = () => {
    setThemeNumber((themeNumber) => themeNumber + 1);
    if (themeNumber === 4) setThemeNumber(0);
  };

  return (
    <header className=" bg-blue-950 px-2 py-6 text-white flex items-center justify-between font-semibold">
      <div>
        <Link to="">Home</Link>
      </div>
      <div className="flex items-center justify-center space-x-4 ">
        <input
          onClick={handleTheme}
          type="radio"
          name="theme-buttons"
          className="btn theme-controller join-item"
          aria-label={ariaLevel[themeNumber]}
          value={value[themeNumber]}
        />
        <Link to="">About</Link>
        <Link to="">Service</Link>
        <Link to="">Blog</Link>
        <Link to="/signup">Contact</Link>
        {user?.email ? (
          <>
            {" "}
            <Link to="/bookings">Dashboard</Link>
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
