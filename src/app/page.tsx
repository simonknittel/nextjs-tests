import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next.js Tests</h1>

      <h2>Streaming</h2>
      <Link href="/tests/streaming/no-streaming">No streaming</Link>
      <Link href="/tests/streaming/without-supsense">Without Suspense</Link>
      <Link href="/tests/streaming/suspense-without-fallback">With suspense but without fallback</Link>
      <Link href="/tests/streaming/suspense-with-fallback">With Suspense and with fallback</Link>
    </main>
  )
}
