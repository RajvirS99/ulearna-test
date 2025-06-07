"use client";

import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
} from "lucide-react";
import { Toggle } from "./ui/toggle";
import { Heading } from "@tiptap/extension-heading";

interface ToggleProps {
  editor: Editor | null;
}

interface TipTapProps {
  description: string;
}

function Toolbar({ editor }: ToggleProps) {
  if (!editor) {
    return null;
  }

  return (
    <div className="border border-input bg-transparent rounded-md">
      <Toggle
        size="sm"
        pressed={editor.isActive("heading")}
        onPressedChange={editor.chain().focus().toggleHeading({ level: 2 }).run}
      >
        <Heading2 className="h-2 w-2" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={editor.chain().focus().toggleBold().run}
      >
        <Bold className="h-2 w-2" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={editor.chain().focus().toggleItalic().run}
      >
        <Italic className="h-2 w-2" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("strike")}
        onPressedChange={editor.chain().focus().toggleStrike().run}
      >
        <Strikethrough className="h-2 w-2" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bulletList")}
        onPressedChange={editor.chain().focus().toggleBulletList().run}
      >
        <List className="h-2 w-2" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("orderedList")}
        onPressedChange={editor.chain().focus().toggleOrderedList().run}
      >
        <ListOrdered className="h-2 w-2" />
      </Toggle>
    </div>
  );
}

function Tiptap({ description }: TipTapProps) {
  const editor = useEditor({
    extensions: [StarterKit, Heading.configure({
      HTMLAttributes: {
        class: "text-xl font-bold",
        levels: [2],
      }
    })],
    content: description,
    editorProps: {
      attributes: {
        class: "rounded-md border min-h-[150px] border-input bg-transparent p-2",
      },
    },
  });

  return (
    <div className="flex flex-col justify-stretch min-h-[250px] gap-2">
      <label htmlFor="postDescription">Description</label>
      <Toolbar editor={editor} />
      <EditorContent id="postDescription" editor={editor} />
    </div>
  );
}

export default Tiptap;
