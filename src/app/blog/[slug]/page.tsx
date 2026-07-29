import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { blog, getBlogBySlug } from "@/src/data/blogData";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () =>
  blog.map((post) => ({ slug: post.slug }));

export const generateMetadata = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return { title: "Article Not Found | VR Wealth Creation" };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-0 sm:py-24">
        <Link
          href="/blog"
          className="text-primary mb-8 inline-flex text-sm font-semibold hover:underline"
        >
          ← Back to Blog
        </Link>

        <p className="small-heading text-primary">{post.category}</p>
        <h1 className="font-libre mb-6 text-3xl font-semibold text-neutral-900 sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
          <span>{post.author}</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>{formatDate(post.publishedAt)}</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>{post.readTime} read</span>
        </div>

        <div className="relative mb-12 aspect-video w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          {post.content.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="max-w-none text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary-light text-primary rounded-sm px-3 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
