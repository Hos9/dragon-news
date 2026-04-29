import Image from "next/image";
import Link from "next/link";
import avatar from "@/assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between items-center mt-5">
      <div></div>
      <ul className="flex gap-10 justify-between text-gray-500">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>

      <div className="flex justify-end items-center gap-3">
        <Image
          loading={"eager"}
          src={avatar}
          width="auto"
          height="auto"
          alt="User Avatar"
        />
        <button className="btn bg-black text-white text-xl">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
