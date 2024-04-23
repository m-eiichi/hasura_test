import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useCustomForm = (schema: any, defaultValues: any) => {
  type Schema = z.infer<typeof schema>;

  const {
    register,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    defaultValues: { defaultValues },
    resolver: zodResolver(schema),
  });

  return {
    register,
    watch,
    control,
    handleSubmit,
    errors,
  };
};
