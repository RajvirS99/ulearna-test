import Posts from "@/components/posts/Posts";
import { getPosts } from "@/server/posts";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <div className="py-12 px-24">
      <h1 className="text-4xl font-bold">Blog</h1>
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-6">Posts</h3>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Posts />
        </HydrationBoundary>
      </div>
    </div>
  );
}
