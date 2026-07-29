import Image from "next/image";

const ClienteleCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="group relative h-72 w-full overflow-hidden sm:h-96">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="bg-primary-dark absolute right-0 bottom-5 left-5 w-[90%] px-5 py-5 text-white sm:bottom-10">
        <h3 className="mb-2 text-base font-semibold">{title}</h3>
        <p className="text-sm leading-relaxed text-neutral-400">{description}</p>
      </div>
    </div>
  );
};

export default ClienteleCard;
