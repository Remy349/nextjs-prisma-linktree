import { TLinks } from "@/types/types";
import { User } from "next-auth";

interface IPreviewProps {
  items: TLinks[];
  user: User | undefined;
}

export const Preview = ({ items, user }: IPreviewProps) => {
  return (
    <article
      id="linkPreview"
      className="border-black border-[8px] rounded-lg h-[568px] overflow-hidden relative"
    >
      <div className="py-12 px-8 overflow-y-auto h-[568px]">
        <div className="flex items-center flex-col space-y-2 mb-8">
          <div className="uppercase bg-gray-100 flex items-center justify-center w-16 h-16 rounded-full">
            <h1 className="font-semibold">{user?.name?.substring(0, 2)}</h1>
          </div>
          <h2 className="text-center text-primary font-semibold text-lg">
            {user?.name}
          </h2>
        </div>
        <div className="grid gap-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="shadow-sm px-6 py-4 border bg-card rounded-lg"
            >
              <h3 className="text-center font-medium">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
