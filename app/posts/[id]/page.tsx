import PostContent from "@/components/posts/PostContent";
import { getPostsById } from "@/server/posts";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

interface PostIdPageProps {
  params: Promise<{ id: number }>;
}

async function page({ params }: PostIdPageProps) {
  const { id } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts", id],
    queryFn: () => getPostsById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostContent id={id} />
    </HydrationBoundary>
  );
}

export default page;
