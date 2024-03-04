"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  emailAddress: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Email is invalid." }),
  password: z.string().min(1, { message: "Password is required." }),
});

type TFormSchema = z.infer<typeof FormSchema>;

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TFormSchema>({ resolver: zodResolver(FormSchema) });

  const onSubmit = async (formData: TFormSchema) => {
    await new Promise((response) => setTimeout(response, 3000));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full grid gap-y-6">
      <div className="flex flex-col space-y-2">
        <Input
          {...register("emailAddress")}
          type="text"
          placeholder="Email"
          autoComplete="off"
        />
        {errors.emailAddress && (
          <p className="text-red-500 text-base">
            {errors.emailAddress.message}
          </p>
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
