import SubHero from "@/src/components/layout/SubHero";
import BlogSection from "@/src/components/sections/blog/BlogSection";
import Future from "@/src/components/sections/Future";

const page = () => {
  return (
    <div>
      <SubHero
        title="The VR Wealth of Knowledge"
        description="A brief insight into our journey, values, and mission - learn more about who we are and what drives us."
        image="/images/blog/bh.jpg"
      />
      <BlogSection />
      <Future imageUrl="/images/blog/bh.jpg" />
    </div>
  );
};

export default page;
