import BlogCard from "@/src/components/layout/BlogCard";
import { blog } from "@/src/data/blogData";

const BlogSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-0 sm:py-8 sm:pb-42">
      <p className="small-heading">Insights & Education</p>
      <h3 className="heading text-3xl sm:text-4xl">
        Guides to help you invest with clarity
      </h3>
      <p className="max-w-lg pb-12 font-sans text-sm leading-6 text-neutral-600 md:max-w-xl lg:mb-8 lg:text-lg">
        Practical articles on investing, trading, and wealth creation — written
        to help you make informed, long-term financial decisions.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {blog.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
