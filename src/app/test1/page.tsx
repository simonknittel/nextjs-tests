import { Suspense } from "react";
import LoadedContent from "./_components/LoadedContent";
import ImmediateContent from "./_components/ImmediateContent";
import ContentSkeleton from "./_components/ContentSkeleton";
import LoadedContentWithSkeleton from "./_components/LoadedContentWithSkeleton";

export const revalidate = 0;

export default function Page() {
  return (
    <main className="flex flex-col gap-8">
      <ImmediateContent />

      <Suspense>
        <LoadedContent />
      </Suspense>

      <Suspense fallback={<ContentSkeleton />}>
        <LoadedContentWithSkeleton />
      </Suspense>

      <ImmediateContent />
    </main>
  );
}
