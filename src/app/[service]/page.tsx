import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Button from "@/src/components/ui/Button";
import { Services, getServiceBySlug } from "@/src/data/services";

type ServicePageProps = {
  params: Promise<{ service: string }>;
};

export const generateStaticParams = () =>
  Services.map((service) => ({ service: service.slug }));

export const generateMetadata = async ({ params }: ServicePageProps) => {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found | VR Wealth Creation" };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
};

const ServicePage = async ({ params }: ServicePageProps) => {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const otherServices = Services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-0 sm:py-24">
        <Link
          href="/#services"
          className="text-primary mb-8 inline-flex text-sm font-semibold hover:underline"
        >
          ← Back to Services
        </Link>

        <p className="small-heading text-primary">{service.category}</p>
        <h1 className="font-libre mb-4 text-3xl font-semibold text-neutral-900 sm:text-4xl lg:text-5xl">
          {service.title}
        </h1>
        <p className="mb-8 max-w-none text-base leading-7 text-neutral-500 sm:text-lg">
          {service.tagline}
        </p>

        <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          {service.content.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="max-w-none text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <section className="bg-primary-light/40 mt-12 rounded-lg p-6 sm:p-8">
          <h2 className="font-libre mb-4 text-xl font-semibold text-neutral-900 sm:text-2xl">
            What you get
          </h2>
          <ul className="space-y-3">
            {service.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-base text-neutral-700 sm:text-lg"
              >
                <span className="bg-primary mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-lg border border-neutral-200 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="font-libre text-lg font-semibold text-neutral-900">
              Ready to get started?
            </p>
            <p className="mt-1 max-w-none text-sm text-neutral-600 sm:text-base">
              Book a free consultation and we&apos;ll show you how{" "}
              {service.title.toLowerCase()} fits your goals.
            </p>
          </div>
          <Button path="/contact" label="Book Consultation" size="sm" />
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary-light text-primary rounded-sm px-3 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>

      <section className="border-t border-neutral-100 bg-neutral-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-0">
          <p className="small-heading">Explore more</p>
          <h2 className="font-libre mb-8 text-2xl font-semibold text-neutral-900">
            Other services we offer
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                className="group rounded-lg border border-neutral-200 bg-white p-5 transition hover:border-primary/30 hover:shadow-sm"
              >
                <p className="text-primary mb-1 text-xs font-medium uppercase tracking-wide">
                  {item.category}
                </p>
                <h3 className="font-libre text-base font-semibold text-neutral-900 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
