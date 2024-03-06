"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Email is invalid." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
});

type TFormSchema = z.infer<typeof FormSchema>;

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TFormSchema>({ resolver: zodResolver(FormSchema) });
  const router = useRouter();

  const onSubmit = async (formData: TFormSchema) => {
    const res = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    if (res?.error) {
      toast.error("Invalid credentials.");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full grid gap-y-6">
      <div className="flex flex-col space-y-2">
        <Input
          {...register("email")}
          type="text"
          placeholder="Email"
          autoComplete="off"
        />
        {errors.email && (
          <p className="text-red-500 text-base">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <Input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500 text-base">{errors.password.message}</p>
        )}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="mr-2 w-4 h-4 animate-spin" />}
        Sign In
      </Button>
    </form>
  );
};
