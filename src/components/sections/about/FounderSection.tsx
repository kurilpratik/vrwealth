import Image from "next/image";

const FounderSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-0">
      <div className="mb-12 text-center lg:mb-16">
        <p className="small-heading text-primary mx-auto">Our Founder</p>
        <h2 className="heading text-3xl font-semibold sm:text-4xl lg:text-5xl">
          Meet Our Visionary Founder & CEO
          <br />
          <span className="text-primary">Dr. Varnika Tiwari</span>
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.2fr_0.9fr] lg:grid-rows-[auto_auto]">
        <div className="rounded-3xl bg-[#F1F1F1] p-8 hover:bg-white lg:col-start-1 lg:row-start-1">
          {/* <p className="text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase">
            Experience
          </p> */}
          <Image
            src={"/images/wallet.svg"}
            height={40}
            width={40}
            alt={"About Varnika"}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <p className="small-heading mt-4 text-sm">About Varnika Tiwaris</p>
          <p className="mt-4 text-xl font-semibold">
            7 years of experience in investing & wealth management
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-[#F1F1F1] hover:bg-white lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <div className="text-primary absolute top-6 right-6 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
            <span className="text-3xl font-black">+</span>
          </div>
          <div className="aspect-4/5 sm:aspect-3/4 lg:aspect-5/6">
            <Image
              src="/images/about/varnika.png"
              alt="Dr. Varnika Tiwari"
              className="h-full w-full object-cover"
              quality={100}
              fill
            />
          </div>
        </div>

        <div className="rounded-3xl bg-[#F1F1F1] p-8 hover:bg-white lg:col-start-3 lg:row-start-1">
          <p className="small-heading text-sm">Academic Credentials</p>
          <ul className="mt-4 list-disc space-y-3 pl-4 text-sm text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold">Ph.D. in Management</span> –
              Specializing in{" "}
              <span className="text-primary font-semibold">
                Derivatives and MCX
              </span>{" "}
              from Galgotias University.
            </li>
            <li>
              <span className="font-semibold">NET Qualified</span> in Commerce
              and Management.
            </li>
          </ul>
        </div>

        <div className="rounded-3xl bg-[#F1F1F1] p-8 hover:bg-white lg:col-start-1 lg:row-start-2">
          <p className="small-heading text-sm">
            Certifications & Accreditations
          </p>
          <ul className="mt-4 list-disc space-y-3 pl-4 text-sm text-slate-700 sm:text-base">
            <li>
              <span className="text-primary font-semibold">GST Certified</span>{" "}
              Professional
            </li>
            <li>
              <span className="text-primary font-semibold">
                SEBI Registered
              </span>{" "}
              Expert
            </li>
            <li>
              <span className="text-primary font-semibold">
                Certified Financial Analyst
              </span>{" "}
              by NISM
            </li>
            <li>
              Combining academic excellence with industry expertise to provide
              strategic financial insights and consulting.
            </li>
          </ul>
        </div>

        <div className="rounded-3xl bg-[#F1F1F1] p-8 shadow-[0_10px_40px_rgba(15,23,42,0.08)] hover:bg-white lg:col-start-3 lg:row-start-2">
          <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg"></p>
          <Image
            src={"/images/wallet.svg"}
            height={40}
            width={40}
            alt={"About Varnika"}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <p className="small-heading mt-4 text-sm">Domain Focus</p>
          <p className="mt-4 text-xl font-semibold">
            ETFs, NASDAQ, NYSE, forex, derivatives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
