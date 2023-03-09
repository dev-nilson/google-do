import { useState } from "react";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

function TextEditor() {
  const [editorState, seteditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState: any) => {
    seteditorState(editorState);
    console.log(convertToRaw(editorState.getCurrentContent()).blocks);
  };

  return (
    <div className="bg-gray-200 min-h-screen pb-16">
      <Editor
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
        editorClassName="mt-6 p-10 bg-white shadow-md max-w-4xl mx-auto"
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
}

export default TextEditor;
