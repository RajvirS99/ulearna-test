import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Post } from "./columns";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Tiptap from "@/components/Tiptap";
import { Button } from "@/components/ui/button";

interface EditPostModelProps {
  data: Post;
}

function EditPostModal({ data }: EditPostModelProps) {
  const [formData, setFormData] = useState({
    title: data.title,
    body: data.body,
  });
  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Post</DialogTitle>
        </DialogHeader>
        <form className="my-4 flex flex-col gap-4" action="">
          <div>
            <label htmlFor="postTitle">Title</label>
            <Input
              id="postTitle"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>
          <Tiptap description={formData.body} />
          <Button className="cursor-pointer" type="submit">Submit</Button>
        </form>
      </DialogContent>
    </>
  );
}

export default EditPostModal;
