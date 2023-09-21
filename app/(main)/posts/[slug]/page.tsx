import { getPostBySlug } from "@/services/content";
import { markdownToHtml } from "@/util";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  return { title: post.title };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  post.html = await markdownToHtml(post.content);

  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </main>
  );
}
