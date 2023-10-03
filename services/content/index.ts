import fs from "fs";
import { IPost } from "@/types";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "content/posts");

export function getPostBySlug(slug: string): IPost {
  const filename = `${slug}.md`;
  return getPostByFilename(filename);
}

export function getPostByFilename(filename: string): IPost {
  const filePath = join(postsDirectory, filename);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const post: IPost = {
    data: {
      title: data.title,
      image: data.image,
      slug: data.slug || filename.replace(/\.md$/, ""),
      publishDate: data.publishDate || "3000-01-01",
    },
    abstract: data.abstract || "",
    content,
  };
  return post;
}

export function getPostFilenames(): string[] {
  return fs.readdirSync(postsDirectory);
}
