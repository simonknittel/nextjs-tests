import { Suspense } from "react";
import SyncContent from "../_components/SyncContent";

export const revalidate = 0;

export default function Page() {
  return (
    <main className="flex flex-col gap-8">
      <h1>No streaming</h1>
      
      <SyncContent />
    </main>
  );
}
