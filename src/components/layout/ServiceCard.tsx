import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  href: string;
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ href, title, description, image }: ServiceCardProps) => {
  return (
    <Link
      href={href}
      className="group bg-primary-dark relative col-span-2 block h-90 w-auto overflow-hidden rounded-lg border border-white/10 px-6 py-8 text-neutral-300 sm:h-110"
    >
      <div className="flex h-72 flex-col justify-between sm:h-90">
        {/* card content */}
        <div>
          <Image
            src={"/images/wallet.svg"}
            height={32}
            width={32}
            alt="financial services offered by VRWealth"
          />
          <h3 className="my-3 text-xl font-semibold text-white">{title}</h3>
        </div>
        <div>
          <p className="max-w-xl pb-6 text-xs leading-relaxed text-neutral-300 sm:text-sm">
            {description}
          </p>
          <a
            href={href}
            className="inline-flex flex-col text-xs font-semibold sm:text-sm"
          >
            Learn More
            <span className="mt-1 h-px w-full bg-current" />
          </a>
        </div>
      </div>
      {/* Peeking image with hover slide-in */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <div className="absolute inset-y-0 top-0 left-0 w-full translate-x-[65%] translate-y-[-20%] scale-75 -rotate-20 transform transition-all duration-500 ease-out group-hover:translate-x-[45%] group-hover:translate-y-[-10%] group-hover:scale-75 group-hover:rotate-0">
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-2xl object-cover"
          />
        </div>
        {/* <div className="from-primary-dark/85 via-primary-dark/45 absolute inset-0 bg-linear-to-t to-transparent" /> */}
      </div>
    </Link>
  );
};

export default ServiceCard;
