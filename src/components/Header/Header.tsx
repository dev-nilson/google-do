import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
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
        <FontAwesomeIcon size="2xl" icon={faBars} />
      </IconButton>
      <h1>Google Does</h1>
    </header>
  );
}

export default Header;
