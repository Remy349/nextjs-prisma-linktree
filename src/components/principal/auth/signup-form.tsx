"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const FormSchema = z.object({
  username: z.string().min(1, { message: "Username is required." }),
  emailAddress: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Email is invalid." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
});

type TFormSchema = z.infer<typeof FormSchema>;

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TFormSchema>({ resolver: zodResolver(FormSchema) });
  const router = useRouter();

  const onSubmit = async (formData: TFormSchema) => {
    await axios
      .post("/api/auth/sign-up", {
        ...formData,
      })
      .then(() => {
        toast.success("User successfully created.");

        router.replace("/auth/sign-in");
      })
      .catch((error) => {
        if (error) {
          toast.error("User already created.");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full grid gap-y-6">
      <div className="flex flex-col space-y-2">
        <Input
          {...register("username")}
          type="text"
          placeholder="Username"
          autoComplete="off"
        />
        {errors.username && (
          <p className="text-red-500 text-base">{errors.username.message}</p>
        )}
      </div>
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
        Create account
      </Button>
    </form>
  );
};
