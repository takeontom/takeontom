import { IPost } from "@/types";
import Image from "next/image";
import styles from "./Post.module.scss";

interface IPostParams {
  post: IPost;
}

export default function Post(params: IPostParams) {
  return (
    <article className={styles.Post}>
      <Image
        className={styles.PostImage}
        src={params.post.data.image.path}
        alt={params.post.data.image.alt || params.post.data.title}
        width={params.post.data.image.width}
        height={params.post.data.image.height}
      />
      <h2>Excerpt:</h2>
      <div
        dangerouslySetInnerHTML={{ __html: params.post.abstractHtml || "" }}
      />
      <h2>Content:</h2>
      <div
        className={styles.PostContent}
        dangerouslySetInnerHTML={{ __html: params.post.contentHtml || "" }}
      />
    </article>
  );
}
