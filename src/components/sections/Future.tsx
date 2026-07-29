import Image from "next/image";
import Button from "../ui/Button";

type FutureProps = {
  imageUrl?: string;
};

const Future = ({ imageUrl = "/images/future/1.jpg" }: FutureProps) => {
  return (
    <section className="mx-auto sm:pl-6">
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Left: Text content */}
        <div className="mx-auto flex max-w-2xl flex-col gap-6 px-6 py-12 sm:py-40">
          <h3 className="heading">
            Build a better future with the <br /> right investments
          </h3>

          <p className="max-w-md">
            Secure your financial future with smart, strategic investments. Our
            expert guidance helps you grow wealth, manage risks, and achieve
            long-term financial success.
          </p>

          <div>
            <Button path="https://calendar.app.google/VAPZhD35wPEbvCjm6" />
          </div>
        </div>
        {/* Right: Image */}
        <div className="relative h-84 w-full overflow-hidden sm:h-full">
          <Image
            src={imageUrl}
            alt="Financial consultant overlooking the city"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Future;
