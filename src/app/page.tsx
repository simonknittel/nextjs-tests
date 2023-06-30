import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1 className="font-bold">Next.js Tests</h1>

      <h2 className="font-bold">Streaming</h2>
      <ul>
        <li><Link className="underline" href="/tests/streaming/no-streaming">No streaming</Link></li>
        <li><Link className="underline" href="/tests/streaming/without-suspense">Without Suspense</Link></li>
        <li><Link className="underline" href="/tests/streaming/suspense-without-fallback">With Suspense but without fallback</Link></li>
        <li><Link className="underline" href="/tests/streaming/suspense-with-fallback">With Suspense and with fallback</Link></li>
      </ul>
    </main>
  )
}
