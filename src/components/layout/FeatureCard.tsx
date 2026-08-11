const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/8 p-8 text-white shadow-lg shadow-black/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/12">
      <h3 className="mb-2 text-sm font-semibold">{title}</h3>
      <p className="max-w-md text-sm leading-relaxed text-white/65">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
