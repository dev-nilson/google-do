import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  ContentState,
  Modifier,
} from "draft-js";
import { openai } from "@/utils/openai";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

function TextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    const state = convertFromRaw(JSON.parse(localStorage.getItem("data")!));
    console.log(state);
    setEditorState(EditorState.createWithContent(state));
  }, []);

  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
    localStorage.setItem(
      "data",
      JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    );
  };

  const handleChange = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      const prompt = convertToRaw(editorState.getCurrentContent()).blocks[0]
        .text;

      openai
        .createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
        })
        .then((result) => {
          const response = result.data.choices[0].message?.content;
          const currentContent = editorState.getCurrentContent();

          const selectionState = editorState.getSelection();
          const newEditorState = EditorState.push(
            editorState,
            Modifier.insertText(
              currentContent,
              selectionState,
              response as string
            ),
            "insert-fragment"
          );

          setEditorState(newEditorState);
          console.log(newEditorState);
        });
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen pb-16" onKeyUp={handleChange}>
      <Editor
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
        editorClassName="mt-6 p-10 bg-white shadow-md max-w-4xl mx-auto"
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        placeholder="Write your question and press enter to get a response ⤶"
      />
    </div>
  );
}

export default TextEditor;
