import Image from "next/image";
import Link from "next/link";
import { IconButton } from "@material-tailwind/react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import newDoc from "../../../assets/new.png";

function Panel() {
  return (
    <section className="bg-gray-200 pb-10 px-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between pt-6 pb-2">
          <h2 className="text-gray-900">Start a new document</h2>
          <IconButton
            className="rounded-full border-transparent focus:ring-0 p-6 text-gray-700"
            color="gray"
            variant="outlined"
            ripple={true}
          >
            <MoreVertIcon />
          </IconButton>
        </div>
        <div>
          <Link href="/document">
            <div className="relative h-40 w-32 border-[1px] cursor-pointer border-gray-300 rounded-md hover:border-blue-500">
              <Image className="rounded-md" src={newDoc} fill={true} alt="" />
            </div>
            <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">
              Blank
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Panel;
