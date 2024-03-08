import { TLinks } from "@/types/types";
import { LinkCard } from "./card";

interface ICardWrapperProps {
  items: TLinks[];
}

export const CardsWrapper = ({ items }: ICardWrapperProps) => {
  return (
    <div className="grid gap-y-4">
      {items.map((item) => (
        <LinkCard
          key={item.id}
          id={item.id}
          title={item.name}
          link={item.link}
        />
      ))}
    </div>
  );
};
