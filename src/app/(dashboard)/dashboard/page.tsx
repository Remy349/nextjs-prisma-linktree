import { auth } from "@/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page() {
  const data = await auth()
  console.log(data?.user)

  return (
    <section>
      <div>DASHBOARD</div>
    </section>
  );
}
