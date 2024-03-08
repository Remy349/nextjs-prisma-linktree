import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trash } from "lucide-react";

interface ILinkCardProps {
  title: string;
  link: string;
}

export const LinkCard = ({ title, link }: ILinkCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{link}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="destructive" size="icon">
          <Trash className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
