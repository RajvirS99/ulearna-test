"use client";

import { getPostsById } from "@/server/posts";
import { useQuery } from "@tanstack/react-query";

interface PostContentProps {
  id: number;
}

function PostContent({ id }: PostContentProps) {
  const { data: post } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPostsById(id),
  });

  return (
    <div className="mx-auto w-fit p-12">
      <h1 className="text-center font-bold text-3xl mb-6">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default PostContent;
