import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { items, generateId } from "./store.js";
import { createItemSchema } from "./schema.js";
import type { Item } from "./types.js";

const app = new Hono();

app.get("/", (c) => c.text("dotboard"));

app.get("/items", (c) => {
  return c.json(items);
});

app.get("/items/:id", (c) => {
  const id = Number(c.req.param("id"));
  const item = items.find((i) => i.id === id);

  if (!item) {
    return c.json({ error: "Not Found" }, 404);
  }

  return c.json(item);
});

app.post("/items", async (c) => {
  const body = await c.req.json();
  const result = createItemSchema.safeParse(body);

  if (!result.success) {
    return c.json({ error: "Bad Request" }, 400);
  }

  const item: Item = {
    id: generateId(),
    ...result.data,
    status: "open",
  };

  items.push(item);

  return c.json(item, 201);
});

serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`);
});