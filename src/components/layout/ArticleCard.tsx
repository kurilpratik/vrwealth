import Image from "next/image";

interface ArticleCardProps {
  title: string;
  icon: string;
  alt?: string;
}

const ArticleCard = ({
  title,
  icon,
  alt = "financial services offered by VRWealth",
}: ArticleCardProps) => {
  return (
    <article className="group bg-primary-dark relative flex h-96 w-full cursor-pointer flex-col items-center justify-center gap-6 overflow-hidden p-8 text-center text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:h-100 sm:w-100">
      <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10 flex flex-col items-center gap-6">
        <Image
          src={icon}
          height={40}
          width={40}
          alt={alt}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <h4 className="text-2xl leading-snug font-light opacity-90 transition-colors duration-300 group-hover:text-white">
          {title}
        </h4>
      </div>
    </article>
  );
};

export default ArticleCard;
