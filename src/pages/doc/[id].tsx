import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Button } from "@material-tailwind/react";
import SaveIcon from "@mui/icons-material/Save";

function DocPage() {
  return (
    <div>
      <header className="flex justify-between items-center px-5 pt-3 pb-1">
        <Link href="/">
          <Image src={logo} alt="logo" width={25} height={25} />
        </Link>
        <div className="flex-grow ml-3">
          <h2>Untitled Document</h2>
          <div className="items-center text-sm space-x-1 text-gray-800 hidden sm:inline-flex">
            <p className="option">File</p>
            <p className="option">Edit</p>
            <p className="option">View</p>
            <p className="option">Insert</p>
            <p className="option">Format</p>
            <p className="option">Tools</p>
          </div>
        </div>

        <Button className="flex items-center gap-1" size="sm">
          <SaveIcon fontSize="small" />Save
        </Button>
      </header>
    </div>
  );
}

export default DocPage;
