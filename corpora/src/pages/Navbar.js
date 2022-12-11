import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-orange-700">
        <Link
          to={"/"}
          className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link
          to={"bar"}
          className="btn btn-ghost normal-case text-xl">
          Chart
        </Link>
      </div>

      <Outlet />
    </>
  );
}
