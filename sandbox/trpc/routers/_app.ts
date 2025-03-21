import { baseProcedure, createTRPCRouter } from "../init";
import { z } from "zod";

export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return { greeting: `hello ${opts.input.text}` };
    }),
});

export type AppRouter = typeof appRouter;
