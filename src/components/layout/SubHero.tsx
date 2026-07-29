import Image from "next/image";
import Button from "../ui/Button";

interface SubHeroProps {
  title: string;
  description: string;
  image: string;
}

const SubHero = ({ title, description, image }: SubHeroProps) => {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-8 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8">
        <div className="max-w-2xl py-4 sm:py-16">
          <h1 className="font-libre mb-4 text-3xl font-semibold text-neutral-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mb-8 max-w-[90%] font-sans text-sm leading-6 text-neutral-700 md:max-w-lg lg:mb-8 lg:text-lg">
            {description}
          </p>
          <Button />
        </div>

        <div className="h-full overflow-hidden shadow-xl">
          <Image
            src={image}
            alt={title}
            width={800}
            height={800}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SubHero;
