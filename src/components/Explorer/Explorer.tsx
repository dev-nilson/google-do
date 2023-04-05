import { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FolderIcon from "@mui/icons-material/Folder";

function Explorer() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const docString = localStorage.getItem("doc");

    if (docString) {
      const doc = JSON.parse(docString);
      setTitle(doc.title);
      setDate(doc.date);
    }
  }, []);

  return (
    <section className="bg-white px-10">
      <div className="max-w-5xl mx-auto py-8">
        <div className="flex items-center justify-between text-gray-800 text-md mb-5 px-4">
          <h2 className="font-bold flex-grow">Documents</h2>
          <p className="font-bold mr-12">Date</p>
          <FolderIcon />
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600 cursor-pointer py-3 px-5 rounded-full hover:bg-blue-50">
          <h2 className="font-semibold flex-grow text-gray-800">🟦 {title}</h2>
          <p className="font-medium mr-12">
            {new Date(date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <MoreVertIcon />
        </div>
      </div>
    </section>
  );
}

export default Explorer;
