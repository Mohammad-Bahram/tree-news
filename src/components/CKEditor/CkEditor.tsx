import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CkEditor: React.FC = () => {
  const [editorData, setEditorData] = useState<string>("");

  return (
    <div className="w-full mb-[24px]  bg-[#E70B0B26]">
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onChange={(event, editor) => {
          const data = editor.getData();
          setEditorData(data);
        }}
      />
    </div>
  );
};

export default CkEditor;
