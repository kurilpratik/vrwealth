import Image from "next/image";

import { teamData } from "@/src/data/teamData";
import Figures from "../../layout/Figures";
import ScrollReveal from "../../ui/ScrollReveal";

const TeamSection = () => {
  return (
    <section className="px-4 py-24 sm:mx-auto sm:max-w-7xl sm:px-0">
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

      <div className="grid grid-cols-2 gap-4 py-10 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {teamData.map((member, index) => (
          <ScrollReveal
            key={`${member.name}-${index}`}
            as="article"
            delay={index * 0.06}
            amount={0.1}
            className="overflow-hidden bg-[#F1F1F1] transition-colors duration-300 hover:bg-white"
          >
            <div className="relative aspect-3/4 overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                quality={100}
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover object-top"
              />
            </div>
            <div className="px-4 py-5 sm:px-5 sm:py-4">
              <h4 className="text-base font-semibold text-slate-900 sm:text-lg">
                {member.name}
              </h4>
              <p className="small-heading mt-1 text-sm">{member.role}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
