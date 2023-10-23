type TechBadgePros = {
  name: string;
};

export const TechBadge = ({ name }: TechBadgePros) => {
  return <span className="text-emerald-400 bg-emerald-900/80">{name}</span>;
};
