"use client";

import { getPosts } from "@/server/posts";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

function Posts() {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  return (
    <>
      {data?.map(({ title, body, id }: Post) => (
        <div className="hover:bg-gray-200 py-12 px-4 rounded-md" key={id}>
          <Link className="my-4" href={`/posts/${id}`}>
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-600">{body}</p>
          </Link>
        </div>
      ))}
    </>
  );
}

export default Posts;
