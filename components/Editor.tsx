"use client";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";
import { useEdgeStore } from "@/lib/edgestore";
import { PartialBlock } from "@blocknote/core";
import flatted from 'flatted';

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
}

function Editor({ onChange, initialContent }: EditorProps) {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({ file });
    return response.url;
  };

  const blockNoteEditor = useCreateBlockNote({
    initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock[] : undefined,
    uploadFile: handleUpload,
  });
  blockNoteEditor.onChange((content) => {
    const flattenedContent = flatted.parse(flatted.stringify(content));
    onChange(JSON.stringify(flattenedContent, null, 2));
  });

  return (
    <div>
      <BlockNoteView editor={blockNoteEditor} theme={resolvedTheme === "dark" ? "dark" : "light"} />
    </div>
  );
}

export default Editor;