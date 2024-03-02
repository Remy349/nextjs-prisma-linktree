import { SignUpForm } from "@/components/auth/signup-form";

export default function Page() {
  return (
    <section className="pt-[4rem] pb-[2.5rem]">
      <div className="px-6 sm:max-w-5xl sm:mx-auto">
        <div className="mb-8 md:mb-12">
          <h1 className="font-bold text-3xl text-center lg:text-4xl">
            Join Linktree
          </h1>
          <p className="text-center text-lg text-muted-foreground">
            Sign up for free!
          </p>
        </div>
        <div className="md:max-w-xl md:mx-auto">
          <SignUpForm />
        </div>
      </div>
    </section>
  );
}