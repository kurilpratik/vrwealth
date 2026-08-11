import Image from "next/image";

import { teamData } from "@/src/data/teamData";
import Figures from "../../layout/Figures";
import ScrollReveal from "../../ui/ScrollReveal";
import Link from "next/link";

const TeamSection = () => {
  return (
    <section
      id="our-team"
      className="scroll-mt-24 px-4 py-24 sm:mx-auto sm:max-w-7xl sm:px-0"
    >
      <ScrollReveal>
        <h3 className="py-10 text-center">
          Meet the team that backs the vision and agility of VR Wealth Creation
        </h3>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <div className="relative">
          <Image
            src={"/images/about/team.png"}
            height={200}
            width={1920}
            quality={100}
            alt="VR Wealth Creations Team"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white to-transparent"
          />
        </div>
      </ScrollReveal>

      <Figures />

      <div className="grid grid-cols-2 gap-4 py-10 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
        {teamData.map((member, index) => {
          const email = member.email.trim();
          const phone = member.phone.trim();

          return (
            <ScrollReveal
              key={`${member.name}-${index}`}
              as="article"
              delay={index * 0.06}
              amount={0.1}
              className="group overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_14px_35px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_42px_rgba(15,23,42,0.08)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col gap-3 px-4 py-5 sm:px-5 sm:py-4">
                <h4 className="text-base font-semibold tracking-[-0.02em] text-slate-900 sm:text-lg">
                  {member.name}
                </h4>

                <div className="space-y-1.5">
                  <Link
                    href={`mailto:${email}`}
                    className="hover:text-primary block truncate font-semibold text-neutral-500 transition-colors duration-200"
                    aria-label={`Email ${member.name}`}
                  >
                    {email}
                  </Link>
                  <Link
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="small-heading hover:text-primary block truncate text-sm text-slate-500 transition-colors duration-200"
                    aria-label={`Call ${member.name}`}
                  >
                    {phone}
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};

export default TeamSection;
