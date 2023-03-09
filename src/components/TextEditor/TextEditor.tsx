import { useEffect, useState } from "react";
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
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    const state = convertFromRaw(JSON.parse(
      '{"blocks":[{"key":"69as9","text":"abcs","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}'
    ));

    setEditorState(EditorState.createWithContent(state));
  }, []);

  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
    // console.log(convertToRaw(editorState.getCurrentContent()));
  };

  return (
    <div className="bg-gray-200 min-h-screen pb-16">
      <Editor
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
        editorClassName="mt-6 p-10 bg-white shadow-md max-w-4xl mx-auto"
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
}

export default TextEditor;
