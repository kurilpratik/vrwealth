import Image from "next/image";
import Link from "next/link";

import type { BlogPost } from "@/src/data/blogData";

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-primary-dark relative flex h-full flex-col overflow-hidden border border-white/10 text-neutral-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
    >
      <div className="relative aspect-16/10 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="from-primary-dark/80 absolute inset-0 bg-linear-to-t to-transparent" />
        <span className="bg-primary absolute bottom-4 left-4 rounded-sm px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3 text-xs tracking-wide text-neutral-400 uppercase">
          <span>{formatDate(post.publishedAt)}</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>{post.readTime} read</span>
        </div>

        <h3 className="font-libre group-hover:text-primary-light text-xl leading-snug font-semibold text-white transition-colors duration-300 sm:text-2xl">
          {post.title}
        </h3>

        <p className="max-w-none flex-1 text-sm leading-relaxed text-neutral-400 sm:text-base">
          {post.excerpt}
        </p>

        <span className="group-hover:text-primary-light mt-2 inline-flex w-fit flex-col text-xs font-semibold text-white sm:text-sm">
          Read Article
          <span className="group-hover:bg-primary-light mt-1 h-px w-full origin-left bg-current transition-transform duration-300" />
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
