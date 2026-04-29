import logo from "@/assets/logo.png";
import { format } from "date-fns";
import Image from "next/image";

const Header = () => {
  return (
    <div className="mx-auto text-center space-y-2 mt-5">
      <Image
        loading="eager"
        src={logo}
        width="auto"
        height="auto"
        alt="logo"
        className="mx-auto"
      />
      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;
