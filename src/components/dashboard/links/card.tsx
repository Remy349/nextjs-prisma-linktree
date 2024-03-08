import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DeleteDialog } from "./delete-dialog";

interface ILinkCardProps {
  id: number;
  title: string;
  link: string;
}

export const LinkCard = ({ id, title, link }: ILinkCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{link}</CardDescription>
      </CardHeader>
      <CardFooter>
        <DeleteDialog id={id} />
      </CardFooter>
    </Card>
  );
};
