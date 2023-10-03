import PostCard from "@/components/PostCard";
import { getPostByFilename, getPostFilenames } from "@/services/content";
import { isAfter } from "date-fns";
import styles from "./PostsPage.module.scss";

export default async function Page() {
  const postFilenames = getPostFilenames();
  return (
    <main className={styles.main}>
      {postFilenames.map((filename, key) => {
        const post = getPostByFilename(filename);

        if (isAfter(new Date(post.data.publishDate), new Date())) {
          return null;
        }

        return <PostCard key={key} post={post} />;
      })}
    </main>
  );
}
