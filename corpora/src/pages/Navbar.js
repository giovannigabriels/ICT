import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <Link
          to={"/"}
          className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
      </div>
      <Outlet />
    </>
  );
}
