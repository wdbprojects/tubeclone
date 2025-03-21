import "server-only";

import { cache } from "react";
import { makeQueryClient } from "./query-client";
import { appRouter } from "./routers/_app";
import { createCallerFactory, createTRPCContext } from "./init";
import { createHydrationHelpers } from "@trpc/react-query/rsc";

export const getQueryClient = cache(makeQueryClient);

const caller = createCallerFactory(appRouter)(createTRPCContext);

export const { trpc, HydrateClient } = createHydrationHelpers<typeof appRouter>(
  caller,
  getQueryClient,
);
