"use client";

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
import { useMutation } from "@tanstack/react-query";
import { editPost } from "@/server/posts";
import { DialogDescription } from "@radix-ui/react-dialog";
import { toast } from "sonner";

interface EditPostModelProps {
  data: Post;
}

function EditPostModal({ data }: EditPostModelProps) {
  const [formData, setFormData] = useState({
    id: data.id,
    title: data.title,
    body: data.body,
    userId: data.userId,
  });

  const { mutate } = useMutation({
    mutationFn: (values: Post) => editPost(values),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: () => {
        toast("Post updated successfully");
      },
      onError: () => {
        toast.error("Failed to update post");
      },
    });
  };

  return (
    <>
      <DialogContent aria-describedby="edit-post-description">
        <DialogHeader>
          <DialogTitle>Edit Post</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <form className="my-4 flex flex-col gap-4" onSubmit={handleSubmit}>
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
          <Tiptap
            label="Description"
            description={formData.body}
            handleChange={(value: string) =>
              setFormData({ ...formData, body: value })
            }
          />
          <Button className="cursor-pointer" type="submit">
            Submit
          </Button>
        </form>
      </DialogContent>
    </>
  );
}

export default EditPostModal;
