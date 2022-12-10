import { Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost normal-case text-xl">Home</a>
      </div>
      <Outlet />
    </>
  );
}
