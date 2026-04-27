import Image from "next/image";
import Link from "next/link";
import avatar from "@/assets/user.png";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between items-center mt-5">
      <div></div>
      <ul className="flex gap-10 justify-between">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/career"}>Career</Link>
        </li>
      </ul>

      <div className="flex justify-end items-center gap-3">
        <Image src={avatar} width={50} height={50} alt="User Avatar" />
        <button className="btn btn-active">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
