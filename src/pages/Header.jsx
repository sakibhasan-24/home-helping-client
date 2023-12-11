import { Link } from "react-router-dom";

export default function Header() {
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
        <Link to="/login">Login</Link>
      </div>
    </header>
  );
}
