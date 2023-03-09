import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Button } from "@material-tailwind/react";
import SaveIcon from "@mui/icons-material/Save";
import TextEditor from "@/components/TextEditor/TextEditor";

function DocPage() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    if (!title) {
      inputRef.current?.focus();
      setError("Name document before saving");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <header className="flex justify-between items-center px-5 pt-3 pb-1">
        <Link href="/">
          <Image src={logo} alt="logo" width={25} height={25} />
        </Link>
        <div className="flex flex-col flex-grow ml-3">
          <div>
            <input
              className="w-fit px-2"
              placeholder="Untitled Document"
              ref={inputRef}
              value={title}
              onChange={handleChange}
            />
            <small className="ml-2 text-red-500">{error}</small>
          </div>
          <div className="items-center text-sm space-x-1 text-gray-800 hidden sm:inline-flex">
            <p className="option">File</p>
            <p className="option">Edit</p>
            <p className="option">View</p>
            <p className="option">Insert</p>
            <p className="option">Format</p>
            <p className="option">Tools</p>
          </div>
        </div>

        <Button
          className="flex items-center gap-1"
          size="sm"
          onClick={handleClick}
        >
          <SaveIcon fontSize="small" />
          Save
        </Button>
      </header>
      <TextEditor />
    </div>
  );
}

export default DocPage;
