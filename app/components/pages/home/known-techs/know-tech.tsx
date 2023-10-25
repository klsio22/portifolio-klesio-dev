import { getRelativeTimeString } from "@/app/ultils/get-relative-time";
import { ReactNode } from "react";

type KnownTechsProps = {
  tech: {
    icon: ReactNode;
    name: string;
    startDate: string;
  };
};

export const KnowTech = ({ tech }: KnownTechsProps) => {
  const relativeTime = getRelativeTimeString(new Date(tech.startDate),'pr-BR')
  return (
    <div>
      <div>
        <p>{tech.name}</p>

        {tech.icon}
      </div>
      <span>{relativeTime}</span>
    </div>
  );
};
