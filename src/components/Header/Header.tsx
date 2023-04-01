import Image from "next/image";
import { IconButton } from "@material-tailwind/react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import logo from "../../../assets/logo.png";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center sticky top-0 z-50 px-4 py-2 shadow-md bg-white">
      <IconButton
        className="rounded-full border-transparent focus:ring-0 p-6 mr-2 text-gray-700"
        color="gray"
        variant="outlined"
        ripple={true}
      >
        <MenuIcon />
      </IconButton>
      <Link className="flex gap-3 items-center text-lg text-gray-700" href="/">
        <Image src={logo} alt="logo" width={25} height={25} />
        <h1>Does</h1>
      </Link>

      <div className="mx-5 md:mx-20 flex flex-grow items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md focus-within:shadow-md">
        <SearchIcon />
        <input
          className="flex-grow px-4 text-base bg-transparent outline-none"
          type="text"
          placeholder="Search"
        />
      </div>

      <IconButton
        className="rounded-full border-transparent focus:ring-0 p-6 text-gray-700"
        color="gray"
        variant="outlined"
        ripple={true}
      >
        <AppsIcon />
      </IconButton>
    </header>
  );
}

export default Header;
