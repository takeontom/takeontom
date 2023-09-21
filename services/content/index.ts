import fs from "fs";
import { IPost } from "@/types";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "content/posts");

interface IPostMeta {
  title: string;
  publishDate?: string;
  slug?: string;
  content?: string;
}

export function getPostBySlug(slug: string): IPost {
  const filename = `${slug}.md`;
  return getPostByFilename(filename);
}

export function getPostByFilename(filename: string): IPost {
  const filePath = join(postsDirectory, filename);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const slug = filename.replace(/\.md$/, "");
  const publishDate = "3000-01-01";
  return { content, slug, publishDate, ...(data as IPostMeta) };
}

export function getPostFilenames(): string[] {
  return fs.readdirSync(postsDirectory);
}
