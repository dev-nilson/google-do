import MoreVertIcon from "@mui/icons-material/MoreVert";
import FolderIcon from "@mui/icons-material/Folder";

function Explorer() {
  return (
    <section className="bg-white px-10">
      <div className="max-w-5xl mx-auto py-8">
        <div className="flex items-center justify-between text-gray-700 text-sm mb-5">
          <h2 className="font-semibold flex-grow">Documents</h2>
          <p className="font-semibold mr-12">Date</p>
          <FolderIcon />
        </div>
        <div className="flex items-center justify-between text-gray-700 text-sm">
          <h2 className="font-medium flex-grow">Title</h2>
          <p className="font-medium mr-12">April 4, 2023</p>
          <MoreVertIcon />
        </div>
      </div>
    </section>
  );
}

export default Explorer;
