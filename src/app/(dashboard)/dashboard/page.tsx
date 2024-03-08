import { auth } from "@/auth";
import { CardsWrapper } from "@/components/dashboard/links/cards-wrapper";
import { CreateDialog } from "@/components/dashboard/links/create-dialog";
import { getLinksInUser } from "@/libs/actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page() {
  const userSession = await auth();
  const user = userSession?.user;

  const links = await getLinksInUser(user?.email!);

  return (
    <section className="pt-[4rem] pb-[2.5rem]">
      <div className="px-6 sm:max-w-5xl sm:mx-auto">
        <div className="mb-8">
          <h1 className="font-bold text-center text-2xl">
            Welcome back, <span className="text-primary">{user?.name}!</span>
          </h1>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid gap-y-8">
            <CreateDialog />
            <CardsWrapper items={links} />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
