"use client";

import { DataTable } from "@/components/DataTable";
import React from "react";
import { PostsTableColumns } from "./columns";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/server/posts";

function PostsTable() {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });
  return (
    <DataTable columns={PostsTableColumns} data={data} isLoading={isLoading} />
  );
}

export default PostsTable;
