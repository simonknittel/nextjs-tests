import { Suspense } from "react";
import AsyncContent from "../_components/AsyncContent";

export const revalidate = 0;

export default function Page() {
  return (
    <main className="flex flex-col gap-8">
      <h1>Without Suspense</h1>
      
      <AsyncContent />
    </main>
  );
}
