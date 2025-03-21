import { Suspense } from "react";
import { HydrateClient, trpc } from "@/trpc/server";
import PageClient from "./client";
import { ErrorBoundary } from "react-error-boundary";

const HomePage = () => {
  void trpc.hello.prefetch({ text: "ana slut" });

  return (
    <HydrateClient>
      <Suspense fallback={<p>Loading...</p>}>
        <ErrorBoundary
          fallback={
            <p className="w-full bg-red-300 text-red-500 p-3">Error...</p>
          }
        >
          <PageClient />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
};
export default HomePage;
