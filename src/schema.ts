import { z } from "zod";

export const createItemSchema = z.object({
  title: z.string().min(1),
  note: z.string(),
  rating: z.number().int().min(1).max(5),
});

export const updateItemSchema = createItemSchema.partial().extend({
  status: z.enum(["open", "doing", "done"]).optional(),
});
