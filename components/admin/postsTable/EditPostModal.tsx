import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Post } from "./columns";
import { Input } from "@/components/ui/input";
import { useState } from "react";

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
        <form className="my-4" action="">
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
        </form>
      </DialogContent>
    </>
  );
}

export default EditPostModal;
