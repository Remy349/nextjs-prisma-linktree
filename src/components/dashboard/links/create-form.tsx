"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(1, { message: "Title is required." }),
  link: z.string().min(1, { message: "URL is required." }),
});

type TFormSchema = z.infer<typeof FormSchema>;

export const CreateForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TFormSchema>({ resolver: zodResolver(FormSchema) });
  const { data } = useSession();
  const router = useRouter();

  const onSubmit = async (formData: TFormSchema) => {
    await axios
      .post("/api/links", {
        name: formData.name,
        link: formData.link,
        email: data?.user?.email,
      })
      .then(() => {
        toast.success("Link successfully created.");

        router.refresh();

        reset();
      })
      .catch((error) => {
        if (error) {
          toast.error("Link already created.");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-6 w-full">
      <div className="flex flex-col space-y-2">
        <Input
          {...register("name")}
          type="text"
          autoComplete="off"
          placeholder="Title"
        />
        {errors.name && (
          <p className="text-red-500 text-base">{errors.name.message}</p>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <Input
          {...register("link")}
          type="text"
          autoComplete="off"
          placeholder="https://example.com"
        />
        {errors.link && (
          <p className="text-red-500 text-base">{errors.link.message}</p>
        )}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="mr-2 w-4 h-4 animate-spin" />}
        Add
      </Button>
    </form>
  );
};
