"use client";

import { getPosts } from "@/server/posts";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { getExcerpt } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

function Posts() {
  const [hoveredPost, setHoveredPost] = useState<number | undefined>();
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  return (
    <>
      {data?.map(({ title, body, id }: Post) => (
        <Link className="my-4" href={`/posts/${id}`} key={id}>
          <div className="flex items-center justify-between hover:bg-gray-200 py-12 px-4 rounded-md" onMouseEnter={() => setHoveredPost(id)} onMouseLeave={() => setHoveredPost(undefined)}>
            <div>
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-600">{getExcerpt(body)}</p>
            </div>
            <span className={`bg-gray-200 rounded-full p-4 inline-block transform transition-transform duration-300 ease-in-out ${hoveredPost === id ? 'rotate-45' : 'rotate-0'}`}>
              <ArrowUpRight className="w-6 h-6" />
            </span>
          </div>
          <Separator />
        </Link>
      ))}
    </>
  );
}

export default Posts;
