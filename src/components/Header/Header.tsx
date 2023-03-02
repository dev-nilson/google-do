import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@material-tailwind/react";

function Header() {
  return (
    <header className="flex items-center sticky top-0 z-50 px-4 py-2 shadow-md bg-white">
      <IconButton
        className="rounded rounded-full border-transparent focus:ring-0 p-6 text-gray-700"
        color="gray"
        variant="outlined"
        ripple={true}
      >
        <FontAwesomeIcon size="xl" icon={faBars} />
      </IconButton>
      <h1>Google Does</h1>
      <div className="mx-5 md:mx-20 flex flex-grow items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md focus-within:shadow-md">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input className="flex-grow px-4 text-base bg-transparent outline-none" type="text" placeholder="Search" />
      </div>
    </header>
  );
}

export default Header;
