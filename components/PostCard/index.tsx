import { IPost } from "@/types";
import Image from "next/image";
import styles from "./PostCard.module.scss";

interface PostCardProps {
  post: IPost;
}

export default function PostCard(props: PostCardProps) {
  return (
    <article className={styles.PostCard}>
      <h3>
        <a href={`/posts/${props.post.data.slug}`}>{props.post.data.title}</a>
      </h3>
      <Image
        src={props.post.data.image.path}
        alt={props.post.data.title}
        width={props.post.data.image.width / 10}
        height={props.post.data.image.height / 10}
      />
      <p>{props.post.abstractHtml}</p>
    </article>
  );
}
