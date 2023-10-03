"use client";

import { IPost } from "@/types";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import styles from "./PostContent.module.scss";
import { GitHubIconLink } from "../IconLink";

const components = { GitHubIconLink };

interface PostContentProps {
  post: IPost;
  mdx: MDXRemoteSerializeResult;
}

export default function PostContent(props: PostContentProps) {
  return (
    <div className={styles.PostContent}>
      <MDXRemote {...props.mdx} components={components} />
    </div>
  );
}
