import { Suspense } from "react";
import AsyncContent from "../_components/AsyncContent";

export const revalidate = 0;

export default function Page() {
  return (
    <main className="flex flex-col gap-8">
      <h1 className="font-bold">Suspense without fallback</h1>

      <Suspense>
        <AsyncContent />
      </Suspense>
    </main>
  );
}
