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
        <div className="flex items-center justify-between text-gray-700 text-sm mb-5">
          <h2 className="font-semibold flex-grow">Documents</h2>
          <p className="font-semibold mr-12">Date</p>
          <FolderIcon />
        </div>
        <div className="flex items-center justify-between text-gray-700 text-sm">
          <h2 className="font-medium flex-grow">{title}</h2>
          <p className="font-medium mr-12">{date}</p>
          <MoreVertIcon />
        </div>
      </div>
    </section>
  );
}

export default Explorer;
