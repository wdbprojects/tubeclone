"use client";

import { trpc } from "../../../sandbox/trpc/client";

const ClientGreeting = () => {
  const greeting = trpc.hello.useQuery();
  if (!greeting.data) {
    return <div>Loading...</div>;
  }
  return <div>{greeting.data.greeting}</div>;
};
export default ClientGreeting;
