"use client";

import { IPost } from "@/types";
import Image from "next/image";
import styles from "./Post.module.scss";

import { MDXRemote } from "next-mdx-remote";

interface IPostProps {
  post: IPost;
  mdx: any;
}

export default function Post(props: IPostProps) {
  return (
    <article className={styles.Post}>
      <Image
        className={styles.PostImage}
        src={props.post.data.image.path}
        alt={props.post.data.image.alt || props.post.data.title}
        width={props.post.data.image.width}
        height={props.post.data.image.height}
      />
      <h2>Excerpt:</h2>
      <div
        dangerouslySetInnerHTML={{ __html: props.post.abstractHtml || "" }}
      />
      <h2>Content:</h2>
      <MDXRemote {...props.mdx} />
    </article>
  );
}
