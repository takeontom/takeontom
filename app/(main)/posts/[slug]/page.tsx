import Post from "@/components/Post";
import { getPostBySlug } from "@/services/content";
import { markdownToHtml } from "@/util";
import { serialize } from "next-mdx-remote/serialize";

import styles from "./PostPage.module.scss";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  return { title: post.data.title };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  post.abstractHtml = await markdownToHtml(post.abstract || "");
  const mdx = await serialize(post.content);

  return (
    <main className={styles.PostPage}>
      <Post post={post} mdx={mdx} />
    </main>
  );
}
